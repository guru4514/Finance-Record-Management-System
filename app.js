/* ========================================
   PIGMIE RECORD MANAGEMENT SYSTEM - APP
   ======================================== */

// === Data Store (localStorage) ===
const STORAGE_KEYS = {
    CUSTOMERS: 'pigmie_customers',
    PAYMENTS: 'pigmie_payments',
    LANGUAGE: 'pigmie_language',
    SETTINGS: 'pigmie_settings'
};

const AMOUNT_OPTIONS = [50, 100, 150, 200, 250, 300, 400, 450, 500, 550, 600, 650, 700, 1000, 1500, 2000, 2500, 3000];

// === Translation System ===
let currentLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE) || 'en';

const TRANSLATIONS = {
    en: {
        // App
        appName: 'Pigmie',
        appSubtitle: 'Record Manager',

        // Navigation
        navDashboard: 'Dashboard',
        navCustomers: 'Customers',
        navDailyEntry: 'Daily Entry',
        navRecords: 'Records',

        // Dashboard Stats
        statTotalCustomers: 'Total Customers',
        statTotalCollected: 'Total Collected',
        statPendingAmount: 'Pending Amount',
        statTodayCollection: "Today's Collection",

        // Dashboard Cards
        collectionEfficiency: "Today's Collection Efficiency",
        expected: 'Expected',
        actual: 'Actual',
        attentionNeeded: 'Attention Needed',
        noMissedPayments: 'All customers are up to date',
        recentPayments: 'Recent Payments',
        upcomingDeadlines: 'Upcoming Deadlines',
        noPaymentsYet: 'No payments recorded yet',
        noDeadlines: 'No upcoming deadlines',

        // Customer
        noCustomersYet: 'No customers added yet',
        clickAddCustomer: 'Click "Add Customer" to get started',
        noCustomersFound: 'No customers found',
        tryDifferentSearch: 'Try a different search term',
        searchCustomersPlaceholder: 'Search customers by name or phone...',
        searchCustomerPlaceholder: 'Search customer...',

        // Customer Card Labels
        customerType: 'Customer Type',
        loanCustomer: 'Loan Customer',
        savingCustomer: 'Saving Customer',
        loanAmount: 'Loan Amount',
        savingAmount: 'Saving Amount',
        issuedDate: 'Issued Date',
        deadline: 'Deadline',
        collected: 'Collected',
        pending: 'Pending',
        collectionProgress: 'Collection Progress',

        // Daily Entry
        entryDate: 'Entry Date',
        noCustomersToShow: 'No customers to show',
        addCustomersFirst: 'Add customers first to start daily entries',
        orEnterManually: 'Or enter amount manually',
        save: 'Save',
        paid: 'Paid',
        pendingStatus: 'Pending',
        loan: 'Loan',

        // Records
        noRecords: 'No records to display',
        recordsWillAppear: 'Records will appear once payments are entered',
        noPaymentsRecorded: 'No payments recorded',
        progress: 'Progress',
        date: 'Date',
        amount: 'Amount',
        runningTotal: 'Running Total',

        // Modal
        addNewCustomer: 'Add New Customer',
        editCustomer: 'Edit Customer',
        customerRecord: 'Customer Record',
        labelCustomerName: 'Customer Name <span class="required">*</span>',
        labelPhone: 'Phone Number <span class="required">*</span>',
        labelCustomerType: 'Customer Type <span class="required">*</span>',
        labelLoanAmount: 'Loan Amount (₹) <span class="required">*</span>',
        labelSavingAmount: 'Saving Amount (₹) <span class="required">*</span>',
        labelIssuedDate: 'Issued Date <span class="required">*</span>',
        labelDeadline: 'Deadline <span class="required">*</span>',
        phCustomerName: 'Enter full name',
        phPhone: 'Enter phone number',
        phLoanAmount: 'Enter loan amount',
        phSavingAmount: 'Enter saving amount',
        btnCancel: 'Cancel',
        btnSaveCustomer: 'Save Customer',
        btnUpdateCustomer: 'Update Customer',
        addCustomer: 'Add Customer',

        // Detail Modal
        totalPaid: 'Total Paid',
        overallProgress: 'Overall Progress',
        paymentHistory: 'Payment History',
        entries: 'entries',
        noPaymentsRecordedYet: 'No payments recorded yet',

        // Toasts
        customerAdded: 'Customer added successfully!',
        customerUpdated: 'Customer updated successfully!',
        customerDeleted: 'Customer deleted successfully!',
        paymentDeleted: 'Payment deleted!',
        selectDateFirst: 'Please select a date first!',
        selectOrEnterAmount: 'Please select or enter an amount!',
        amountRecorded: 'recorded for',
        customer: 'customer',

        // Confirm
        confirmDeleteCustomer: 'Are you sure you want to delete this customer? All payment records will also be deleted.',
        confirmDeletePayment: 'Delete this payment entry?',
        confirmCancel: 'Cancel',
        confirmDelete: 'Delete',

        // Deadline badges
        dOverdue: 'd overdue',
        dLeft: 'd left',

        // Lang toggle
        langSwitch: 'ಕನ್ನಡ',

        // Navigation
        navSettings: 'Settings',

        // Settings Page
        settingsBusinessProfile: 'Business Profile',
        settingsBusinessName: 'Business Name',
        settingsBusinessNameDesc: 'Name displayed in sidebar and exports',
        settingsBusinessNamePh: 'Enter business name',
        settingsOwnerName: 'Owner Name',
        settingsOwnerNameDesc: 'Your name for records',
        settingsOwnerNamePh: 'Enter owner name',
        settingsSaved: 'Settings saved!',

        settingsAppLock: 'App Lock',
        settingsEnablePin: 'PIN Lock',
        settingsEnablePinDesc: 'Require a 4-digit PIN to open the app',
        settingsChangePin: 'Change PIN',
        settingsChangePinDesc: 'Update your current PIN',
        setPinTitle: 'Set PIN',
        changePinTitle: 'Change PIN',
        enterNewPin: 'Enter new 4-digit PIN',
        confirmNewPin: 'Confirm your PIN',
        enterCurrentPin: 'Enter current PIN',
        enterPinToUnlock: 'Enter PIN to unlock',
        pinSet: 'PIN has been set!',
        pinChanged: 'PIN changed successfully!',
        pinRemoved: 'PIN lock disabled!',
        pinMismatch: 'PINs do not match. Try again.',
        wrongPin: 'Wrong PIN. Try again.',
        wrongCurrentPin: 'Current PIN is incorrect.',

        settingsDefaults: 'Defaults',
        settingsDefaultAmount: 'Default Amount',
        settingsDefaultAmountDesc: 'Default daily collection amount',

        settingsBackupRestore: 'Backup & Restore',
        settingsExportBackup: 'Export Backup',
        settingsExportBackupDesc: 'Download all data as a JSON file',
        settingsImportBackup: 'Import Backup',
        settingsImportBackupDesc: 'Restore data from a backup file',
        backupExported: 'Backup exported successfully!',
        backupImported: 'Backup imported successfully! Data restored.',
        backupInvalid: 'Invalid backup file. Please select a valid JSON backup.',
        confirmImportBackup: 'This will replace ALL existing data with the backup. Are you sure?',
        confirmImportBtn: 'Import',

        settingsDangerZone: 'Danger Zone',
        settingsClearAll: 'Clear All Data',
        settingsClearAllDesc: 'Permanently delete all customers, payments, and settings',
        confirmClearAll: 'Are you absolutely sure? This will permanently delete ALL customers, payments, and settings. This cannot be undone!',
        confirmClearBtn: 'Delete Everything',
        dataCleared: 'All data has been cleared!',

        settingsAboutVersion: 'Pigmie Record Manager v1.0.0',
        settingsAboutCredit: 'Built By Guru',

        // Phase 2 - Interest
        labelInterestRate: 'Interest Rate (% monthly)',
        phInterestRate: 'e.g. 2',
        interestRate: 'Interest Rate',
        totalRepayable: 'Total Repayable',
        interestEarned: 'Interest',
        principalAmount: 'Principal',
        monthlyInterest: '/month',

        // Phase 2 - Loan Status
        filterAll: 'All',
        filterActive: 'Active',
        filterClosed: 'Closed',
        statusActive: 'Active',
        statusClosed: 'Closed',
        closeLoan: 'Close Loan',
        renewLoan: 'Renew Loan',
        loanClosed: 'Loan closed successfully!',
        loanRenewed: 'Loan renewed! New cycle started.',
        confirmCloseLoan: 'Mark this loan as closed? The customer will be moved to the closed list.',
        confirmClose: 'Close',

        // Phase 2 - Edit Payment
        editPayment: 'Edit Payment',
        editPaymentTitle: 'Edit Payment',
        editAmount: 'Amount (₹)',
        editDate: 'Date',
        paymentUpdated: 'Payment updated!',
        btnSave: 'Save',
        btnUpdate: 'Update',

        // Phase 3 - Reports
        navReports: 'Reports',
        reportsThisMonth: 'This Month',
        reportsActiveLoans: 'Active Loans',
        reportsDefaulters: 'Defaulters',
        reportsCollectionTrend: 'Collection Trend (Last 30 Days)',
        reportsDefaultersList: 'Defaulters List (>3 Days Overdue)',
        reportsDataExport: 'Data Export (Excel/CSV)',
        exportCustomers: 'Export Customers',
        exportPayments: 'Export Payments',
        noDefaulters: 'No Defaulters 🎉',
        allCustomersPaying: 'All active customers are paying on time!',
        daysOverdue: 'days',
        overdueLabel: 'overdue',

        // Phase 4 - Areas, Bulk Entry, Reminders
        lblCustomerArea: 'Area / Route',
        allAreas: 'All Areas',
        btnBatchCollect: 'Batch Collect',
        bulkCollectTitle: 'Batch Collect',
        lblBulkAmount: 'Amount per customer (₹)',
        btnConfirmBulk: 'Confirm Collection',
        selectedCustomers: 'selected',
        btnSendReminder: 'Send Reminder',
        reminderMessage: 'Hello {name}, this is a gentle reminder that your Pigmie payment of {amount} is pending. Please arrange the payment at your earliest convenience. Thank you!',

        // Phase 6 - Sort
        sortNameAsc: 'Name (A-Z)',
        sortNameDesc: 'Name (Z-A)',
        sortAmountDesc: 'Amount (High-Low)',
        sortDeadlineAsc: 'Deadline (Closest)',
        sortNewest: 'Recently Added',

        // Phase 7 - Undo
        undo: 'Undo',
        confirmUndo: 'Are you sure you want to undo this action?',
        actionUndone: 'Action successfully undone.',
        appearance: 'Appearance',
        themeMode: 'Theme Mode',
        themeModeDesc: 'Switch between Light and Dark mode.'
    },
    kn: {
        // App
        appName: 'ಪಿಗ್ಮಿ',
        appSubtitle: 'ದಾಖಲೆ ನಿರ್ವಾಹಕ',

        // Navigation
        navDashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
        navCustomers: 'ಗ್ರಾಹಕರು',
        navDailyEntry: 'ದೈನಂದಿನ ನಮೂದು',
        navRecords: 'ದಾಖಲೆಗಳು',

        // Dashboard Stats
        statTotalCustomers: 'ಒಟ್ಟು ಗ್ರಾಹಕರು',
        statTotalCollected: 'ಒಟ್ಟು ಸಂಗ್ರಹ',
        statPendingAmount: 'ಬಾಕಿ ಮೊತ್ತ',
        statTodayCollection: 'ಇಂದಿನ ಸಂಗ್ರಹ',

        // Dashboard Cards
        collectionEfficiency: 'ಇಂದಿನ ಸಂಗ್ರಹಣೆ ದಕ್ಷತೆ',
        expected: 'ನಿರೀಕ್ಷಿತ',
        actual: 'ವಾಸ್ತವಿಕ',
        attentionNeeded: 'ಗಮನ ಹರಿಸಬೇಕಿದೆ',
        noMissedPayments: 'ಎಲ್ಲಾ ಗ್ರಾಹಕರು ಸದ್ಯದವರೆಗಿದ್ದಾರೆ',
        recentPayments: 'ಇತ್ತೀಚಿನ ಪಾವತಿಗಳು',
        upcomingDeadlines: 'ಮುಂಬರುವ ಗಡುವು',
        noPaymentsYet: 'ಇನ್ನೂ ಯಾವುದೇ ಪಾವತಿ ದಾಖಲಾಗಿಲ್ಲ',
        noDeadlines: 'ಮುಂಬರುವ ಗಡುವುಗಳಿಲ್ಲ',

        // Customer
        noCustomersYet: 'ಇನ್ನೂ ಯಾವುದೇ ಗ್ರಾಹಕರನ್ನು ಸೇರಿಸಲಾಗಿಲ್ಲ',
        clickAddCustomer: '"ಗ್ರಾಹಕರನ್ನು ಸೇರಿಸಿ" ಕ್ಲಿಕ್ ಮಾಡಿ ಪ್ರಾರಂಭಿಸಿ',
        noCustomersFound: 'ಯಾವುದೇ ಗ್ರಾಹಕರು ಕಂಡುಬಂದಿಲ್ಲ',
        tryDifferentSearch: 'ಬೇರೆ ಹುಡುಕಾಟ ಪದವನ್ನು ಪ್ರಯತ್ನಿಸಿ',
        searchCustomersPlaceholder: 'ಹೆಸರು ಅಥವಾ ಫೋನ್ ಮೂಲಕ ಹುಡುಕಿ...',
        searchCustomerPlaceholder: 'ಗ್ರಾಹಕರನ್ನು ಹುಡುಕಿ...',

        // Customer Card Labels
        loanAmount: 'ಸಾಲದ ಮೊತ್ತ',
        issuedDate: 'ನೀಡಿದ ದಿನಾಂಕ',
        deadline: 'ಗಡುವು',
        collected: 'ಸಂಗ್ರಹಿಸಲಾಗಿದೆ',
        pending: 'ಬಾಕಿ',
        collectionProgress: 'ಸಂಗ್ರಹ ಪ್ರಗತಿ',

        // Daily Entry
        entryDate: 'ನಮೂದು ದಿನಾಂಕ',
        noCustomersToShow: 'ತೋರಿಸಲು ಗ್ರಾಹಕರಿಲ್ಲ',
        addCustomersFirst: 'ದೈನಂದಿನ ನಮೂದನ್ನು ಪ್ರಾರಂಭಿಸಲು ಮೊದಲು ಗ್ರಾಹಕರನ್ನು ಸೇರಿಸಿ',
        orEnterManually: 'ಅಥವಾ ಮೊತ್ತವನ್ನು ಕೈಯಿಂದ ನಮೂದಿಸಿ',
        save: 'ಉಳಿಸಿ',
        paid: 'ಪಾವತಿಸಲಾಗಿದೆ',
        pendingStatus: 'ಬಾಕಿ',
        loan: 'ಸಾಲ',

        // Records
        noRecords: 'ತೋರಿಸಲು ದಾಖಲೆಗಳಿಲ್ಲ',
        recordsWillAppear: 'ಪಾವತಿಗಳನ್ನು ನಮೂದಿಸಿದ ನಂತರ ದಾಖಲೆಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ',
        noPaymentsRecorded: 'ಯಾವುದೇ ಪಾವತಿ ದಾಖಲಾಗಿಲ್ಲ',
        progress: 'ಪ್ರಗತಿ',
        date: 'ದಿನಾಂಕ',
        amount: 'ಮೊತ್ತ',
        runningTotal: 'ಚಾಲ್ತಿ ಒಟ್ಟು',

        // Modal
        addNewCustomer: 'ಹೊಸ ಗ್ರಾಹಕರನ್ನು ಸೇರಿಸಿ',
        editCustomer: 'ಗ್ರಾಹಕರ ವಿವರ ಬದಲಾಯಿಸಿ',
        customerRecord: 'ಗ್ರಾಹಕರ ದಾಖಲೆ',
        labelCustomerName: 'ಗ್ರಾಹಕರ ಹೆಸರು <span class="required">*</span>',
        labelPhone: 'ಫೋನ್ ಸಂಖ್ಯೆ <span class="required">*</span>',
        labelLoanAmount: 'ಸಾಲದ ಮೊತ್ತ (₹) <span class="required">*</span>',
        labelIssuedDate: 'ನೀಡಿದ ದಿನಾಂಕ <span class="required">*</span>',
        labelDeadline: 'ಗಡುವು <span class="required">*</span>',
        phCustomerName: 'ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        phPhone: 'ಫೋನ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
        phLoanAmount: 'ಸಾಲದ ಮೊತ್ತ ನಮೂದಿಸಿ',
        btnCancel: 'ರದ್ದುಮಾಡಿ',
        btnSaveCustomer: 'ಗ್ರಾಹಕರನ್ನು ಉಳಿಸಿ',
        btnUpdateCustomer: 'ಗ್ರಾಹಕರನ್ನು ನವೀಕರಿಸಿ',
        addCustomer: 'ಗ್ರಾಹಕರನ್ನು ಸೇರಿಸಿ',

        // Detail Modal
        totalPaid: 'ಒಟ್ಟು ಪಾವತಿ',
        overallProgress: 'ಒಟ್ಟಾರೆ ಪ್ರಗತಿ',
        paymentHistory: 'ಪಾವತಿ ಇತಿಹಾಸ',
        entries: 'ನಮೂದುಗಳು',
        noPaymentsRecordedYet: 'ಇನ್ನೂ ಯಾವುದೇ ಪಾವತಿ ದಾಖಲಾಗಿಲ್ಲ',

        // Toasts
        customerAdded: 'ಗ್ರಾಹಕರನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಲಾಗಿದೆ!',
        customerUpdated: 'ಗ್ರಾಹಕರ ವಿವರ ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ!',
        customerDeleted: 'ಗ್ರಾಹಕರನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಳಿಸಲಾಗಿದೆ!',
        paymentDeleted: 'ಪಾವತಿ ಅಳಿಸಲಾಗಿದೆ!',
        selectDateFirst: 'ದಯವಿಟ್ಟು ಮೊದಲು ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ!',
        selectOrEnterAmount: 'ದಯವಿಟ್ಟು ಮೊತ್ತವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ನಮೂದಿಸಿ!',
        amountRecorded: 'ದಾಖಲಿಸಲಾಗಿದೆ -',
        customer: 'ಗ್ರಾಹಕ',

        // Confirm
        confirmDeleteCustomer: 'ನೀವು ಈ ಗ್ರಾಹಕರನ್ನು ಅಳಿಸಲು ಖಚಿತವಾಗಿ ಬಯಸುವಿರಾ? ಎಲ್ಲಾ ಪಾವತಿ ದಾಖಲೆಗಳನ್ನೂ ಅಳಿಸಲಾಗುವುದು.',
        confirmDeletePayment: 'ಈ ಪಾವತಿ ನಮೂದನ್ನು ಅಳಿಸುವುದೇ?',
        confirmCancel: 'ರದ್ದುಮಾಡಿ',
        confirmDelete: 'ಅಳಿಸಿ',

        // Deadline badges
        dOverdue: 'ದಿ ಮೀರಿದೆ',
        dLeft: 'ದಿ ಬಾಕಿ',

        // Lang toggle
        langSwitch: 'English',

        // Navigation
        navSettings: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳು',

        // Settings Page
        settingsBusinessProfile: 'ವ್ಯಾಪಾರ ಪ್ರೊಫೈಲ್',
        settingsBusinessName: 'ವ್ಯಾಪಾರದ ಹೆಸರು',
        settingsBusinessNameDesc: 'ಸೈಡ್‌ಬಾರ್ ಮತ್ತು ರಫ್ತುಗಳಲ್ಲಿ ತೋರಿಸುವ ಹೆಸರು',
        settingsBusinessNamePh: 'ವ್ಯಾಪಾರದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        settingsOwnerName: 'ಮಾಲೀಕರ ಹೆಸರು',
        settingsOwnerNameDesc: 'ದಾಖಲೆಗಳಿಗಾಗಿ ನಿಮ್ಮ ಹೆಸರು',
        settingsOwnerNamePh: 'ಮಾಲೀಕರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
        settingsSaved: 'ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ!',

        settingsAppLock: 'ಆ್ಯಪ್ ಲಾಕ್',
        settingsEnablePin: 'PIN ಲಾಕ್',
        settingsEnablePinDesc: 'ಆ್ಯಪ್ ತೆರೆಯಲು 4-ಅಂಕಿಯ PIN ಅಗತ್ಯವಿದೆ',
        settingsChangePin: 'PIN ಬದಲಾಯಿಸಿ',
        settingsChangePinDesc: 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ PIN ಅನ್ನು ನವೀಕರಿಸಿ',
        setPinTitle: 'PIN ಹೊಂದಿಸಿ',
        changePinTitle: 'PIN ಬದಲಾಯಿಸಿ',
        enterNewPin: 'ಹೊಸ 4-ಅಂಕಿಯ PIN ನಮೂದಿಸಿ',
        confirmNewPin: 'ನಿಮ್ಮ PIN ಖಚಿತಪಡಿಸಿ',
        enterCurrentPin: 'ಪ್ರಸ್ತುತ PIN ನಮೂದಿಸಿ',
        enterPinToUnlock: 'ಅನ್‌ಲಾಕ್ ಮಾಡಲು PIN ನಮೂದಿಸಿ',
        pinSet: 'PIN ಹೊಂದಿಸಲಾಗಿದೆ!',
        pinChanged: 'PIN ಯಶಸ್ವಿಯಾಗಿ ಬದಲಾಯಿಸಲಾಗಿದೆ!',
        pinRemoved: 'PIN ಲಾಕ್ ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ!',
        pinMismatch: 'PIN ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
        wrongPin: 'ತಪ್ಪು PIN. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
        wrongCurrentPin: 'ಪ್ರಸ್ತುತ PIN ತಪ್ಪಾಗಿದೆ.',

        settingsDefaults: 'ಡೀಫಾಲ್ಟ್‌ಗಳು',
        settingsDefaultAmount: 'ಡೀಫಾಲ್ಟ್ ಮೊತ್ತ',
        settingsDefaultAmountDesc: 'ಡೀಫಾಲ್ಟ್ ದೈನಂದಿನ ಸಂಗ್ರಹ ಮೊತ್ತ',

        settingsBackupRestore: 'ಬ್ಯಾಕಪ್ ಮತ್ತು ಮರುಸ್ಥಾಪನೆ',
        settingsExportBackup: 'ಬ್ಯಾಕಪ್ ರಫ್ತು ಮಾಡಿ',
        settingsExportBackupDesc: 'ಎಲ್ಲಾ ಡೇಟಾವನ್ನು JSON ಫೈಲ್ ಆಗಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
        settingsImportBackup: 'ಬ್ಯಾಕಪ್ ಆಮದು ಮಾಡಿ',
        settingsImportBackupDesc: 'ಬ್ಯಾಕಪ್ ಫೈಲ್‌ನಿಂದ ಡೇಟಾ ಮರುಸ್ಥಾಪಿಸಿ',
        backupExported: 'ಬ್ಯಾಕಪ್ ಯಶಸ್ವಿಯಾಗಿ ರಫ್ತಾಗಿದೆ!',
        backupImported: 'ಬ್ಯಾಕಪ್ ಯಶಸ್ವಿಯಾಗಿ ಆಮದಾಗಿದೆ! ಡೇಟಾ ಮರುಸ್ಥಾಪಿಸಲಾಗಿದೆ.',
        backupInvalid: 'ಅಮಾನ್ಯ ಬ್ಯಾಕಪ್ ಫೈಲ್. ಮಾನ್ಯ JSON ಬ್ಯಾಕಪ್ ಆಯ್ಕೆಮಾಡಿ.',
        confirmImportBackup: 'ಇದು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಎಲ್ಲಾ ಡೇಟಾವನ್ನು ಬ್ಯಾಕಪ್‌ನೊಂದಿಗೆ ಬದಲಾಯಿಸುತ್ತದೆ. ನೀವು ಖಚಿತವಾಗಿದ್ದೀರಾ?',
        confirmImportBtn: 'ಆಮದು ಮಾಡಿ',

        settingsDangerZone: 'ಅಪಾಯ ವಲಯ',
        settingsClearAll: 'ಎಲ್ಲಾ ಡೇಟಾ ತೆರವುಗೊಳಿಸಿ',
        settingsClearAllDesc: 'ಎಲ್ಲಾ ಗ್ರಾಹಕರು, ಪಾವತಿಗಳು ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಶಾಶ್ವತವಾಗಿ ಅಳಿಸಿ',
        confirmClearAll: 'ನೀವು ಖಚಿತವಾಗಿ ಖಚಿತವಾಗಿದ್ದೀರಾ? ಇದು ಎಲ್ಲಾ ಗ್ರಾಹಕರು, ಪಾವತಿಗಳು ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಶಾಶ್ವತವಾಗಿ ಅಳಿಸುತ್ತದೆ. ಇದನ್ನು ರದ್ದುಗೊಳಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ!',
        confirmClearBtn: 'ಎಲ್ಲವನ್ನೂ ಅಳಿಸಿ',
        dataCleared: 'ಎಲ್ಲಾ ಡೇಟಾ ತೆರವುಗೊಳಿಸಲಾಗಿದೆ!',

        settingsAboutVersion: 'ಪಿಗ್ಮಿ ದಾಖಲೆ ನಿರ್ವಾಹಕ v1.0.0',
        settingsAboutCredit: 'Guru ನಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ',

        // Phase 2 - Interest
        labelInterestRate: 'ಬಡ್ಡಿ ದರ (% ಮಾಸಿಕ)',
        phInterestRate: 'ಉದಾ: 2',
        interestRate: 'ಬಡ್ಡಿ ದರ',
        totalRepayable: 'ಒಟ್ಟು ಮರುಪಾವತಿ',
        interestEarned: 'ಬಡ್ಡಿ',
        principalAmount: 'ಅಸಲು ಮೊತ್ತ',
        monthlyInterest: '/ತಿಂಗಳು',

        // Phase 2 - Loan Status
        filterAll: 'ಎಲ್ಲಾ',
        filterActive: 'ಸಕ್ರಿಯ',
        filterClosed: 'ಮುಕ್ತಾಯ',
        statusActive: 'ಸಕ್ರಿಯ',
        statusClosed: 'ಮುಕ್ತಾಯ',
        closeLoan: 'ಸಾಲ ಮುಕ್ತಾಯಗೊಳಿಸಿ',
        renewLoan: 'ಸಾಲ ನವೀಕರಿಸಿ',
        loanClosed: 'ಸಾಲ ಯಶಸ್ವಿಯಾಗಿ ಮುಕ್ತಾಯಗೊಳಿಸಲಾಗಿದೆ!',
        loanRenewed: 'ಸಾಲ ನವೀಕರಿಸಲಾಗಿದೆ! ಹೊಸ ಚಕ್ರ ಪ್ರಾರಂಭವಾಗಿದೆ.',
        confirmCloseLoan: 'ಈ ಸಾಲವನ್ನು ಮುಕ್ತಾಯಗೊಳಿಸುವುದೇ? ಗ್ರಾಹಕರನ್ನು ಮುಕ್ತಾಯ ಪಟ್ಟಿಗೆ ಸರಿಸಲಾಗುವುದು.',
        confirmClose: 'ಮುಕ್ತಾಯಗೊಳಿಸಿ',

        // Phase 2 - Edit Payment
        editPayment: 'ಪಾವತಿ ಬದಲಾಯಿಸಿ',
        editPaymentTitle: 'ಪಾವತಿ ಬದಲಾಯಿಸಿ',
        editAmount: 'ಮೊತ್ತ (₹)',
        editDate: 'ದಿನಾಂಕ',
        paymentUpdated: 'ಪಾವತಿ ನವೀಕರಿಸಲಾಗಿದೆ!',
        btnSave: 'ಉಳಿಸಿ',
        btnUpdate: 'ನವೀಕರಿಸಿ',

        // Phase 3 - Reports
        navReports: 'ವರದಿಗಳು',
        reportsThisMonth: 'ಈ ತಿಂಗಳು',
        reportsActiveLoans: 'ಸಕ್ರಿಯ ಸಾಲಗಳು',
        reportsDefaulters: 'ಸುಸ್ತಿದಾರರು',
        reportsCollectionTrend: 'ಸಂಗ್ರಹಣೆ ಪ್ರವೃತ್ತಿ (ಕಳೆದ 30 ದಿನಗಳು)',
        reportsDefaultersList: 'ಸುಸ್ತಿದಾರರ ಪಟ್ಟಿ (>3 ದಿನಗಳು ಬಾಕಿ)',
        reportsDataExport: 'ಡೇಟಾ ರಫ್ತು (ಎಕ್ಸೆಲ್/CSV)',
        exportCustomers: 'ಗ್ರಾಹಕರನ್ನು ರಫ್ತು ಮಾಡಿ',
        exportPayments: 'ಪಾವತಿಗಳನ್ನು ರಫ್ತು ಮಾಡಿ',
        noDefaulters: 'ಯಾವ ಸುಸ್ತಿದಾರರು ಇಲ್ಲ 🎉',
        allCustomersPaying: 'ಎಲ್ಲಾ ಸಕ್ರಿಯ ಗ್ರಾಹಕರು ಸಮಯಕ್ಕೆ ಪಾವತಿಸುತ್ತಿದ್ದಾರೆ!',
        daysOverdue: 'ದಿನಗಳು',
        overdueLabel: 'ಬಾಕಿ',

        // Phase 4 - Areas, Bulk Entry, Reminders
        lblCustomerArea: 'ಪ್ರದೇಶ / ಮಾರ್ಗ',
        allAreas: 'ಎಲ್ಲಾ ಪ್ರದೇಶಗಳು',
        btnBatchCollect: 'ಒಟ್ಟಿಗೆ ಸಂಗ್ರಹಿಸಿ',
        bulkCollectTitle: 'ಒಟ್ಟಿಗೆ ಸಂಗ್ರಹಿಸಿ',
        lblBulkAmount: 'ಗ್ರಾಹಕರಿಗೆ ಮೊತ್ತ (₹)',
        btnConfirmBulk: 'ಸಂಗ್ರಹಣೆಯನ್ನು ದೃಢೀಕರಿಸಿ',
        selectedCustomers: 'ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ',
        btnSendReminder: 'ಜ್ಞಾಪನೆ ಕಳುಹಿಸಿ',
        reminderMessage: 'ನಮಸ್ಕಾರ {name}, ನಿಮ್ಮ ಪಿಗ್ಮಿ ಪಾವತಿ {amount} ಬಾಕಿಯಿದೆ ಎಂದು ನೆನಪಿಸುತ್ತಿದ್ದೇವೆ. ದಯವಿಟ್ಟು ಪಾವತಿಸಿ. ಧನ್ಯವಾದಗಳು!',

        // Phase 6 - Sort
        sortNameAsc: 'ಹೆಸರು (A-Z)',
        sortNameDesc: 'ಹೆಸರು (Z-A)',
        sortAmountDesc: 'ಮೊತ್ತ (ಹೆಚ್ಚು-ಕಡಿಮೆ)',
        sortDeadlineAsc: 'ಗಡುವು (ಹತ್ತಿರದ)',
        sortNewest: 'ಇತ್ತೀಚೆಗೆ ಸೇರಿಸಲಾಗಿದೆ',

        // Phase 7 - Undo
        undo: 'ರದ್ದುಮಾಡು',
        confirmUndo: 'ಈ ಕ್ರಿಯೆಯನ್ನು ರದ್ದುಗೊಳಿಸಲು ನೀವು ಖಚಿತವಾಗಿದ್ದೀರಾ?',
        actionUndone: 'ಕ್ರಿಯೆಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ರದ್ದುಗೊಳಿಸಲಾಗಿದೆ.',
        appearance: 'ಗೋಚರತೆ',
        themeMode: 'ಥೀಮ್ ಮೋಡ್',
        themeModeDesc: 'ಲೈಟ್ ಮತ್ತು ಡಾರ್ಕ್ ಮೋಡ್ ನಡುವೆ ಬದಲಾಯಿಸಿ.'
    }
};

