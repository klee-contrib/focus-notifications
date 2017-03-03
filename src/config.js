
const DEFAULT_CONF = {
    rootURL: 'http://localhost:9999/x/notification',
    notificationURL: 'notifications',
    translateDate: undefined,
    translateText: undefined,
    useCredentials: false
};

//Default config on port 9999
let conf = {...DEFAULT_CONF};

export function extendConfig(newConf) {
    conf = {...conf, ...newConf};
    console.info('NOTIFICATIONS = extends configuration', conf);
    return conf;
}

export function getConfig() {
    return conf;
}

export default conf;
