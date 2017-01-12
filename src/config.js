const DEFAULT_CONF = {
    rootURL: 'http://localhost:9999',
    notificationURL: 'notifications',
    useCredentials: false,
    //Translations
    translateDate: undefined,
    locale: 'en',
    i18n: {
        center: 'Notifications',
        '3_before': 'Before',
        '1_lastWeek': 'Last Week',
        '2_lastMonth': 'Last month',
        '0_today': 'Today'
    }
};

//Default config on port 9999
let conf = {...DEFAULT_CONF};


export function extendConfig(newConf) {
    conf = {...conf, ...newConf};
    console.info('new conf', conf);
    return conf;
}

export function getConfig() {
    return conf;
}

export default conf;