function t(key) {
    return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[currentLang][key] !== undefined) {
            el.textContent = TRANSLATIONS[currentLang][key];
        }
    });

    // innerHTML (for labels with <span> required markers)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (TRANSLATIONS[currentLang][key] !== undefined) {
            el.innerHTML = TRANSLATIONS[currentLang][key];
        }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (TRANSLATIONS[currentLang][key] !== undefined) {
            el.placeholder = TRANSLATIONS[currentLang][key];
        }
    });

    // Language toggle label
    document.getElementById('langLabel').textContent = t('langSwitch');

    // Body class for font
    document.body.classList.toggle('lang-kn', currentLang === 'kn');

    updateCustomerAmountLabel();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'kn' : 'en';
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, currentLang);
    applyTranslations();
    // Re-render page title for current view
    updatePageTitle();
    refreshCurrentView();
}

function updatePageTitle() {
    const titleKeys = {
        'dashboard': 'navDashboard',
        'customers': 'navCustomers',
        'daily-entry': 'navDailyEntry',
        'records': 'navRecords',
        'settings': 'navSettings'
    };
    document.getElementById('pageTitle').textContent = t(titleKeys[currentView]);

    // Update top action button text
    const topAction = document.getElementById('topAction');
    const topActionText = document.getElementById('topActionText');
    if (currentView === 'dashboard' || currentView === 'customers') {
        topAction.style.display = 'inline-flex';
        topActionText.textContent = t('addCustomer');
    } else {
        topAction.style.display = 'none';
    }
}

