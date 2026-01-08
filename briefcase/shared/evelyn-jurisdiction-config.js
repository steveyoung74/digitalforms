/**
 * Evelyn Partners - Jurisdiction Configuration System
 * ====================================================
 * 
 * This file contains all jurisdiction-specific configurations for UK and Ireland.
 * Include this file in all Fact Find modules and Account Application journeys.
 * 
 * Usage:
 *   <script src="evelyn-jurisdiction-config.js"></script>
 *   
 *   // In your module JavaScript:
 *   const config = getJurisdictionConfig();
 *   console.log(config.currency); // '£' or '€'
 */

// ============================================================================
// JURISDICTION CONFIGURATIONS
// ============================================================================

const EVELYN_JURISDICTIONS = {
    
    UK: {
        // Basic Info
        code: 'UK',
        name: 'United Kingdom',
        
        // Currency
        currency: '£',
        currencyCode: 'GBP',
        currencyName: 'Pound Sterling',
        
        // Address
        postcodeLabel: 'Postcode',
        postcodePlaceholder: 'SW1A 1AA',
        postcodePattern: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i,
        postcodeValidationMessage: 'Please enter a valid UK postcode (e.g., SW1A 1AA)',
        countyLabel: 'County',
        countyRequired: false,
        
        // Tax Identification
        taxIdLabel: 'National Insurance Number',
        taxIdShortLabel: 'NI Number',
        taxIdPlaceholder: 'AB123456C',
        taxIdPattern: /^[A-Z]{2}\d{6}[A-Z]$/i,
        taxIdValidationMessage: 'Please enter a valid NI number (e.g., AB123456C)',
        taxIdHelpText: 'Your National Insurance number can be found on your payslip, P60, or letters from HMRC',
        
        // Tax Rates
        taxRates: [
            { value: 'nil', label: 'Nil (0%)', rate: 0 },
            { value: 'basic', label: 'Basic (20%)', rate: 20 },
            { value: 'higher', label: 'Higher (40%)', rate: 40 },
            { value: 'additional', label: 'Additional (45%)', rate: 45 }
        ],
        cgtRate: { basic: 10, higher: 20, residential: { basic: 18, higher: 24 } },
        cgtAllowance: 3000, // 2024/25 allowance
        corporateTaxRate: 25, // Main rate
        
        // Regulatory
        regulator: 'Financial Conduct Authority',
        regulatorShort: 'FCA',
        regulatorIdLabel: 'FCA Number',
        taxAuthority: 'HMRC',
        taxAuthorityFull: 'HM Revenue & Customs',
        
        // Products
        availableProducts: ['isa', 'jisa', 'sipp', 'gia', 'aim'],
        showISA: true,
        showJISA: true,
        showSIPP: true,
        showGIA: true,
        showAIM: true,
        
        // ESG
        showESG: false, // Optional for UK
        esgRequired: false,
        
        // Terminology
        nonResidentLabel: 'Non-UK jurisdiction',
        socialInsurance: 'National Insurance',
        pensionSchemes: ['SIPP', 'Personal Pension', 'Workplace Pension'],
        
        // Net Worth Bands
        netWorthBands: [
            { value: 'under_100k', label: 'Under £100,000' },
            { value: '100k_250k', label: '£100,000 - £250,000' },
            { value: '250k_500k', label: '£250,000 - £500,000' },
            { value: '500k_1m', label: '£500,000 - £1,000,000' },
            { value: '1m_2.5m', label: '£1,000,000 - £2,500,000' },
            { value: 'over_2.5m', label: 'Over £2,500,000' }
        ],
        
        // Income Bands
        incomeBands: [
            { value: 'under_25k', label: 'Under £25,000' },
            { value: '25k_50k', label: '£25,000 - £50,000' },
            { value: '50k_100k', label: '£50,000 - £100,000' },
            { value: '100k_150k', label: '£100,000 - £150,000' },
            { value: '150k_250k', label: '£150,000 - £250,000' },
            { value: 'over_250k', label: 'Over £250,000' }
        ],
        
        // Tax Disclaimer
        taxDisclaimer: `
            <p><strong>Important Tax Information</strong></p>
            <p>The information displayed is for guidance only and should not be considered tax advice. 
            Tax rules are complex and subject to change. Your personal circumstances will affect your 
            tax position.</p>
            <p>We recommend seeking independent professional tax advice from a qualified adviser 
            before making investment decisions.</p>
            <p>For specific guidance, please consult HMRC (gov.uk) or a qualified UK tax adviser.</p>
        `,
        
        // Footer
        regulatoryFooter: `
            Evelyn Partners Investment Management LLP (Reg. No. OC369632) and Evelyn Partners 
            Investment Services Limited (Reg. No. 976145) are authorised and regulated by the 
            Financial Conduct Authority. Registered in England at 45 Gresham Street, London EC2V 7BG.
        `
    },
    
    IE: {
        // Basic Info
        code: 'IE',
        name: 'Ireland',
        
        // Currency
        currency: '€',
        currencyCode: 'EUR',
        currencyName: 'Euro',
        
        // Address
        postcodeLabel: 'Eircode',
        postcodePlaceholder: 'D02 AF30',
        postcodePattern: /^[A-Z]\d{2}\s?[A-Z0-9]{4}$/i,
        postcodeValidationMessage: 'Please enter a valid Eircode (e.g., D02 AF30)',
        countyLabel: 'County',
        countyRequired: true,
        
        // Tax Identification
        taxIdLabel: 'PPS Number',
        taxIdShortLabel: 'PPS',
        taxIdPlaceholder: '1234567AB',
        taxIdPattern: /^\d{7}[A-Z]{1,2}$/i,
        taxIdValidationMessage: 'Please enter a valid PPS number (e.g., 1234567AB)',
        taxIdHelpText: 'Your Personal Public Service number (7 digits followed by 1-2 letters)',
        
        // Tax Rates (Simpler structure)
        taxRates: [
            { value: 'standard', label: 'Standard (20%)', rate: 20 },
            { value: 'marginal', label: 'Marginal (40%)', rate: 40 }
        ],
        cgtRate: 33, // Flat rate
        cgtAllowance: 1270, // €1,270 annual exemption
        corporateTaxRate: 15, // OECD aligned rate
        
        // Regulatory
        regulator: 'Central Bank of Ireland',
        regulatorShort: 'CBI',
        regulatorIdLabel: 'CBI Reference Number',
        taxAuthority: 'Revenue',
        taxAuthorityFull: 'Revenue Commissioners',
        
        // Products
        availableProducts: ['gia', 'aim'],
        showISA: false,
        showJISA: false,
        showSIPP: false,
        showGIA: true,
        showAIM: true,
        
        // ESG (Mandatory for Ireland under MiFID II)
        showESG: true,
        esgRequired: true,
        
        // Terminology
        nonResidentLabel: 'Non-European jurisdiction',
        socialInsurance: 'PRSI',
        pensionSchemes: ['PRSA', 'ARF', 'Personal Pension'],
        
        // Net Worth Bands (Euro)
        netWorthBands: [
            { value: 'under_100k', label: 'Under €100,000' },
            { value: '100k_300k', label: '€100,000 - €300,000' },
            { value: '300k_600k', label: '€300,000 - €600,000' },
            { value: '600k_1m', label: '€600,000 - €1,000,000' },
            { value: '1m_3m', label: '€1,000,000 - €3,000,000' },
            { value: 'over_3m', label: 'Over €3,000,000' }
        ],
        
        // Income Bands (Euro)
        incomeBands: [
            { value: 'under_30k', label: 'Under €30,000' },
            { value: '30k_60k', label: '€30,000 - €60,000' },
            { value: '60k_120k', label: '€60,000 - €120,000' },
            { value: '120k_180k', label: '€120,000 - €180,000' },
            { value: '180k_300k', label: '€180,000 - €300,000' },
            { value: 'over_300k', label: 'Over €300,000' }
        ],
        
        // Tax Disclaimer
        taxDisclaimer: `
            <p><strong>Important Tax Information</strong></p>
            <p>The information provided here is for general guidance purposes only and should not 
            be construed as tax advice. Tax rules are complex and subject to change.</p>
            <p>Your personal circumstances will affect your tax position. We strongly recommend 
            that you seek independent professional tax advice from a qualified tax adviser or 
            accountant before making any investment decisions.</p>
            <p>Evelyn Partners does not provide tax advice. For specific guidance on Irish tax 
            matters, please consult <a href="https://www.revenue.ie" target="_blank">Revenue.ie</a> 
            or a qualified Irish tax adviser.</p>
            <p><strong>By proceeding, you acknowledge that:</strong></p>
            <ul>
                <li>You have read and understood this disclaimer</li>
                <li>You accept responsibility for seeking appropriate tax advice</li>
                <li>The tax information displayed is for illustrative purposes only</li>
            </ul>
        `,
        
        // Footer
        regulatoryFooter: `
            Evelyn Partners Investment Management (Ireland) is authorised and regulated by the 
            Central Bank of Ireland. Registered in Ireland.
        `
    }
};

