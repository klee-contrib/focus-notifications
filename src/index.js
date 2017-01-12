import React , { Component , PropTypes }from 'react';
import { Provider } from 'react-redux';
import createStore from './store/create';
import NotificationCenter from './component/notification-center';
import {extendConfig} from './config';
import DevTools from './container/dev-tools';

//Import sass files
import './style';

const isDev = __DEV__;
const notificationStore = createStore();


function NotificationCenterDev({onSingleClick, store}){
    return (
        <Provider store={store}>
            <div>
                <NotificationCenter hasAddNotif={false} onSingleClick={onSingleClick} />
                <DevTools/>
            </div>
        </Provider>
    );
}
NotificationCenterDev.displayName = 'NotificationCenterDev';



function NotificationCenterProd({onSingleClick, store}) {
    return (
        <Provider store={store}>
            <NotificationCenter hasAddNotif={false} onSingleClick={onSingleClick} />
        </Provider>
    );
}
NotificationCenterProd.displayName = 'NotificationCenterProd';



class SmartNotificationCenter extends Component {
    componentWillMount() {
        const {config} = this.props;
        extendConfig(config);
    }
    render() {
        const NotificationCenterComponent = isDev ? NotificationCenterDev : NotificationCenterProd;
        return <NotificationCenterComponent onSingleClick={this.props.onSingleClick} store={notificationStore} />
    }
}
SmartNotificationCenter.displayName = SmartNotificationCenter;
SmartNotificationCenter.propTypes = {
    config: PropTypes.object
};
export default SmartNotificationCenter;