// === Helpers ===
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// === IndexedDB Backend & Memory Cache ===
let db;
let _customersCache = [];
let _paymentsCache = [];

async function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('PigmieDB', 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('customers')) {
                db.createObjectStore('customers', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('payments')) {
                db.createObjectStore('payments', { keyPath: 'id' });
            }
        };

        request.onsuccess = (event) => {
            db = event.target.result;
            // Load data into memory
            loadFromDB('customers').then(customers => {
                _customersCache = customers;
                loadFromDB('payments').then(payments => {
                    _paymentsCache = payments;
                    migrateFromLocalStorage();
                    resolve();
                });
            });
        };

        request.onerror = (event) => {
            console.error('IndexedDB error:', event.target.error);
            reject(event.target.error);
        };
    });
}

function loadFromDB(storeName) {
    return new Promise((resolve) => {
        const transaction = db.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result || []);
        request.onerror = () => resolve([]);
    });
}

function saveToDB(storeName, items) {
    const transaction = db.transaction(storeName, 'readwrite');
    const store = transaction.objectStore(storeName);
    store.clear();
    items.forEach(item => store.put(item));
}

function migrateFromLocalStorage() {
    const localCustomers = localStorage.getItem(STORAGE_KEYS.CUSTOMERS);
    const localPayments = localStorage.getItem(STORAGE_KEYS.PAYMENTS);

    let migrated = false;

    if (localCustomers && _customersCache.length === 0) {
        _customersCache = JSON.parse(localCustomers);
        saveToDB('customers', _customersCache);
        localStorage.removeItem(STORAGE_KEYS.CUSTOMERS);
        migrated = true;
    }

    if (localPayments && _paymentsCache.length === 0) {
        _paymentsCache = JSON.parse(localPayments);
        saveToDB('payments', _paymentsCache);
        localStorage.removeItem(STORAGE_KEYS.PAYMENTS);
        migrated = true;
    }

    if (migrated) {
        console.log('Successfully migrated data from localStorage to IndexedDB.');
    }
}

function getCustomers() {
    return _customersCache;
}

function saveCustomers(customers) {
    _customersCache = customers;
    saveToDB('customers', customers);
    if (typeof pushToCloud === 'function') pushToCloud(false);
}

function getPayments() {
    return _paymentsCache;
}

function savePayments(payments) {
    _paymentsCache = payments;
    saveToDB('payments', payments);
    if (typeof pushToCloud === 'function') pushToCloud(false);
}

function formatCurrency(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
}

function formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    const locale = currentLang === 'kn' ? 'kn-IN' : 'en-IN';
    return d.toLocaleDateString(locale, { day: '2-digit', month: 'short', year: 'numeric' });
}

function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 2);
}

function getAvatarHtml(customer, baseClass = 'customer-avatar') {
    if (customer.photo) {
        return `<div class="${baseClass} has-photo" style="background-image: url('${customer.photo}'); background-size: cover; background-position: center;"></div>`;
    }
    return `<div class="${baseClass}">${getInitials(customer.name)}</div>`;
}

function getTodayStr() {
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function daysUntil(dateStr) {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const target = new Date(dateStr);
    target.setHours(0, 0, 0, 0);
    return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
}

function getCustomerTotalPaid(customerId) {
    const payments = getPayments().filter(p => p.customerId === customerId);
    return payments.reduce((sum, p) => sum + p.amount, 0);
}

function getCustomerPayments(customerId) {
    return getPayments().filter(p => p.customerId === customerId).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getCustomerType(customer) {
    return customer && customer.customerType === 'saving' ? 'saving' : 'loan';
}

function getCustomerTypeLabel(customer) {
    return t(getCustomerType(customer) === 'saving' ? 'savingCustomer' : 'loanCustomer');
}

function getCustomerAmountLabel(customer) {
    return t(getCustomerType(customer) === 'saving' ? 'savingAmount' : 'loanAmount');
}

function getCustomerStatus(customer) {
    return customer && customer.status === 'closed' ? 'closed' : 'active';
}

function calculateTotalRepayable(customer) {
    if (!customer || getCustomerType(customer) === 'saving') return customer.loanAmount;
    const rate = customer.interestRate || 0;
    if (rate <= 0) return customer.loanAmount;
    // Calculate months between issued date and deadline
    const start = new Date(customer.issuedDate);
    const end = new Date(customer.deadline);
    const months = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24 * 30.44)));
    const interest = (customer.loanAmount * rate * months) / 100;
    return customer.loanAmount + interest;
}

function getInterestAmount(customer) {
    return calculateTotalRepayable(customer) - customer.loanAmount;
}