// Irish Counties List
const IRISH_COUNTIES = [
    'Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin',
    'Galway', 'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim',
    'Limerick', 'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan',
    'Offaly', 'Roscommon', 'Sligo', 'Tipperary', 'Waterford',
    'Westmeath', 'Wexford', 'Wicklow'
];

// UK Counties/Regions List
const UK_COUNTIES = [
    'Avon', 'Bedfordshire', 'Berkshire', 'Buckinghamshire', 'Cambridgeshire',
    'Cheshire', 'Cleveland', 'Cornwall', 'Cumbria', 'Derbyshire', 'Devon',
    'Dorset', 'Durham', 'East Sussex', 'Essex', 'Gloucestershire',
    'Greater London', 'Greater Manchester', 'Hampshire', 'Herefordshire',
    'Hertfordshire', 'Isle of Wight', 'Kent', 'Lancashire', 'Leicestershire',
    'Lincolnshire', 'Merseyside', 'Norfolk', 'North Yorkshire', 'Northamptonshire',
    'Northumberland', 'Nottinghamshire', 'Oxfordshire', 'Rutland', 'Shropshire',
    'Somerset', 'South Yorkshire', 'Staffordshire', 'Suffolk', 'Surrey',
    'Tyne and Wear', 'Warwickshire', 'West Midlands', 'West Sussex',
    'West Yorkshire', 'Wiltshire', 'Worcestershire',
    // Scotland
    'Aberdeenshire', 'Angus', 'Argyll and Bute', 'Clackmannanshire', 'Dumfries and Galloway',
    'Dundee City', 'East Ayrshire', 'East Dunbartonshire', 'East Lothian', 'East Renfrewshire',
    'Edinburgh', 'Falkirk', 'Fife', 'Glasgow City', 'Highland', 'Inverclyde',
    'Midlothian', 'Moray', 'North Ayrshire', 'North Lanarkshire', 'Orkney Islands',
    'Perth and Kinross', 'Renfrewshire', 'Scottish Borders', 'Shetland Islands',
    'South Ayrshire', 'South Lanarkshire', 'Stirling', 'West Dunbartonshire', 'West Lothian',
    // Wales
    'Anglesey', 'Blaenau Gwent', 'Bridgend', 'Caerphilly', 'Cardiff', 'Carmarthenshire',
    'Ceredigion', 'Conwy', 'Denbighshire', 'Flintshire', 'Gwynedd', 'Merthyr Tydfil',
    'Monmouthshire', 'Neath Port Talbot', 'Newport', 'Pembrokeshire', 'Powys',
    'Rhondda Cynon Taf', 'Swansea', 'Torfaen', 'Vale of Glamorgan', 'Wrexham',
    // Northern Ireland
    'Antrim', 'Armagh', 'Down', 'Fermanagh', 'Londonderry', 'Tyrone'
];

