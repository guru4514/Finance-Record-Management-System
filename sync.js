// ========================================
// CLOUD SYNC SYSTEM (Firebase)
// ========================================

let firebaseApp = null;
let db = null;
let auth = null;
let currentUser = null;
let isSyncing = false;

/**
 * Initialize Firebase with the provided configuration.
 * @param {Object} config - Firebase configuration object
 */
function initFirebase(config) {
    if (!config || !config.apiKey) {
        console.warn("Firebase config is missing or invalid.");
        return false;
    }
    
    try {
        if (!firebase.apps.length) {
            firebaseApp = firebase.initializeApp(config);
        } else {
            firebaseApp = firebase.app();
        }
        db = firebase.firestore();
        auth = firebase.auth();
        
        // Listen for auth state changes
        auth.onAuthStateChanged((user) => {
            currentUser = user;
            updateSyncUI();
            if (user) {
                console.log("Firebase Auth: Logged in as", user.email);
            } else {
                console.log("Firebase Auth: Logged out");
            }
        });
        
        return true;
    } catch (error) {
        console.error("Firebase Initialization Error:", error);
        return false;
    }
}

/**
 * Sign in using Google Auth Provider
 */
async function signInWithGoogle() {
    if (!auth) {
        showToast("Please save your Firebase Config first", "error");
        return;
    }
    
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
        showToast("Successfully signed in!", "success");
    } catch (error) {
        console.error("Sign-in error:", error);
        showToast("Sign-in failed: " + error.message, "error");
    }
}

/**
 * Sign out of Firebase
 */
async function signOutFirebase() {
    if (auth) {
        await auth.signOut();
        showToast("Signed out", "success");
    }
}

/**
 * Push local data to Firestore
 */
async function pushToCloud(showNotification = false) {
    if (!db || !currentUser || isSyncing) return;
    
    isSyncing = true;
    updateSyncUI();
    
    try {
        const customers = getCustomers();
        const payments = getPayments();
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        
        // We store everything in a single document under the user's UID to keep reads/writes cheap
        const userRef = db.collection('users').doc(currentUser.uid);
        
        await userRef.set({
            customers: JSON.stringify(customers),
            payments: JSON.stringify(payments),
            lastSynced: timestamp,
            email: currentUser.email
        });
        
        // Update local sync timestamp
        const settings = getSettings();
        settings.lastSynced = new Date().toISOString();
        saveSettings(settings);
        
        if (showNotification) {
            showToast("Successfully synced to cloud!", "success");
        }
        console.log("Background sync complete.");
    } catch (error) {
        console.error("Cloud Sync Error:", error);
        if (showNotification) {
            showToast("Sync failed: " + error.message, "error");
        }
    } finally {
        isSyncing = false;
        updateSyncUI();
    }
}

/**
 * Pull data from Firestore and overwrite local database
 */
async function pullFromCloud() {
    if (!db || !currentUser || isSyncing) return;
    
    if (!confirm("Are you sure? This will OVERWRITE your local data with the cloud data!")) {
        return;
    }
    
    isSyncing = true;
    updateSyncUI();
    
    try {
        const userRef = db.collection('users').doc(currentUser.uid);
        const doc = await userRef.get();
        
        if (doc.exists) {
            const data = doc.data();
            const customers = JSON.parse(data.customers || '[]');
            const payments = JSON.parse(data.payments || '[]');
            
            // Save to local IndexedDB
            saveCustomers(customers);
            savePayments(payments);
            
            // Update local sync timestamp
            const settings = getSettings();
            if (data.lastSynced) {
                // If it's a Firestore timestamp
                settings.lastSynced = data.lastSynced.toDate ? data.lastSynced.toDate().toISOString() : new Date().toISOString();
            } else {
                settings.lastSynced = new Date().toISOString();
            }
            saveSettings(settings);
            
            showToast("Data restored successfully!", "success");
            
            // Refresh current view
            if (typeof refreshDashboard === 'function' && document.getElementById('view-dashboard').classList.contains('active')) {
                refreshDashboard();
            }
        } else {
            showToast("No backup found in cloud.", "error");
        }
    } catch (error) {
        console.error("Restore Error:", error);
        showToast("Restore failed: " + error.message, "error");
    } finally {
        isSyncing = false;
        updateSyncUI();
    }
}

