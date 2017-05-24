import React , { Component , PropTypes }from 'react';
import { Provider } from 'react-redux';
import createStore from './store/create';
import NotificationCenter from './component/notification-center';
import {extendConfig, getConfig} from './config';
import DevTools from './container/dev-tools';

//Import sass files
import './style';

const isDev = __DEV__;
const notificationStore = createStore();

function NotificationCenterDev({iconName, onSingleClick, store, panelFooter, panelHeader}) {
    return (
        <Provider store={store}>
            <div>
                <NotificationCenter iconName={iconName} hasAddNotif={false} onSingleClick={onSingleClick} panelHeader={panelHeader} panelFooter={panelFooter}/>
                <DevTools/>
            </div>
        </Provider>
    );
}
NotificationCenterDev.displayName = 'NotificationCenterDev';



function NotificationCenterProd({iconName, onSingleClick, store, panelFooter, panelHeader}) {
    return (
        <Provider store={store}>
            <NotificationCenter iconName={iconName} hasAddNotif={false} onSingleClick={onSingleClick} panelHeader={panelHeader} panelFooter={panelFooter} />
        </Provider>
    );
}
NotificationCenterProd.displayName = 'NotificationCenterProd';



class SmartNotificationCenter extends Component {
    componentWillMount() {
        const {config} = this.props;
        extendConfig(config);
        const {translateText, translateDate} = getConfig();
        if(!translateText) {
            console.error('please define a text translation function. ex: translateText: (text) => i18next.t(text)');
        }
        if(!translateDate) {
            console.error('please define a date formatter function. ex: translateDate: (date) => moment(date).forNow()');
        }
    }
    render() {
        const {iconName, panelFooter, panelHeader} = this.props;
        const NotificationCenterComponent = isDev ? NotificationCenterDev : NotificationCenterProd;
        return <NotificationCenterComponent iconName={iconName} onSingleClick={this.props.onSingleClick} store={notificationStore} panelHeader={panelHeader} panelFooter={panelFooter}/>
    }
}
SmartNotificationCenter.displayName = 'SmartNotificationCenter';
SmartNotificationCenter.propTypes = {
    config: PropTypes.object,
    iconName: PropTypes.string
};
export default SmartNotificationCenter;