// ESG Configuration
const ESG_CONFIG = {
    priorityAreas: [
        { id: 'environmental', label: 'Environmental', description: 'Climate change, renewable energy, pollution reduction, biodiversity' },
        { id: 'social', label: 'Social', description: 'Human rights, labour standards, community impact, diversity & inclusion' },
        { id: 'governance', label: 'Governance', description: 'Board diversity, executive pay, business ethics, transparency' }
    ],
    exclusions: [
        { id: 'tobacco', label: 'Tobacco' },
        { id: 'weapons', label: 'Weapons/Defence' },
        { id: 'gambling', label: 'Gambling' },
        { id: 'fossil_fuels', label: 'Fossil Fuels' },
        { id: 'adult', label: 'Adult Entertainment' },
        { id: 'alcohol', label: 'Alcohol' }
    ],
    allocationOptions: [
        { value: 'none', label: 'No minimum requirement' },
        { value: '25', label: 'At least 25%' },
        { value: '50', label: 'At least 50%' },
        { value: '75', label: 'At least 75%' },
        { value: '100', label: '100% sustainable investments only' }
    ]
};


// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get current jurisdiction from URL or localStorage
 * Priority: URL param > localStorage > default (UK)
 */
function getJurisdiction() {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const urlJurisdiction = urlParams.get('jurisdiction');
    
    if (urlJurisdiction && EVELYN_JURISDICTIONS[urlJurisdiction.toUpperCase()]) {
        // Also store in localStorage for consistency
        localStorage.setItem('evelynJurisdiction', urlJurisdiction.toUpperCase());
        return urlJurisdiction.toUpperCase();
    }
    
    // Check localStorage
    const storedJurisdiction = localStorage.getItem('evelynJurisdiction');
    if (storedJurisdiction && EVELYN_JURISDICTIONS[storedJurisdiction]) {
        return storedJurisdiction;
    }
    
    // Default to UK
    return 'UK';
}