/**
 * Update the Sync UI in Settings
 */
function updateSyncUI() {
    const statusEl = document.getElementById('syncStatusText');
    const loginBtn = document.getElementById('syncLoginBtn');
    const logoutBtn = document.getElementById('syncLogoutBtn');
    const pushBtn = document.getElementById('syncPushBtn');
    const pullBtn = document.getElementById('syncPullBtn');
    const configGroup = document.getElementById('firebaseConfigGroup');
    
    if (!statusEl) return; // UI not rendered yet
    
    if (firebaseApp && auth) {
        configGroup.style.display = 'none'; // Hide config once loaded
        
        if (currentUser) {
            const settings = getSettings();
            let syncTime = "Never";
            if (settings.lastSynced) {
                const d = new Date(settings.lastSynced);
                syncTime = d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
            }
            
            statusEl.innerHTML = `<span style="color: var(--success-500)">✓ Logged in as ${currentUser.email}</span><br><small style="color: var(--text-muted)">Last Synced: ${syncTime}</small>`;
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
            pushBtn.style.display = 'inline-block';
            pullBtn.style.display = 'inline-block';
            
            if (isSyncing) {
                pushBtn.disabled = true;
                pullBtn.disabled = true;
                pushBtn.textContent = 'Syncing...';
            } else {
                pushBtn.disabled = false;
                pullBtn.disabled = false;
                pushBtn.textContent = 'Sync to Cloud';
            }
        } else {
            statusEl.innerHTML = `<span style="color: var(--warning-500)">⚠ Not logged in</span>`;
            loginBtn.style.display = 'inline-block';
            logoutBtn.style.display = 'none';
            pushBtn.style.display = 'none';
            pullBtn.style.display = 'none';
        }
    } else {
        statusEl.innerHTML = `<span style="color: var(--danger-500)">❌ Firebase not configured</span>`;
        configGroup.style.display = 'block';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'none';
        pushBtn.style.display = 'none';
        pullBtn.style.display = 'none';
    }
}

/**
 * Load Firebase Config from settings and initialize automatically
 */
function tryAutoInitFirebase() {
    const settings = getSettings();
    if (settings.firebaseConfig) {
        try {
            const config = JSON.parse(settings.firebaseConfig);
            initFirebase(config);
        } catch (e) {
            console.error("Failed to parse saved Firebase config");
        }
    }
}

function saveFirebaseConfig() {
    const configStr = document.getElementById('firebaseConfigInput').value.trim();
    if (!configStr) {
        showToast("Please enter valid JSON config", "error");
        return;
    }
    
    try {
        // Find JSON object if they pasted the whole const firebaseConfig = {...}
        let cleanStr = configStr;
        const match = configStr.match(/{[\s\S]*}/);
        if (match) {
            cleanStr = match[0];
        }
        
        // Test parsing (using eval to handle unquoted keys sometimes found in JS snippets)
        let configObj;
        try {
            configObj = JSON.parse(cleanStr);
        } catch(e) {
            // Attempt fallback eval if JSON.parse fails due to unquoted keys
            configObj = eval('(' + cleanStr + ')'); 
        }
        
        if (!configObj || !configObj.apiKey) throw new Error("Missing apiKey");
        
        // Save to settings
        const settings = getSettings();
        settings.firebaseConfig = JSON.stringify(configObj);
        saveSettings(settings);
        
        // Initialize
        if (initFirebase(configObj)) {
            showToast("Firebase Config Saved!", "success");
            updateSyncUI();
        }
    } catch (e) {
        console.error("Config parse error:", e);
        showToast("Invalid config format. Please paste the exact JSON object.", "error");
    }
}

// Attempt to initialize on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(tryAutoInitFirebase, 500);
});