// === Toast Notifications ===
function showToast(message, type = 'success', action = null) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        error: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
        info: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>'
    };

    let innerHTML = `<div style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'}-400)">${icons[type]}</span>${message}</div>`;

    if (action) {
        innerHTML += `<button class="toast-action-btn" onclick="event.stopPropagation();">${action.label}</button>`;
    }

    toast.innerHTML = innerHTML;

    if (action) {
        const btn = toast.querySelector('.toast-action-btn');
        btn.onclick = () => {
            action.onClick();
            toast.style.animation = 'toastOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        };
    }

    container.appendChild(toast);

    // If there's an action, keep toast longer
    const timeoutDuration = action ? 8000 : 3000;
    setTimeout(() => {
        if (document.body.contains(toast)) {
            toast.style.animation = 'toastOut 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }
    }, timeoutDuration);
}

// === Confirm Dialog ===
function showConfirm(message) {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.className = 'confirm-overlay';
        overlay.innerHTML = `
            <div class="confirm-dialog">
                <p>${message}</p>
                <div class="confirm-actions">
                    <button class="btn btn-secondary" id="confirmCancel">${t('confirmCancel')}</button>
                    <button class="btn btn-danger" id="confirmOk">${t('confirmDelete')}</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.querySelector('#confirmCancel').onclick = () => {
            overlay.remove();
            resolve(false);
        };
        overlay.querySelector('#confirmOk').onclick = () => {
            overlay.remove();
            resolve(true);
        };
    });
}

// === Navigation ===
let currentView = 'dashboard';
let customerFilter = 'all';

function switchView(viewName) {
    currentView = viewName;

    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewName);
    });

    // Update views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.toggle('active', view.id === `view-${viewName}`);
    });

    // Update page title and action button
    updatePageTitle();

    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');

    // Refresh view data
    refreshCurrentView();
}

function handleTopAction() {
    openCustomerModal();
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// === Dashboard ===
function refreshDashboard() {
    const customers = getCustomers();
    const payments = getPayments();
    const today = getTodayStr();

    // Stats
    const totalCustomers = customers.length;
    const totalCollected = payments.reduce((sum, p) => sum + p.amount, 0);
    const totalRepayableAll = customers.reduce((sum, c) => sum + calculateTotalRepayable(c), 0);
    const pendingAmount = totalRepayableAll - totalCollected;
    const todayPayments = payments.filter(p => p.date === today);
    const todayCollection = todayPayments.reduce((sum, p) => sum + p.amount, 0);

    document.getElementById('statTotalCustomers').textContent = totalCustomers;
    document.getElementById('statTotalCollected').textContent = formatCurrency(totalCollected);
    document.getElementById('statPendingAmount').textContent = formatCurrency(Math.max(0, pendingAmount));
    document.getElementById('statTodayCollection').textContent = formatCurrency(todayCollection);

    // Recent Payments
    const recentPaymentsEl = document.getElementById('recentPayments');
    const recentPayments = payments.sort((a, b) => {
        const dateCompare = new Date(b.date) - new Date(a.date);
        if (dateCompare !== 0) return dateCompare;
        return (b.timestamp || 0) - (a.timestamp || 0);
    }).slice(0, 8);

    if (recentPayments.length === 0) {
        recentPaymentsEl.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <p>${t('noPaymentsYet')}</p>
            </div>`;
    } else {
        recentPaymentsEl.innerHTML = recentPayments.map(p => {
            const customer = customers.find(c => c.id === p.customerId);
            if (!customer) return '';
            return `
                <div class="payment-item">
                    <div class="payment-info">
                        ${getAvatarHtml(customer, 'payment-avatar')}
                        <div>
                            <div class="payment-name">${customer.name}</div>
                            <div class="payment-date">${formatDate(p.date)}</div>
                        </div>
                    </div>
                    <div class="payment-amount">+${formatCurrency(p.amount)}</div>
                </div>`;
        }).join('');
    }

    // Analytics: Collection Efficiency
    const settings = getSettings();
    const defaultAmount = settings.defaultAmount || 100;
    const activeCustomers = customers.filter(c => getCustomerStatus(c) !== 'closed');
    const expectedCollection = activeCustomers.reduce((sum, c) => sum + defaultAmount, 0);
    
    const effPercentage = expectedCollection > 0 ? Math.min(100, (todayCollection / expectedCollection) * 100) : 0;
    
    const effExpectedEl = document.getElementById('effExpected');
    const effActualEl = document.getElementById('effActual');
    const effPercentageEl = document.getElementById('effPercentage');
    const effProgressBarEl = document.getElementById('effProgressBar');
    
    if (effExpectedEl) {
        effExpectedEl.textContent = `${t('expected')}: ${formatCurrency(expectedCollection)}`;
        effActualEl.textContent = `${t('actual')}: ${formatCurrency(todayCollection)}`;
        effPercentageEl.textContent = `${Math.round(effPercentage)}%`;
        effProgressBarEl.style.width = `${effPercentage}%`;
    }

    // Attention Needed: Missed 3+ Days
    const attentionNeededEl = document.getElementById('attentionNeededList');
    if (attentionNeededEl) {
        const threeDaysAgo = new Date();
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
        threeDaysAgo.setHours(0,0,0,0);
        
        const missedCustomers = activeCustomers.filter(c => {
            const cPayments = getCustomerPayments(c.id);
            if (cPayments.length === 0) return true; // Never paid
            
            const lastPaymentDate = new Date(Math.max(...cPayments.map(p => new Date(p.date))));
            lastPaymentDate.setHours(0,0,0,0);
            return lastPaymentDate < threeDaysAgo;
        }).slice(0, 5); // Show top 5 to keep dashboard clean

        if (missedCustomers.length === 0) {
            attentionNeededEl.innerHTML = `
                <div class="empty-state">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <p>${t('noMissedPayments')}</p>
                </div>`;
        } else {
            attentionNeededEl.innerHTML = missedCustomers.map(c => {
                const cPayments = getCustomerPayments(c.id);
                const totalPaid = cPayments.reduce((sum, p) => sum + p.amount, 0);
                const totalRepayable = calculateTotalRepayable(c);
                const pending = Math.max(0, totalRepayable - totalPaid);
                
                return `
                    <div class="attention-item">
                        <div class="attention-info">
                            <h4>${c.name}</h4>
                            <p>${c.phone} - ${t('pending')}: ${formatCurrency(pending)}</p>
                        </div>
                        <button class="btn-whatsapp" onclick="sendReminder('${c.phone}', '${formatCurrency(pending)}', '${c.name}')" style="padding: 6px; border-radius: 50%;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                        </button>
                    </div>`;
            }).join('');
        }
    }

    // Upcoming Deadlines
    const upcomingDeadlinesEl = document.getElementById('upcomingDeadlines');
    const sortedCustomers = customers
        .filter(c => c.deadline && getCustomerStatus(c) !== 'closed')
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 8);

    if (sortedCustomers.length === 0) {
        upcomingDeadlinesEl.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <p>${t('noDeadlines')}</p>
            </div>`;
    } else {
        upcomingDeadlinesEl.innerHTML = sortedCustomers.map(c => {
            const days = daysUntil(c.deadline);
            let badgeClass, badgeText;
            if (days < 0) {
                badgeClass = 'overdue';
                badgeText = `${Math.abs(days)}${t('dOverdue')}`;
            } else if (days <= 7) {
                badgeClass = 'urgent';
                badgeText = `${days}${t('dLeft')}`;
            } else if (days <= 30) {
                badgeClass = 'soon';
                badgeText = `${days}${t('dLeft')}`;
            } else {
                badgeClass = 'safe';
                badgeText = `${days}${t('dLeft')}`;
            }
            return `
                <div class="deadline-item">
                    <div class="deadline-info">
                        <div class="deadline-name">${c.name}</div>
                        <div class="deadline-date">${formatDate(c.deadline)}</div>
                    </div>
                    <span class="deadline-badge ${badgeClass}">${badgeText}</span>
                </div>`;
        }).join('');
    }
}

// === Customers ===
function refreshCustomersList() {
    const customers = getCustomers();
    const searchVal = document.getElementById('customerSearch').value.toLowerCase();
    const sortVal = document.getElementById('customerSort') ? document.getElementById('customerSort').value : 'newest';

    let filtered = customers.filter(c =>
        c.name.toLowerCase().includes(searchVal) ||
        c.phone.includes(searchVal)
    );

    // Apply status filter
    if (customerFilter === 'active') {
        filtered = filtered.filter(c => getCustomerStatus(c) !== 'closed');
    } else if (customerFilter === 'closed') {
        filtered = filtered.filter(c => getCustomerStatus(c) === 'closed');
    }

    // Apply sorting
    filtered.sort((a, b) => {
        if (sortVal === 'name-asc') {
            return a.name.localeCompare(b.name);
        } else if (sortVal === 'name-desc') {
            return b.name.localeCompare(a.name);
        } else if (sortVal === 'amount-desc') {
            return b.loanAmount - a.loanAmount;
        } else if (sortVal === 'deadline-asc') {
            const dA = a.deadline ? new Date(a.deadline).getTime() : Infinity;
            const dB = b.deadline ? new Date(b.deadline).getTime() : Infinity;
            return dA - dB;
        } else {
            // Newest (Default): assuming customer ID is timestamp or fallback to array index
            // Since our generateId() starts with Date.now().toString(36), we can sort by id descending
            return b.id.localeCompare(a.id);
        }
    });

    // Update filter button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === customerFilter);
    });

    const container = document.getElementById('customersList');

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                <p>${searchVal ? t('noCustomersFound') : t('noCustomersYet')}</p>
                <span>${searchVal ? t('tryDifferentSearch') : t('clickAddCustomer')}</span>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map((c, index) => {
        const totalPaid = getCustomerTotalPaid(c.id);
        const totalRepayable = calculateTotalRepayable(c);
        const pending = Math.max(0, totalRepayable - totalPaid);
        const progress = totalRepayable > 0 ? Math.min(100, (totalPaid / totalRepayable) * 100) : 0;
        const progressClass = progress >= 100 ? 'complete' : (daysUntil(c.deadline) < 0 && progress < 100 ? 'overdue' : '');
        const customerType = getCustomerType(c);
        const amountLabel = getCustomerAmountLabel(c);
        const status = getCustomerStatus(c);
        const isClosed = status === 'closed';
        const interestAmt = getInterestAmount(c);
        const hasInterest = interestAmt > 0 && customerType === 'loan';

        return `
            <div class="customer-card ${isClosed ? 'closed' : ''}" onclick="viewCustomerDetail('${c.id}')">
                <div class="customer-card-header">
                    <div class="customer-info">
                        ${getAvatarHtml(c, 'customer-avatar')}
                        <div>
                            <div class="customer-name">${index + 1}. ${c.name}</div>
                            <div class="customer-phone">${c.phone}</div>
                            <span class="customer-type-badge ${customerType}">${getCustomerTypeLabel(c)}</span>
                            <span class="status-badge ${status}">${t(isClosed ? 'statusClosed' : 'statusActive')}</span>
                        </div>
                    </div>
                    <div class="customer-actions" onclick="event.stopPropagation()">
                        <button class="btn-icon" onclick="editCustomer('${c.id}')" title="Edit">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                        </button>
                        <button class="btn-icon" onclick="deleteCustomer('${c.id}')" title="Delete" style="color: var(--danger-400)">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                        </button>
                    </div>
                </div>
                <div class="customer-details">
                    <div class="detail-item">
                        <span class="detail-label">${amountLabel}</span>
                        <span class="detail-value amount">${formatCurrency(c.loanAmount)}</span>
                        ${hasInterest ? `<div class="interest-info">${c.interestRate}%${t('monthlyInterest')} · ${t('interestEarned')}: ${formatCurrency(interestAmt)}</div>` : ''}
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">${hasInterest ? t('totalRepayable') : t('customerType')}</span>
                        <span class="detail-value" style="color: ${hasInterest ? 'var(--warning-400)' : 'var(--text-primary)'}">${hasInterest ? formatCurrency(totalRepayable) : getCustomerTypeLabel(c)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">${t('collected')}</span>
                        <span class="detail-value collected">${formatCurrency(totalPaid)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">${t('pending')}</span>
                        <span class="detail-value pending">${formatCurrency(pending)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">${t('issuedDate')}</span>
                        <span class="detail-value" style="color: var(--info-400)">${formatDate(c.issuedDate)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">${t('deadline')}</span>
                        <span class="detail-value deadline">${formatDate(c.deadline)}</span>
                    </div>
                </div>
                <div class="progress-section">
                    <div class="progress-header">
                        <span class="progress-label">${t('collectionProgress')}</span>
                        <span class="progress-percent">${progress.toFixed(1)}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill ${progressClass}" style="width: ${progress}%"></div>
                    </div>
                </div>
            </div>`;
    }).join('');
}

function setCustomerFilter(filter) {
    customerFilter = filter;
    refreshCustomersList();
}

function filterCustomers() {
    refreshCustomersList();
}

// === Customer Modal ===
function updateCustomerAmountLabel() {
    const typeEl = document.getElementById('customerType');
    const amountLabel = document.querySelector('label[for="loanAmount"]');
    const amountInput = document.getElementById('loanAmount');
    const interestGroup = document.getElementById('interestRateGroup');
    const isSaving = typeEl && typeEl.value === 'saving';

    if (amountLabel) {
        amountLabel.innerHTML = t(isSaving ? 'labelSavingAmount' : 'labelLoanAmount');
    }

    if (amountInput) {
        amountInput.placeholder = t(isSaving ? 'phSavingAmount' : 'phLoanAmount');
    }

    // Show/hide interest rate field based on customer type
    if (interestGroup) {
        interestGroup.style.display = isSaving ? 'none' : 'flex';
    }
}

function openCustomerModal(customerId = null) {
    const modal = document.getElementById('customerModal');
    const title = document.getElementById('modalTitle');
    const saveBtn = document.getElementById('saveBtn');
    const form = document.getElementById('customerForm');

    form.reset();
    document.getElementById('customerId').value = '';
    document.getElementById('customerType').value = 'loan';

    // Reset images
    document.getElementById('customerPhotoBase64').value = '';
    document.getElementById('photoPreview').innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>';
    document.getElementById('photoPreview').style.backgroundImage = 'none';

    document.getElementById('idProofBase64').value = '';
    document.getElementById('idProofPreviewImg').src = '';
    document.getElementById('idProofPreviewImg').style.display = 'none';
    document.getElementById('idProofText').style.display = 'block';

    if (customerId) {
        const customer = getCustomers().find(c => c.id === customerId);
        if (customer) {
            title.textContent = t('editCustomer');
            saveBtn.textContent = t('btnUpdateCustomer');
            document.getElementById('customerId').value = customer.id;
            document.getElementById('customerName').value = customer.name;
            document.getElementById('customerPhone').value = customer.phone;
            document.getElementById('custArea').value = customer.area || '';
            document.getElementById('customerType').value = getCustomerType(customer);
            document.getElementById('loanAmount').value = customer.loanAmount;
            document.getElementById('interestRate').value = customer.interestRate || 0;
            document.getElementById('issuedDate').value = customer.issuedDate || '';
            document.getElementById('deadline').value = customer.deadline;

            if (customer.photo) {
                document.getElementById('customerPhotoBase64').value = customer.photo;
                document.getElementById('photoPreview').innerHTML = '';
                document.getElementById('photoPreview').style.backgroundImage = `url(${customer.photo})`;
            }
            if (customer.idProof) {
                document.getElementById('idProofBase64').value = customer.idProof;
                document.getElementById('idProofPreviewImg').src = customer.idProof;
                document.getElementById('idProofPreviewImg').style.display = 'block';
                document.getElementById('idProofText').style.display = 'none';
            }
        }
    } else {
        title.textContent = t('addNewCustomer');
        saveBtn.textContent = t('btnSaveCustomer');
        document.getElementById('interestRate').value = 0;
    }

    updateCustomerAmountLabel();
    modal.classList.add('active');
}

function closeCustomerModal() {
    document.getElementById('customerModal').classList.remove('active');
}

function saveCustomer(event) {
    event.preventDefault();

    const id = document.getElementById('customerId').value;
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const area = document.getElementById('custArea').value.trim();
    const customerType = document.getElementById('customerType').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
    const issuedDate = document.getElementById('issuedDate').value;
    const deadline = document.getElementById('deadline').value;

    const customers = getCustomers();

    if (id) {
        // Update existing
        const index = customers.findIndex(c => c.id === id);
        if (index !== -1) {
            customers[index] = { ...customers[index], name, phone, area, customerType, loanAmount, interestRate, issuedDate, deadline };
            showToast(t('customerUpdated'));
        }
    } else {
        // Add new
        customers.push({
            id: generateId(),
            name,
            phone,
            area,
            customerType,
            loanAmount,
            interestRate,
            issuedDate,
            deadline,
            status: 'active',
            createdAt: getTodayStr()
        });
        showToast(t('customerAdded'));
    }

    saveCustomers(customers);
    closeCustomerModal();
    refreshCurrentView();
}

function editCustomer(customerId) {
    openCustomerModal(customerId);
}

async function deleteCustomer(customerId) {
    const confirmed = await showConfirm(t('confirmDeleteCustomer'));
    if (!confirmed) return;

    let customers = getCustomers();
    const customerToDelete = customers.find(c => c.id === customerId);
    customers = customers.filter(c => c.id !== customerId);
    saveCustomers(customers);

    let payments = getPayments();
    const customerPayments = payments.filter(p => p.customerId === customerId);
    payments = payments.filter(p => p.customerId !== customerId);
    savePayments(payments);

    showToast(t('customerDeleted'), 'success', {
        label: t('undo'),
        onClick: async () => {
            const undoConfirmed = await showConfirm(t('confirmUndo'));
            if (!undoConfirmed) return;

            let currentCustomers = getCustomers();
            currentCustomers.push(customerToDelete);
            saveCustomers(currentCustomers);

            let currentPayments = getPayments();
            currentPayments = currentPayments.concat(customerPayments);
            savePayments(currentPayments);

            showToast(t('actionUndone'));
            refreshCurrentView();
        }
    });
    refreshCurrentView();
}

// === Customer Detail Modal ===
function viewCustomerDetail(customerId) {
    const customer = getCustomers().find(c => c.id === customerId);
    if (!customer) return;

    const payments = getCustomerPayments(customerId);
    const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
    const totalRepayable = calculateTotalRepayable(customer);
    const pending = Math.max(0, totalRepayable - totalPaid);
    const progress = totalRepayable > 0 ? Math.min(100, (totalPaid / totalRepayable) * 100) : 0;
    const customerType = getCustomerType(customer);
    const amountLabel = getCustomerAmountLabel(customer);
    const status = getCustomerStatus(customer);
    const isClosed = status === 'closed';
    const interestAmt = getInterestAmount(customer);
    const hasInterest = interestAmt > 0 && customerType === 'loan';

    const modal = document.getElementById('detailModal');
    const title = document.getElementById('detailModalTitle');
    const body = document.getElementById('detailModalBody');

    title.textContent = t('customerRecord');

    body.innerHTML = `
        <div class="detail-header">
            ${getAvatarHtml(customer, 'detail-avatar')}
            <div>
                <div class="detail-name">${customer.name}</div>
                <div class="detail-phone-text">${customer.phone} ${customer.area ? `· <span style="color: var(--text-muted)">${customer.area}</span>` : ''}</div>
                <span class="customer-type-badge ${customerType}">${getCustomerTypeLabel(customer)}</span>
                <span class="status-badge ${status}">${t(isClosed ? 'statusClosed' : 'statusActive')}</span>
                
                ${customer.idProof ? `
                <div style="margin-top: 8px;">
                    <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 0.8rem;" onclick="viewIdProof('${customer.id}')">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                        View ID Proof
                    </button>
                </div>` : ''}
                
                ${!isClosed && pending > 0 ? `
                <div style="margin-top: 12px;">
                    <button class="btn-whatsapp" onclick="sendReminder('${customer.phone}', '${formatCurrency(pending)}', '${customer.name}')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                        ${t('btnSendReminder')}
                    </button>
                </div>` : ''}
            </div>
        </div>
        ${!isClosed && progress >= 100 ? `
        <div class="detail-actions">
            <button class="btn btn-primary" onclick="closeLoan('${customerId}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                ${t('closeLoan')}
            </button>
        </div>` : ''}
        ${isClosed ? `
        <div class="detail-actions">
            <button class="btn btn-primary" onclick="renewLoan('${customerId}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                ${t('renewLoan')}
            </button>
        </div>` : ''}
        <div class="detail-stats">
            <div class="detail-stat-card">
                <div class="detail-stat-label">${amountLabel}</div>
                <div class="detail-stat-value" style="color: var(--primary-400)">${formatCurrency(customer.loanAmount)}</div>
            </div>
            ${hasInterest ? `
            <div class="detail-stat-card">
                <div class="detail-stat-label">${t('interestRate')}</div>
                <div class="detail-stat-value" style="color: var(--warning-400)">${customer.interestRate}%${t('monthlyInterest')}</div>
            </div>
            <div class="detail-stat-card">
                <div class="detail-stat-label">${t('totalRepayable')}</div>
                <div class="detail-stat-value" style="color: var(--warning-400)">${formatCurrency(totalRepayable)}</div>
            </div>
            <div class="detail-stat-card">
                <div class="detail-stat-label">${t('interestEarned')}</div>
                <div class="detail-stat-value" style="color: var(--warning-400)">${formatCurrency(interestAmt)}</div>
            </div>` : `
            <div class="detail-stat-card">
                <div class="detail-stat-label">${t('customerType')}</div>
                <div class="detail-stat-value" style="color: var(--text-primary)">${getCustomerTypeLabel(customer)}</div>
            </div>`}
            <div class="detail-stat-card">
                <div class="detail-stat-label">${t('issuedDate')}</div>
                <div class="detail-stat-value" style="color: var(--info-400)">${formatDate(customer.issuedDate)}</div>
            </div>
            <div class="detail-stat-card">
                <div class="detail-stat-label">${t('deadline')}</div>
                <div class="detail-stat-value" style="color: var(--warning-400)">${formatDate(customer.deadline)}</div>
            </div>
            <div class="detail-stat-card">
                <div class="detail-stat-label">${t('totalPaid')}</div>
                <div class="detail-stat-value" style="color: var(--success-400)">${formatCurrency(totalPaid)}</div>
            </div>
            <div class="detail-stat-card">
                <div class="detail-stat-label">${t('pending')}</div>
                <div class="detail-stat-value" style="color: var(--danger-400)">${formatCurrency(pending)}</div>
            </div>
        </div>
        <div class="progress-section" style="margin-bottom: 24px;">
            <div class="progress-header">
                <span class="progress-label">${t('overallProgress')}</span>
                <span class="progress-percent">${progress.toFixed(1)}%</span>
            </div>
            <div class="progress-bar" style="height: 8px;">
                <div class="progress-fill ${progress >= 100 ? 'complete' : ''}" style="width: ${progress}%"></div>
            </div>
        </div>
        <div class="detail-payments-title">${t('paymentHistory')} (${payments.length} ${t('entries')})</div>
        <div class="detail-payment-list">
            ${payments.length === 0 ? `<p style="color: var(--text-muted); text-align: center; padding: 20px;">${t('noPaymentsRecordedYet')}</p>` :
            `<table class="record-table">
                <thead>
                    <tr>
                        <th>${t('date')}</th>
                        <th>${t('amount')}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${payments.map(p => `
                        <tr>
                            <td>${formatDate(p.date)}</td>
                            <td style="color: var(--success-400); font-weight: 600">${formatCurrency(p.amount)}</td>
                            <td>
                                <div class="payment-actions">
                                    <button class="record-edit-btn" onclick="showReceipt('${p.id}', '${customerId}')" title="View Receipt">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                                    </button>
                                    <button class="record-edit-btn" onclick="editPayment('${p.id}', '${customerId}')" title="${t('editPayment')}">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                                    </button>
                                    <button class="record-delete-btn" onclick="deletePayment('${p.id}', '${customerId}')" title="Delete payment">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>`}
        </div>`;

    modal.classList.add('active');
}

function closeDetailModal() {
    document.getElementById('detailModal').classList.remove('active');
}

async function deletePayment(paymentId, customerId) {
    const confirmed = await showConfirm(t('confirmDeletePayment'));
    if (!confirmed) return;

    let payments = getPayments();
    const paymentToDelete = payments.find(p => p.id === paymentId);
    payments = payments.filter(p => p.id !== paymentId);
    savePayments(payments);

    showToast(t('paymentDeleted'), 'success', {
        label: t('undo'),
        onClick: async () => {
            const undoConfirmed = await showConfirm(t('confirmUndo'));
            if (!undoConfirmed) return;

            let currentPayments = getPayments();
            currentPayments.push(paymentToDelete);
            savePayments(currentPayments);

            showToast(t('actionUndone'));
            viewCustomerDetail(customerId);
            refreshCurrentView();
        }
    });
    viewCustomerDetail(customerId);
    refreshCurrentView();
}

// === Edit Payment ===
function editPayment(paymentId, customerId) {
    const payments = getPayments();
    const payment = payments.find(p => p.id === paymentId);
    if (!payment) return;

    const overlay = document.createElement('div');
    overlay.className = 'edit-payment-overlay';
    overlay.id = 'editPaymentOverlay';
    overlay.innerHTML = `
        <div class="edit-payment-dialog">
            <h4>${t('editPaymentTitle')}</h4>
            <div class="form-group">
                <label>${t('editAmount')}</label>
                <input type="number" id="editPaymentAmount" value="${payment.amount}" min="1" step="1">
            </div>
            <div class="form-group">
                <label>${t('editDate')}</label>
                <input type="date" id="editPaymentDate" value="${payment.date}">
            </div>
            <div class="edit-payment-actions">
                <button class="btn btn-secondary" onclick="closeEditPayment()">${t('btnCancel')}</button>
                <button class="btn btn-primary" onclick="savePaymentEdit('${paymentId}', '${customerId}')">${t('btnUpdate')}</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeEditPayment();
    });
}

function closeEditPayment() {
    const overlay = document.getElementById('editPaymentOverlay');
    if (overlay) overlay.remove();
}

function savePaymentEdit(paymentId, customerId) {
    const newAmount = parseFloat(document.getElementById('editPaymentAmount').value);
    const newDate = document.getElementById('editPaymentDate').value;

    if (!newAmount || newAmount <= 0 || !newDate) return;

    let payments = getPayments();
    const index = payments.findIndex(p => p.id === paymentId);
    if (index !== -1) {
        payments[index].amount = newAmount;
        payments[index].date = newDate;
        savePayments(payments);
        closeEditPayment();
        showToast(t('paymentUpdated'));
        viewCustomerDetail(customerId);
        refreshCurrentView();
    }
}

// === Loan Closing & Renewal ===
async function closeLoan(customerId) {
    const confirmed = await showConfirm(t('confirmCloseLoan'));
    if (!confirmed) return;

    const customers = getCustomers();
    const index = customers.findIndex(c => c.id === customerId);
    if (index !== -1) {
        customers[index].status = 'closed';
        customers[index].closedDate = getTodayStr();
        saveCustomers(customers);
        showToast(t('loanClosed'));
        viewCustomerDetail(customerId);
        refreshCurrentView();
    }
}

function renewLoan(customerId) {
    const customers = getCustomers();
    const index = customers.findIndex(c => c.id === customerId);
    if (index !== -1) {
        const customer = customers[index];
        // Reset to active with today's date
        customer.status = 'active';
        customer.issuedDate = getTodayStr();
        customer.closedDate = '';
        // Set deadline to same duration from today
        const originalStart = new Date(customer.issuedDate);
        const originalEnd = new Date(customer.deadline);
        const durationDays = Math.round((originalEnd - originalStart) / (1000 * 60 * 60 * 24));
        const newDeadline = new Date();
        newDeadline.setDate(newDeadline.getDate() + Math.max(durationDays, 30));
        customer.deadline = newDeadline.toISOString().split('T')[0];
        customer.issuedDate = getTodayStr();

        saveCustomers(customers);

        // Clear old payments for this customer
        let payments = getPayments();
        payments = payments.filter(p => p.customerId !== customerId);
        savePayments(payments);

        showToast(t('loanRenewed'));
        viewCustomerDetail(customerId);
        refreshCurrentView();
    }
}

// === Daily Entry ===
// Track selected amounts per customer for the current session
let dailySelectedAmounts = {};
let dailyExpandedCustomerId = null;

function refreshDailyEntryView() {
    const customers = getCustomers();
    const date = document.getElementById('entryDate').value;
    const searchVal = document.getElementById('dailySearch').value.toLowerCase();
    const areaFilterVal = document.getElementById('areaFilter').value;
    const payments = getPayments();

    // Populate Area Filter dynamically
    const areas = [...new Set(customers.map(c => c.area).filter(a => a && a.trim() !== ''))];
    const areaSelect = document.getElementById('areaFilter');
    // Save current selection before repopulating
    const currentArea = areaSelect.value;
    areaSelect.innerHTML = `<option value="all" data-i18n="allAreas">${t('allAreas')}</option>` +
        areas.map(a => `<option value="${a}">${a}</option>`).join('');
    // Restore selection if it still exists
    if (currentArea === 'all' || areas.includes(currentArea)) {
        areaSelect.value = currentArea;
    }

    const filtered = customers.filter(c =>
        getCustomerStatus(c) !== 'closed' &&
        (areaFilterVal === 'all' || c.area === areaFilterVal) &&
        (c.name.toLowerCase().includes(searchVal) ||
            c.phone.includes(searchVal))
    );

    const container = document.getElementById('dailyEntryList');

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
                <p>${searchVal ? t('noCustomersFound') : t('noCustomersToShow')}</p>
                <span>${searchVal ? t('tryDifferentSearch') : t('addCustomersFirst')}</span>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map((c, index) => {
        const todayPayments = payments.filter(p => p.customerId === c.id && p.date === date);
        const hasPaid = todayPayments.length > 0;
        const todayTotal = todayPayments.reduce((sum, p) => sum + p.amount, 0);
        const selectedAmount = dailySelectedAmounts[c.id] || null;
        const isExpanded = dailyExpandedCustomerId === c.id;
        const customerType = getCustomerType(c);
        const amountLabel = getCustomerAmountLabel(c);

        return `
            <div class="daily-entry-card ${hasPaid ? 'entered' : ''} ${isExpanded ? 'expanded' : ''}" id="entry-${c.id}">
                <div class="entry-card-top">
                    <div class="daily-entry-item-header">
                        <input type="checkbox" class="customer-checkbox" value="${c.id}" onchange="toggleBulkSelection(event)" ${hasPaid ? 'disabled' : ''}>
                        <div class="entry-customer-info" onclick="toggleDailyEntry('${c.id}')" style="cursor: pointer;">
                            ${getAvatarHtml(c, 'customer-avatar')}
                            <div class="entry-customer-details">
                                <h4>${index + 1}. ${c.name}</h4>
                                <span>${c.phone} - ${amountLabel}: ${formatCurrency(c.loanAmount)}</span>
                                <span class="customer-type-badge ${customerType}">${getCustomerTypeLabel(c)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="entry-card-actions" onclick="toggleDailyEntry('${c.id}')" style="cursor: pointer;">
                        <span class="entry-status ${hasPaid ? 'done' : 'pending'}">
                            ${hasPaid ? `${t('paid')} ${formatCurrency(todayTotal)}` : t('pendingStatus')}
                        </span>
                        <span class="entry-expand-toggle ${isExpanded ? 'open' : ''}">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                        </span>
                    </div>
                </div>
                <div class="entry-card-body ${isExpanded ? 'open' : ''}">
                <div class="amount-options">
                    ${AMOUNT_OPTIONS.map(amt => `
                        <button type="button" class="amount-chip ${selectedAmount === amt ? 'selected' : ''}"
                            onclick="selectAmount('${c.id}', ${amt})">${formatCurrency(amt)}</button>
                    `).join('')}
                </div>
                <div class="entry-footer">
                    <div class="manual-amount-input">
                        <span>₹</span>
                        <input type="number" id="manual-${c.id}" placeholder="${t('orEnterManually')}"
                            min="1" oninput="clearChipSelection('${c.id}')">
                    </div>
                    <button class="btn btn-success btn-sm" onclick="submitDailyEntry('${c.id}')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                        ${t('save')}
                    </button>
                </div>
                </div>
            </div>`;
    }).join('');
}

function loadDailyEntryView() {
    dailySelectedAmounts = {};
    dailyExpandedCustomerId = null;
    refreshDailyEntryView();
}

function filterDailyEntry() {
    refreshDailyEntryView();
}

function toggleDailyEntry(customerId) {
    dailyExpandedCustomerId = dailyExpandedCustomerId === customerId ? null : customerId;
    refreshDailyEntryView();
}

function selectAmount(customerId, amount) {
    if (dailySelectedAmounts[customerId] === amount) {
        delete dailySelectedAmounts[customerId];
    } else {
        dailySelectedAmounts[customerId] = amount;
    }
    // Clear manual input
    const manualInput = document.getElementById(`manual-${customerId}`);
    if (manualInput) manualInput.value = '';
    refreshDailyEntryView();
}

function clearChipSelection(customerId) {
    delete dailySelectedAmounts[customerId];
    // Remove selected state from chips
    const card = document.getElementById(`entry-${customerId}`);
    if (card) {
        card.querySelectorAll('.amount-chip').forEach(chip => chip.classList.remove('selected'));
    }
}

function submitDailyEntry(customerId) {
    const date = document.getElementById('entryDate').value;
    if (!date) {
        showToast(t('selectDateFirst'), 'error');
        return;
    }

    let amount = dailySelectedAmounts[customerId] || null;
    const manualInput = document.getElementById(`manual-${customerId}`);
    if (manualInput && manualInput.value) {
        amount = parseFloat(manualInput.value);
    }

    if (!amount || amount <= 0) {
        showToast(t('selectOrEnterAmount'), 'error');
        return;
    }

    const newPaymentId = generateId();
    const payments = getPayments();
    payments.push({
        id: newPaymentId,
        customerId,
        date,
        amount,
        timestamp: Date.now()
    });
    savePayments(payments);

    delete dailySelectedAmounts[customerId];
    dailyExpandedCustomerId = null;
    if (manualInput) manualInput.value = '';

    const customer = getCustomers().find(c => c.id === customerId);
    showToast(`${formatCurrency(amount)} ${t('amountRecorded')} ${customer ? customer.name : t('customer')}!`, 'success', {
        label: t('undo'),
        onClick: async () => {
            const undoConfirmed = await showConfirm(t('confirmUndo'));
            if (!undoConfirmed) return;

            let currentPayments = getPayments();
            currentPayments = currentPayments.filter(p => p.id !== newPaymentId);
            savePayments(currentPayments);

            showToast(t('actionUndone'));
            refreshCurrentView();
        }
    });
    refreshCurrentView();
}

// === Bulk Collection ===
function toggleBulkSelection(event) {
    event.stopPropagation();
    updateBulkActionBar();
}

function updateBulkActionBar() {
    const selectedCount = document.querySelectorAll('.customer-checkbox:checked').length;
    const actionBar = document.getElementById('bulkActionBar');
    const countText = document.getElementById('bulkSelectedCount');

    if (selectedCount > 0) {
        actionBar.style.display = 'flex';
        countText.textContent = `${selectedCount} ${t('selectedCustomers')}`;
    } else {
        actionBar.style.display = 'none';
    }
}

function openBulkCollectModal() {
    document.getElementById('bulkCollectModal').classList.add('active');
    document.getElementById('bulkCollectAmount').value = '';
    document.getElementById('bulkCollectAmount').focus();
}

function closeBulkCollectModal() {
    document.getElementById('bulkCollectModal').classList.remove('active');
}

function processBulkCollect() {
    const amount = parseFloat(document.getElementById('bulkCollectAmount').value);
    const date = document.getElementById('entryDate').value;

    if (!amount || amount <= 0) {
        showToast(t('selectOrEnterAmount'), 'error');
        return;
    }

    if (!date) {
        showToast(t('selectDateFirst'), 'error');
        return;
    }

    const selectedCheckboxes = document.querySelectorAll('.customer-checkbox:checked');
    const payments = getPayments();
    const newPaymentIds = [];

    selectedCheckboxes.forEach(cb => {
        const newId = generateId();
        newPaymentIds.push(newId);
        payments.push({
            id: newId,
            customerId: cb.value,
            date: date,
            amount: amount,
            timestamp: Date.now()
        });
    });

    savePayments(payments);
    closeBulkCollectModal();
    showToast(`${formatCurrency(amount)} ${t('amountRecorded')} for ${selectedCheckboxes.length} ${t('customer')}s!`, 'success', {
        label: t('undo'),
        onClick: async () => {
            const undoConfirmed = await showConfirm(t('confirmUndo'));
            if (!undoConfirmed) return;

            let currentPayments = getPayments();
            currentPayments = currentPayments.filter(p => !newPaymentIds.includes(p.id));
            savePayments(currentPayments);

            showToast(t('actionUndone'));
            refreshCurrentView();
        }
    });
    refreshCurrentView();
    updateBulkActionBar(); // Will hide it since checkboxes will be unmounted
}

// === Reminders ===
function sendReminder(phone, amountStr, nameStr) {
    // Basic sanitization
    const cleanPhone = phone.replace(/\D/g, '');
    const message = t('reminderMessage')
        .replace('{name}', nameStr)
        .replace('{amount}', amountStr);

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    window.open(url, '_blank');
}

// === Records ===
function refreshRecordsList() {
    const customers = getCustomers();
    const searchVal = document.getElementById('recordsSearch').value.toLowerCase();
    const filtered = customers.filter(c =>
        c.name.toLowerCase().includes(searchVal) ||
        c.phone.includes(searchVal)
    );

    const container = document.getElementById('recordsList');

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                <p>${searchVal ? t('noCustomersFound') : t('noRecords')}</p>
                <span>${searchVal ? t('tryDifferentSearch') : t('recordsWillAppear')}</span>
            </div>`;
        return;
    }

    container.innerHTML = filtered.map((c, index) => {
        const payments = getCustomerPayments(c.id);
        const totalPaid = payments.reduce((sum, p) => sum + p.amount, 0);
        const pending = Math.max(0, c.loanAmount - totalPaid);
        const progress = c.loanAmount > 0 ? Math.min(100, (totalPaid / c.loanAmount) * 100) : 0;
        const customerType = getCustomerType(c);
        const amountLabel = getCustomerAmountLabel(c);

        return `
            <div class="record-card" id="record-${c.id}">
                <div class="record-card-header" onclick="toggleRecord('${c.id}')">
                    <div class="record-summary">
                        ${getAvatarHtml(c, 'customer-avatar')}
                        <div>
                            <div class="customer-name">${index + 1}. ${c.name}</div>
                            <div class="customer-phone">${c.phone}</div>
                            <span class="customer-type-badge ${customerType}">${getCustomerTypeLabel(c)}</span>
                        </div>
                    </div>
                    <div class="record-summary-stats">
                        <div class="record-stat">
                            <span class="record-stat-label">${amountLabel}</span>
                            <span class="record-stat-value" style="color: var(--primary-400)">${formatCurrency(c.loanAmount)}</span>
                        </div>
                        <div class="record-stat">
                            <span class="record-stat-label">${t('paid')}</span>
                            <span class="record-stat-value" style="color: var(--success-400)">${formatCurrency(totalPaid)}</span>
                        </div>
                        <div class="record-stat">
                            <span class="record-stat-label">${t('pending')}</span>
                            <span class="record-stat-value" style="color: var(--danger-400)">${formatCurrency(pending)}</span>
                        </div>
                        <div class="record-stat">
                            <span class="record-stat-label">${t('progress')}</span>
                            <span class="record-stat-value">${progress.toFixed(1)}%</span>
                        </div>
                    </div>
                    <div class="record-toggle" id="toggle-${c.id}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </div>
                </div>
                <div class="record-card-body" id="body-${c.id}">
                    ${payments.length === 0 ? `<p style="color: var(--text-muted); text-align: center; padding: 20px;">${t('noPaymentsRecorded')}</p>` :
                `<table class="record-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>${t('date')}</th>
                                <th>${t('amount')}</th>
                                <th>${t('runningTotal')}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${(() => {
                    let runningTotal = 0;
                    // Show in chronological order for the table
                    const chronological = [...payments].reverse();
                    return chronological.map((p, i) => {
                        runningTotal += p.amount;
                        return `
                                        <tr>
                                            <td style="color: var(--text-muted)">${i + 1}</td>
                                            <td>${formatDate(p.date)}</td>
                                            <td style="color: var(--success-400); font-weight: 600">${formatCurrency(p.amount)}</td>
                                            <td style="font-weight: 600">${formatCurrency(runningTotal)}</td>
                                            <td>
                                                <button class="record-delete-btn" onclick="event.stopPropagation(); deletePaymentFromRecords('${p.id}', '${c.id}')" title="Delete">
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                                </button>
                                            </td>
                                        </tr>`;
                    }).join('');
                })()}
                        </tbody>
                    </table>`}
                </div>
            </div>`;
    }).join('');
}

function toggleRecord(customerId) {
    const body = document.getElementById(`body-${customerId}`);
    const toggle = document.getElementById(`toggle-${customerId}`);
    body.classList.toggle('open');
    toggle.classList.toggle('open');
}

function filterRecords() {
    refreshRecordsList();
}

async function deletePaymentFromRecords(paymentId, customerId) {
    const confirmed = await showConfirm(t('confirmDeletePayment'));
    if (!confirmed) return;

    let payments = getPayments();
    const paymentToDelete = payments.find(p => p.id === paymentId);
    payments = payments.filter(p => p.id !== paymentId);
    savePayments(payments);

    showToast(t('paymentDeleted'), 'success', {
        label: t('undo'),
        onClick: async () => {
            const undoConfirmed = await showConfirm(t('confirmUndo'));
            if (!undoConfirmed) return;

            let currentPayments = getPayments();
            currentPayments.push(paymentToDelete);
            savePayments(currentPayments);

            showToast(t('actionUndone'));
            refreshCurrentView();
        }
    });
    refreshCurrentView();
}

// === Reports & Analytics ===
let collectionChartInstance = null;

function refreshReportsView() {
    const customers = getCustomers();
    const payments = getPayments();

    // Summary Cards
    const now = new Date();
    const firstDayThisMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];

    const thisMonthPayments = payments.filter(p => p.date >= firstDayThisMonth);
    const thisMonthCollected = thisMonthPayments.reduce((sum, p) => sum + p.amount, 0);

    const activeLoansCount = customers.filter(c => getCustomerStatus(c) !== 'closed' && getCustomerType(c) === 'loan').length;

    document.getElementById('reportMonthlyCollected').textContent = formatCurrency(thisMonthCollected);
    document.getElementById('reportActiveLoans').textContent = activeLoansCount;

    // Defaulters Logic (> 3 days overdue)
    const DEFAULTER_THRESHOLD_DAYS = 3;
    const defaulters = [];

    customers.filter(c => getCustomerStatus(c) !== 'closed' && getCustomerType(c) === 'loan').forEach(c => {
        const customerPayments = getCustomerPayments(c.id);
        const totalPaid = customerPayments.reduce((sum, p) => sum + p.amount, 0);
        const totalRepayable = calculateTotalRepayable(c);

        // Only consider if they still owe money
        if (totalPaid < totalRepayable) {
            let lastPaymentDate = c.issuedDate;
            if (customerPayments.length > 0) {
                lastPaymentDate = customerPayments[0].date; // Assuming sorted latest first
            }

            const daysSinceLastPayment = daysUntil(lastPaymentDate) * -1; // daysUntil returns negative for past dates

            if (daysSinceLastPayment > DEFAULTER_THRESHOLD_DAYS) {
                defaulters.push({
                    customer: c,
                    daysOverdue: daysSinceLastPayment,
                    pendingAmount: totalRepayable - totalPaid
                });
            }
        }
    });

    // Sort defaulters by days overdue descending
    defaulters.sort((a, b) => b.daysOverdue - a.daysOverdue);

    document.getElementById('reportDefaultersCount').textContent = defaulters.length;

    const defaultersListEl = document.getElementById('defaultersList');
    if (defaulters.length === 0) {
        defaultersListEl.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <p>${t('noDefaulters')}</p>
                <span>${t('allCustomersPaying')}</span>
            </div>
        `;
    } else {
        defaultersListEl.innerHTML = defaulters.map(d => `
            <div class="defaulter-item" onclick="viewCustomerDetail('${d.customer.id}')" style="cursor: pointer;">
                <div class="defaulter-info">
                    ${getAvatarHtml(d.customer, 'defaulter-avatar')}
                    <div class="defaulter-details">
                        <h4>${d.customer.name}</h4>
                        <p>${d.customer.phone} · ${t('pending')}: ${formatCurrency(d.pendingAmount)}</p>
                        <button class="btn-whatsapp" onclick="event.stopPropagation(); sendReminder('${d.customer.phone}', '${formatCurrency(d.pendingAmount)}', '${d.customer.name}')" style="margin-top: 8px;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            ${t('btnSendReminder')}
                        </button>
                    </div>
                </div>
                <div class="defaulter-status">
                    <div class="days">${d.daysOverdue}</div>
                    <div class="label">${t('daysOverdue')}</div>
                </div>
            </div>
        `).join('');
    }

    // Chart Logic (Last 30 Days)
    const chartLabels = [];
    const chartData = [];

    // Generate last 30 days
    for (let i = 29; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];

        // Format for display (e.g. "Jun 28")
        const displayLabel = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        chartLabels.push(displayLabel);

        const dayTotal = payments
            .filter(p => p.date === dateStr)
            .reduce((sum, p) => sum + p.amount, 0);

        chartData.push(dayTotal);
    }

    const ctx = document.getElementById('collectionChart');
    if (!ctx) return;

    // Destroy previous instance to prevent overlapping
    if (collectionChartInstance) {
        collectionChartInstance.destroy();
    }

    // Wait for next frame to render chart (ensures canvas is visible)
    setTimeout(() => {
        if (!window.Chart) return;

        // CSS variables for themes
        const rootStyles = getComputedStyle(document.documentElement);
        const primaryColor = rootStyles.getPropertyValue('--primary-500').trim() || '#6366f1';
        const primaryGlow = rootStyles.getPropertyValue('--primary-400').trim() || '#818cf8';
        const gridColor = rootStyles.getPropertyValue('--border-color').trim() || '#1e293b';
        const textColor = rootStyles.getPropertyValue('--text-secondary').trim() || '#94a3b8';

        collectionChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: chartLabels,
                datasets: [{
                    label: 'Daily Collection',
                    data: chartData,
                    borderColor: primaryColor,
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 2,
                    pointBackgroundColor: primaryGlow,
                    pointBorderColor: '#0f172a',
                    pointBorderWidth: 2,
                    pointRadius: 3,
                    pointHoverRadius: 5,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        titleColor: '#f8fafc',
                        bodyColor: '#cbd5e1',
                        borderColor: '#334155',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: function (context) {
                                return '₹' + context.parsed.y.toLocaleString('en-IN');
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: gridColor,
                            drawBorder: false,
                        },
                        ticks: {
                            color: textColor,
                            maxTicksLimit: 10
                        }
                    },
                    y: {
                        grid: {
                            color: gridColor,
                            drawBorder: false,
                        },
                        ticks: {
                            color: textColor,
                            callback: function (value) {
                                if (value >= 1000) {
                                    return '₹' + (value / 1000).toFixed(1) + 'k';
                                }
                                return '₹' + value;
                            }
                        },
                        beginAtZero: true
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                }
            }
        });
    }, 100);
}

// === Refresh ===
function refreshCurrentView() {
    refreshDashboard();
    switch (currentView) {
        case 'customers':
            refreshCustomersList();
            break;
        case 'daily-entry':
            refreshDailyEntryView();
            break;
        case 'records':
            refreshRecordsList();
            break;
        case 'reports':
            refreshReportsView();
            break;
        case 'settings':
            renderSettingsView();
            break;
    }
}

// ========================================
// SETTINGS SYSTEM
// ========================================

function getSettings() {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return data ? JSON.parse(data) : {
        businessName: '',
        ownerName: '',
        defaultAmount: 100,
        pinEnabled: false,
        pinHash: ''
    };
}

function saveSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
}

function updateSidebarBusinessName() {
    const settings = getSettings();
    const subtitleEl = document.querySelector('.logo-text span');
    if (subtitleEl) {
        subtitleEl.textContent = settings.businessName || t('appSubtitle');
    }
}

// ========================================
// PIN LOCK SYSTEM
// ========================================

let lockPinBuffer = '';
let setupPinBuffer = '';
let setupPinStep = 'new'; // 'current', 'new', 'confirm'
let setupPinFirstEntry = '';
let setupPinIsChange = false;

async function hashPin(pin) {
    const encoder = new TextEncoder();
    const data = encoder.encode(pin + '_pigmie_salt');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function updateLockDots(prefix, buffer) {
    for (let i = 0; i < 4; i++) {
        const dot = document.getElementById(`${prefix}${i}`);
        if (dot) {
            dot.classList.toggle('filled', i < buffer.length);
            dot.classList.remove('error');
        }
    }
}

function setDotsError(prefix) {
    for (let i = 0; i < 4; i++) {
        const dot = document.getElementById(`${prefix}${i}`);
        if (dot) {
            dot.classList.add('error');
            dot.classList.remove('filled');
        }
    }
}

// --- Lock Screen ---
function showLockScreen() {
    const lockScreen = document.getElementById('lockScreen');
    lockScreen.classList.add('active');
    lockPinBuffer = '';
    updateLockDots('pinDot', '');
    document.getElementById('pinError').textContent = '';
}

function hideLockScreen() {
    const lockScreen = document.getElementById('lockScreen');
    lockScreen.classList.remove('active');
    lockPinBuffer = '';
}

function pinKeyPress(digit) {
    if (lockPinBuffer.length >= 4) return;
    lockPinBuffer += digit;
    updateLockDots('pinDot', lockPinBuffer);

    if (lockPinBuffer.length === 4) {
        verifyLockPin();
    }
}

function pinKeyDelete() {
    if (lockPinBuffer.length > 0) {
        lockPinBuffer = lockPinBuffer.slice(0, -1);
        updateLockDots('pinDot', lockPinBuffer);
        document.getElementById('pinError').textContent = '';
    }
}

async function verifyLockPin() {
    const settings = getSettings();
    const hash = await hashPin(lockPinBuffer);

    if (hash === settings.pinHash) {
        hideLockScreen();
    } else {
        document.getElementById('pinError').textContent = t('wrongPin');
        setDotsError('pinDot');
        const display = document.querySelector('#lockScreen .pin-display');
        display.classList.add('shake');
        setTimeout(() => {
            display.classList.remove('shake');
            lockPinBuffer = '';
            updateLockDots('pinDot', '');
        }, 600);
    }
}

// --- PIN Setup Modal ---
function openPinModal(isChange = false) {
    setupPinIsChange = isChange;
    setupPinBuffer = '';
    setupPinFirstEntry = '';
    setupPinStep = isChange ? 'current' : 'new';

    const modal = document.getElementById('pinModal');
    const title = document.getElementById('pinModalTitle');
    const label = document.getElementById('pinSetupLabel');

    title.textContent = t(isChange ? 'changePinTitle' : 'setPinTitle');
    label.textContent = t(isChange ? 'enterCurrentPin' : 'enterNewPin');

    document.getElementById('pinSetupError').textContent = '';
    updateLockDots('setupPinDot', '');
    modal.classList.add('active');
}

function closePinModal() {
    document.getElementById('pinModal').classList.remove('active');
    setupPinBuffer = '';
    setupPinFirstEntry = '';
}

function setupPinKeyPress(digit) {
    if (setupPinBuffer.length >= 4) return;
    setupPinBuffer += digit;
    updateLockDots('setupPinDot', setupPinBuffer);

    if (setupPinBuffer.length === 4) {
        handleSetupPinComplete();
    }
}

function setupPinKeyDelete() {
    if (setupPinBuffer.length > 0) {
        setupPinBuffer = setupPinBuffer.slice(0, -1);
        updateLockDots('setupPinDot', setupPinBuffer);
        document.getElementById('pinSetupError').textContent = '';
    }
}

async function handleSetupPinComplete() {
    const label = document.getElementById('pinSetupLabel');
    const errorEl = document.getElementById('pinSetupError');

    if (setupPinStep === 'current') {
        // Verify current PIN first
        const settings = getSettings();
        const hash = await hashPin(setupPinBuffer);
        if (hash !== settings.pinHash) {
            errorEl.textContent = t('wrongCurrentPin');
            setDotsError('setupPinDot');
            const display = document.querySelector('#pinModal .pin-display');
            display.classList.add('shake');
            setTimeout(() => {
                display.classList.remove('shake');
                setupPinBuffer = '';
                updateLockDots('setupPinDot', '');
            }, 600);
            return;
        }
        // Move to enter new PIN
        setupPinStep = 'new';
        setupPinBuffer = '';
        errorEl.textContent = '';
        label.textContent = t('enterNewPin');
        updateLockDots('setupPinDot', '');
    } else if (setupPinStep === 'new') {
        // Store first entry, ask for confirmation
        setupPinFirstEntry = setupPinBuffer;
        setupPinStep = 'confirm';
        setupPinBuffer = '';
        errorEl.textContent = '';
        label.textContent = t('confirmNewPin');
        updateLockDots('setupPinDot', '');
    } else if (setupPinStep === 'confirm') {
        // Check if matches
        if (setupPinBuffer === setupPinFirstEntry) {
            const hash = await hashPin(setupPinBuffer);
            const settings = getSettings();
            settings.pinHash = hash;
            settings.pinEnabled = true;
            saveSettings(settings);
            closePinModal();
            showToast(t(setupPinIsChange ? 'pinChanged' : 'pinSet'));
            renderSettingsView();
        } else {
            errorEl.textContent = t('pinMismatch');
            setDotsError('setupPinDot');
            const display = document.querySelector('#pinModal .pin-display');
            display.classList.add('shake');
            setTimeout(() => {
                display.classList.remove('shake');
                setupPinStep = 'new';
                setupPinBuffer = '';
                setupPinFirstEntry = '';
                label.textContent = t('enterNewPin');
                errorEl.textContent = '';
                updateLockDots('setupPinDot', '');
            }, 600);
        }
    }
}

function togglePinEnabled() {
    const settings = getSettings();
    if (!settings.pinEnabled) {
        // Enable: open modal to set PIN
        openPinModal(false);
    } else {
        // Disable: remove PIN
        settings.pinEnabled = false;
        settings.pinHash = '';
        saveSettings(settings);
        showToast(t('pinRemoved'));
        renderSettingsView();
    }
}

// ========================================
// BACKUP & RESTORE
// ========================================

function exportBackup() {
    try {
        const backup = {
            version: '1.0.0',
            exportDate: new Date().toISOString(),
            customers: getCustomers(),
            payments: getPayments(),
            settings: getSettings()
        };

        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const dateStr = getTodayStr();
        a.href = url;
        a.download = `pigmie_backup_${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast(t('backupExported'));
    } catch (e) {
        showToast('Export failed: ' + e.message, 'error');
    }
}

function exportToCSV(type) {
    try {
        let csvContent = "";
        let filename = "";
        const dateStr = getTodayStr();

        if (type === 'customers') {
            const customers = getCustomers();
            const payments = getPayments();

            // CSV Header
            csvContent += "ID,Name,Phone,Area,Type,Loan Amount,Interest Rate,Issued Date,Deadline,Status,Total Paid,Pending Balance\n";

            customers.forEach(c => {
                const cPayments = payments.filter(p => p.customerId === c.id);
                const totalPaid = cPayments.reduce((sum, p) => sum + p.amount, 0);
                const totalRepayable = calculateTotalRepayable(c);
                const pending = Math.max(0, totalRepayable - totalPaid);
                const status = (pending <= 0) ? "Closed" : "Active";

                const row = [
                    c.id,
                    `"${c.name}"`,
                    c.phone,
                    `"${c.area || ''}"`,
                    c.type,
                    c.amount,
                    c.interestRate || 0,
                    c.issuedDate,
                    c.deadline,
                    status,
                    totalPaid,
                    pending
                ];
                csvContent += row.join(",") + "\n";
            });
            filename = `pigmie_customers_${dateStr}.csv`;

        } else if (type === 'payments') {
            const payments = getPayments();
            const customers = getCustomers();

            // CSV Header
            csvContent += "Payment ID,Date,Customer ID,Customer Name,Amount\n";

            // Sort payments by date descending
            const sortedPayments = [...payments].sort((a, b) => new Date(b.date) - new Date(a.date));

            sortedPayments.forEach(p => {
                const customer = customers.find(c => c.id === p.customerId);
                const customerName = customer ? customer.name : "Unknown";

                const row = [
                    p.id,
                    p.date,
                    p.customerId,
                    `"${customerName}"`,
                    p.amount
                ];
                csvContent += row.join(",") + "\n";
            });
            filename = `pigmie_payments_${dateStr}.csv`;
        }

        // Trigger download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('Export successful!', 'success');
    } catch (e) {
        showToast('CSV Export failed: ' + e.message, 'error');
    }
}

function triggerImport() {
    document.getElementById('importFileInput').click();
}

async function handleImportFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Reset file input so the same file can be selected again
    event.target.value = '';

    try {
        const text = await file.text();
        const backup = JSON.parse(text);

        // Validate structure
        if (!backup.customers || !Array.isArray(backup.customers) ||
            !backup.payments || !Array.isArray(backup.payments)) {
            showToast(t('backupInvalid'), 'error');
            return;
        }

        // Confirm overwrite
        const confirmed = await showConfirmImport(t('confirmImportBackup'));
        if (!confirmed) return;

        // Restore data
        saveCustomers(backup.customers);
        savePayments(backup.payments);
        if (backup.settings) {
            saveSettings(backup.settings);
        }

        showToast(t('backupImported'));
        updateSidebarBusinessName();
        refreshCurrentView();
    } catch (e) {
        showToast(t('backupInvalid'), 'error');
    }
}

function showConfirmImport(message) {
    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.className = 'confirm-overlay';
        overlay.innerHTML = `
            <div class="confirm-dialog">
                <p>${message}</p>
                <div class="confirm-actions">
                    <button class="btn btn-secondary" id="confirmCancel">${t('confirmCancel')}</button>
                    <button class="btn btn-primary" id="confirmOk">${t('confirmImportBtn')}</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.querySelector('#confirmCancel').onclick = () => {
            overlay.remove();
            resolve(false);
        };
        overlay.querySelector('#confirmOk').onclick = () => {
            overlay.remove();
            resolve(true);
        };
    });
}

async function clearAllData() {
    const confirmed = await showConfirm(t('confirmClearAll'));
    if (!confirmed) return;

    localStorage.removeItem(STORAGE_KEYS.CUSTOMERS);
    localStorage.removeItem(STORAGE_KEYS.PAYMENTS);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);

    showToast(t('dataCleared'));
    updateSidebarBusinessName();
    refreshCurrentView();
}

// ========================================
// SETTINGS VIEW RENDERER
// ========================================

function renderSettingsView() {
    const settings = getSettings();
    const container = document.getElementById('settingsContainer');

    container.innerHTML = `
        <!-- Business Profile -->
        <div class="settings-section">
            <div class="settings-section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
                <h3>${t('settingsBusinessProfile')}</h3>
            </div>
            <div class="settings-section-body">
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">${t('settingsBusinessName')}</span>
                        <span class="settings-item-desc">${t('settingsBusinessNameDesc')}</span>
                    </div>
                    <div class="settings-item-action">
                        <input type="text" class="settings-input" id="settingsBusinessName" 
                            value="${escapeHtml(settings.businessName)}" 
                            placeholder="${t('settingsBusinessNamePh')}"
                            onchange="saveBusinessSetting('businessName', this.value)">
                    </div>
                </div>
                <div class="settings-divider"></div>
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">${t('settingsOwnerName')}</span>
                        <span class="settings-item-desc">${t('settingsOwnerNameDesc')}</span>
                    </div>
                    <div class="settings-item-action">
                        <input type="text" class="settings-input" id="settingsOwnerName" 
                            value="${escapeHtml(settings.ownerName)}" 
                            placeholder="${t('settingsOwnerNamePh')}"
                            onchange="saveBusinessSetting('ownerName', this.value)">
                    </div>
                </div>
            </div>
        </div>

        <!-- App Lock -->
        <div class="settings-section">
            <div class="settings-section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <h3>${t('settingsAppLock')}</h3>
            </div>
            <div class="settings-section-body">
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">${t('settingsEnablePin')}</span>
                        <span class="settings-item-desc">${t('settingsEnablePinDesc')}</span>
                    </div>
                    <div class="settings-item-action">
                        <label class="toggle-switch">
                            <input type="checkbox" ${settings.pinEnabled ? 'checked' : ''} onchange="togglePinEnabled()">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
                ${settings.pinEnabled ? `
                <div class="settings-divider"></div>
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">${t('settingsChangePin')}</span>
                        <span class="settings-item-desc">${t('settingsChangePinDesc')}</span>
                    </div>
                    <div class="settings-item-action">
                        <button class="settings-btn settings-btn-primary" onclick="openPinModal(true)">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                            ${t('settingsChangePin')}
                        </button>
                    </div>
                </div>
                ` : ''}
            </div>
        </div>

        <!-- Cloud Sync -->
        <div class="settings-section">
            <div class="settings-section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                </svg>
                <h3>Cloud Sync & Auto Backup</h3>
            </div>
            <div class="settings-section-body">
                <div class="settings-item" id="firebaseConfigGroup">
                    <div class="settings-item-info">
                        <span class="settings-item-label">Firebase Config</span>
                        <span class="settings-item-desc">Paste your Firebase configuration object to enable cloud sync</span>
                    </div>
                    <div class="settings-item-action" style="flex-direction: column; align-items: stretch; gap: 8px;">
                        <textarea id="firebaseConfigInput" class="settings-input" style="height: 100px; font-family: monospace; font-size: 0.8rem;" placeholder='{"apiKey": "...", ...}'></textarea>
                        <button class="settings-btn settings-btn-primary" onclick="saveFirebaseConfig()" style="align-self: flex-end;">Save & Initialize</button>
                    </div>
                </div>
                
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">Sync Status</span>
                        <span class="settings-item-desc" id="syncStatusText">Checking...</span>
                    </div>
                    <div class="settings-item-action" style="gap: 8px;">
                        <button class="settings-btn settings-btn-primary" id="syncLoginBtn" onclick="signInWithGoogle()" style="display: none;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                            Login with Google
                        </button>
                        <button class="settings-btn settings-btn-danger" id="syncLogoutBtn" onclick="signOutFirebase()" style="display: none;">Logout</button>
                    </div>
                </div>
                
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">Manual Sync Actions</span>
                        <span class="settings-item-desc">Background sync happens automatically</span>
                    </div>
                    <div class="settings-item-action" style="gap: 8px;">
                        <button class="settings-btn settings-btn-success" id="syncPushBtn" onclick="pushToCloud(true)" style="display: none;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            Sync Now
                        </button>
                        <button class="settings-btn settings-btn-info" id="syncPullBtn" onclick="pullFromCloud()" style="display: none;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                            Restore Data
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Backup & Restore -->
        <div class="settings-section">
            <div class="settings-section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <h3>${t('settingsBackupRestore')}</h3>
            </div>
            <div class="settings-section-body">
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">${t('settingsExportBackup')}</span>
                        <span class="settings-item-desc">${t('settingsExportBackupDesc')}</span>
                    </div>
                    <div class="settings-item-action">
                        <button class="settings-btn settings-btn-success" onclick="exportBackup()">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="7 10 12 15 17 10"/>
                                <line x1="12" y1="15" x2="12" y2="3"/>
                            </svg>
                            ${t('settingsExportBackup')}
                        </button>
                    </div>
                </div>
                <div class="settings-divider"></div>
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">${t('settingsImportBackup')}</span>
                        <span class="settings-item-desc">${t('settingsImportBackupDesc')}</span>
                    </div>
                    <div class="settings-item-action">
                        <button class="settings-btn settings-btn-info" onclick="triggerImport()">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="17 8 12 3 7 8"/>
                                <line x1="12" y1="3" x2="12" y2="15"/>
                            </svg>
                            ${t('settingsImportBackup')}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Appearance -->
        <div class="settings-section">
            <div class="settings-section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                <h3>${t('appearance')}</h3>
            </div>
            <div class="settings-section-body">
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">${t('themeMode')}</span>
                        <span class="settings-item-desc">${t('themeModeDesc')}</span>
                    </div>
                    <div class="settings-item-action">
                        <label class="toggle-switch">
                            <input type="checkbox" id="themeToggle" onchange="toggleTheme()" ${settings.theme === 'light' ? 'checked' : ''}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <!-- Danger Zone -->
        <div class="settings-section danger-zone">
            <div class="settings-section-header">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
                <h3>${t('settingsDangerZone')}</h3>
            </div>
            <div class="settings-section-body">
                <div class="settings-item">
                    <div class="settings-item-info">
                        <span class="settings-item-label">${t('settingsClearAll')}</span>
                        <span class="settings-item-desc">${t('settingsClearAllDesc')}</span>
                    </div>
                    <div class="settings-item-action">
                        <button class="settings-btn settings-btn-danger" onclick="clearAllData()">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                            ${t('settingsClearAll')}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- About -->
        <div class="settings-about">
            <div class="app-version">${t('settingsAboutVersion')}</div>
            <div>${t('settingsAboutCredit')}</div>
        </div>
    `;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

function saveBusinessSetting(key, value) {
    const settings = getSettings();
    settings[key] = value;
    saveSettings(settings);
    if (key === 'businessName') {
        updateSidebarBusinessName();
    }
    showToast(t('settingsSaved'));
}

// === Initialization ===
function init() {
    // Apply saved language
    applyTranslations();

    // Check PIN lock
    const settings = getSettings();
    if (settings.pinEnabled && settings.pinHash) {
        showLockScreen();
    }

    // Update sidebar business name
    updateSidebarBusinessName();

    // Set current date display
    const now = new Date();
    const locale = currentLang === 'kn' ? 'kn-IN' : 'en-IN';
    document.getElementById('currentDate').textContent = now.toLocaleDateString(locale, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Set daily entry date to today
    document.getElementById('entryDate').value = getTodayStr();

    // Set page title for initial view
    updatePageTitle();

    // Initial refresh
    refreshCurrentView();

    // Close modals on overlay click
    document.getElementById('customerModal').addEventListener('click', function (e) {
        if (e.target === this) closeCustomerModal();
    });
    document.getElementById('detailModal').addEventListener('click', function (e) {
        if (e.target === this) closeDetailModal();
    });
    document.getElementById('pinModal').addEventListener('click', function (e) {
        if (e.target === this) closePinModal();
    });

    // Keyboard shortcut: Escape to close modals
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeCustomerModal();
            closeDetailModal();
            closePinModal();
        }
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize IndexedDB then start app
    if ('indexedDB' in window) {
        initDB().then(() => {
            init();
        }).catch(err => {
            console.error("Failed to initialize IndexedDB. Falling back to localStorage?", err);
            init(); // Try to load anyway
        });
    } else {
        init();
    }

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
});

// === Phase 6: Image Handling ===
function handleImageUpload(event, previewId, base64Id, isRect = false) {
    const file = event.target.files[0];
    if (!file) return;

    // Show a small loading indicator if desired, or just process
    compressImage(file, isRect ? 1024 : 500, (base64) => {
        document.getElementById(base64Id).value = base64;

        const previewEl = document.getElementById(previewId);
        if (previewEl.tagName === 'IMG') {
            previewEl.src = base64;
            previewEl.style.display = 'block';
            const textEl = document.getElementById(previewId.replace('PreviewImg', 'Text'));
            if (textEl) textEl.style.display = 'none';
        } else {
            previewEl.innerHTML = '';
            previewEl.style.backgroundImage = `url(${base64})`;
        }
    });
}

function compressImage(file, maxWidth, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;

            if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            // Compress to JPEG with 0.7 quality
            const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
            callback(compressedBase64);
        };
    };
}

function viewIdProof(customerId) {
    const customer = getCustomers().find(c => c.id === customerId);
    if (!customer || !customer.idProof) return;

    document.getElementById('idProofViewerImg').src = customer.idProof;
    document.getElementById('idProofModal').classList.add('active');
}

function closeIdProofModal() {
    document.getElementById('idProofModal').classList.remove('active');
}

// === Digital Receipts ===
let currentReceiptText = '';

function showReceipt(paymentId, customerId) {
    const customer = getCustomers().find(c => c.id === customerId);
    const payments = getPayments();
    const payment = payments.find(p => p.id === paymentId);

    if (!customer || !payment) return;

    const settings = getSettings();
    const bizName = settings.businessName || 'Pigmie Record Manager';

    // Calculate running totals up to this payment date
    const customerPayments = payments.filter(p => p.customerId === customerId);
    const totalPaid = customerPayments.reduce((sum, p) => sum + p.amount, 0);
    const totalRepayable = calculateTotalRepayable(customer);
    const pending = Math.max(0, totalRepayable - totalPaid);

    document.getElementById('receiptBizName').textContent = bizName;
    document.getElementById('receiptDate').textContent = `Date: ${formatDate(payment.date)}`;
    document.getElementById('receiptCustName').textContent = customer.name;
    document.getElementById('receiptAmount').textContent = formatCurrency(payment.amount);
    document.getElementById('receiptTotalLoan').textContent = formatCurrency(totalRepayable);
    document.getElementById('receiptPending').textContent = formatCurrency(pending);

    // Prepare text for sharing
    currentReceiptText = `*🧾 Payment Receipt*\n\n*${bizName}*\nDate: ${formatDate(payment.date)}\n\nCustomer: ${customer.name}\n*Amount Paid: ${formatCurrency(payment.amount)}*\n\nTotal Loan: ${formatCurrency(totalRepayable)}\nPending Balance: ${formatCurrency(pending)}\n\nThank you!`;

    document.getElementById('receiptModal').classList.add('active');
}

function closeReceiptModal() {
    document.getElementById('receiptModal').classList.remove('active');
}

function shareReceipt() {
    if (!currentReceiptText) return;
    const encoded = encodeURIComponent(currentReceiptText);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

// === Theme Management ===
function initTheme() {
    const settings = getSettings();
    if (settings.theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        const toggle = document.getElementById('themeToggle');
        if (toggle) toggle.checked = true;
    } else {
        document.documentElement.removeAttribute('data-theme');
        const toggle = document.getElementById('themeToggle');
        if (toggle) toggle.checked = false;
    }
}

function toggleTheme() {
    const toggle = document.getElementById('themeToggle');
    const isLight = toggle.checked;

    if (isLight) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }

    // Save to settings
    const settings = getSettings();
    settings.theme = isLight ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));

    showToast(t('actionUndone') ? 'Theme Updated' : 'Theme Updated', 'success');
}

document.addEventListener('DOMContentLoaded', initTheme);