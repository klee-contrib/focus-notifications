import React , { Component , PropTypes }from 'react';
import { Provider } from 'react-redux';
import createStore from './store/create';
import NotificationCenter from './component/notification-center';
import {extendConfig, getConfig} from './config';
import DevTools from './container/dev-tools';
import moment from 'moment';

//Import sass files
import './style';

const isDev = __DEV__;
const notificationStore = createStore();

function NotificationCenterDev({iconName, onSingleClick, store}){
    return (
        <Provider store={store}>
            <div>
                <NotificationCenter iconName={iconName} hasAddNotif={false} onSingleClick={onSingleClick} />
                <DevTools/>
            </div>
        </Provider>
    );
}
NotificationCenterDev.displayName = 'NotificationCenterDev';



function NotificationCenterProd({iconName, onSingleClick, store}) {
    return (
        <Provider store={store}>
            <NotificationCenter iconName={iconName} hasAddNotif={false} onSingleClick={onSingleClick} />
        </Provider>
    );
}
NotificationCenterProd.displayName = 'NotificationCenterProd';



class SmartNotificationCenter extends Component {
    componentWillMount() {
        const {config} = this.props;
        extendConfig(config);
        const {locale} = getConfig();
        moment.locale(locale);
    }
    render() {
        const {iconName} = this.props;
        const NotificationCenterComponent = isDev ? NotificationCenterDev : NotificationCenterProd;
        return <NotificationCenterComponent iconName={iconName} onSingleClick={this.props.onSingleClick} store={notificationStore} />
    }
}
SmartNotificationCenter.displayName = SmartNotificationCenter;
SmartNotificationCenter.propTypes = {
    config: PropTypes.object,
    iconName: PropTypes.string
};
export default SmartNotificationCenter;
