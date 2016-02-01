const DEFAULT_CONF = {
    rootURL: 'http://localhost:9999',
    notificationURL: 'notifications',
    useCredentials: false,
    i18n:{
      lastWeek: 'Last Week',
      today: 'Today',
      month: 'Last month',
      before: 'Avant'
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