/**
 * Get configuration object for current jurisdiction
 */
function getJurisdictionConfig() {
    return EVELYN_JURISDICTIONS[getJurisdiction()];
}

/**
 * Set jurisdiction and update localStorage
 */
function setJurisdiction(jurisdictionCode) {
    if (EVELYN_JURISDICTIONS[jurisdictionCode]) {
        localStorage.setItem('evelynJurisdiction', jurisdictionCode);
        return true;
    }
    return false;
}

/**
 * Check if a product is available in current jurisdiction
 */
function isProductAvailable(productCode) {
    const config = getJurisdictionConfig();
    return config.availableProducts.includes(productCode.toLowerCase());
}

/**
 * Format currency value for display
 */
function formatCurrency(value, decimals = 0) {
    const config = getJurisdictionConfig();
    const numValue = parseFloat(value) || 0;
    return config.currency + numValue.toLocaleString('en-GB', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

/**
 * Get county options for current jurisdiction
 */
function getCountyOptions() {
    const jurisdiction = getJurisdiction();
    const counties = jurisdiction === 'IE' ? IRISH_COUNTIES : UK_COUNTIES;
    
    return counties.map(county => `<option value="${county}">${county}</option>`).join('');
}

/**
 * Validate postcode/Eircode for current jurisdiction
 */
function validatePostcode(value) {
    const config = getJurisdictionConfig();
    const cleanValue = value.replace(/\s/g, '').toUpperCase();
    return config.postcodePattern.test(cleanValue);
}

/**
 * Validate tax ID (NI Number/PPS Number) for current jurisdiction
 */
function validateTaxId(value) {
    const config = getJurisdictionConfig();
    const cleanValue = value.replace(/\s/g, '').toUpperCase();
    return config.taxIdPattern.test(cleanValue);
}

/**
 * Get net worth band options HTML for current jurisdiction
 */
function getNetWorthOptions() {
    const config = getJurisdictionConfig();
    return config.netWorthBands.map(band => 
        `<option value="${band.value}">${band.label}</option>`
    ).join('');
}

/**
 * Get income band options HTML for current jurisdiction
 */
function getIncomeBandOptions() {
    const config = getJurisdictionConfig();
    return config.incomeBands.map(band => 
        `<option value="${band.value}">${band.label}</option>`
    ).join('');
}

/**
 * Get tax rate options HTML for current jurisdiction
 */
function getTaxRateOptions() {
    const config = getJurisdictionConfig();
    return config.taxRates.map(rate => 
        `<option value="${rate.value}">${rate.label}</option>`
    ).join('');
}

/**
 * Append jurisdiction to URL
 */
function appendJurisdictionToUrl(url) {
    const jurisdiction = getJurisdiction();
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}jurisdiction=${jurisdiction}`;
}

/**
 * Initialize jurisdiction-aware module
 * Call this on DOMContentLoaded for each module
 */
function initializeJurisdiction() {
    const config = getJurisdictionConfig();
    console.log(`[Evelyn] Initialized with jurisdiction: ${config.name} (${config.code})`);
    
    // Update all currency symbols
    document.querySelectorAll('.currency-symbol, .currency-prefix').forEach(el => {
        el.textContent = config.currency;
    });
    
    // Update all navigation links to include jurisdiction
    document.querySelectorAll('a[href*=".html"]').forEach(link => {
        if (!link.href.includes('jurisdiction=')) {
            link.href = appendJurisdictionToUrl(link.href);
        }
    });
    
    return config;
}


// ============================================================================
// MODULE EXPORTS (for use in modules)
// ============================================================================

// Make available globally
window.EvelynJurisdiction = {
    JURISDICTIONS: EVELYN_JURISDICTIONS,
    IRISH_COUNTIES: IRISH_COUNTIES,
    UK_COUNTIES: UK_COUNTIES,
    ESG_CONFIG: ESG_CONFIG,
    getJurisdiction: getJurisdiction,
    getConfig: getJurisdictionConfig,
    setJurisdiction: setJurisdiction,
    isProductAvailable: isProductAvailable,
    formatCurrency: formatCurrency,
    getCountyOptions: getCountyOptions,
    validatePostcode: validatePostcode,
    validateTaxId: validateTaxId,
    getNetWorthOptions: getNetWorthOptions,
    getIncomeBandOptions: getIncomeBandOptions,
    getTaxRateOptions: getTaxRateOptions,
    appendJurisdictionToUrl: appendJurisdictionToUrl,
    initialize: initializeJurisdiction
};

console.log('[Evelyn] Jurisdiction configuration loaded');
