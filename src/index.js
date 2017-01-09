import React , { Component , PropTypes }from 'react';
import { Provider } from 'react-redux';
import createStore from './store/create';
import NotificationCenter from './component/notification-center';
import {extendConfig} from './config';
import DevTools from './container/dev-tools';
import metadata from '../package.json';

//Import sass files
import './style';

const notificationStore = createStore();


function NotificationCenterDev({onSingleClick, store}){
  return <Provider store={store}><div><NotificationCenter hasAddNotif={false} onSingleClick={onSingleClick} /><DevTools/></div></Provider>;
}
NotificationCenterDev.displayName = 'NotificationCenterDev';

function NotificationCenterProd({onSingleClick, store}){
  return <Provider store={store}><NotificationCenter hasAddNotif={false} onSingleClick={onSingleClick} /></Provider>;
}
NotificationCenterProd.displayName = 'NotificationCenterProd';

class SmartNotificationCenter extends Component {
    componentWillMount() {
        const {config} = this.props;
        console.log('SMART PROPS',this.props)
        extendConfig(config);
    }
    render() {
        const NotificationCenterComponent =  !__DEV__ ?  NotificationCenterProd : NotificationCenterDev;
        return <NotificationCenterComponent onSingleClick={this.props.onSingleClick} store={notificationStore} />
    }
}
SmartNotificationCenter.displayName = SmartNotificationCenter;
SmartNotificationCenter.propTypes = {
    config: PropTypes.object
};
SmartNotificationCenter.VERSION = metadata.version;
export default SmartNotificationCenter;
export const VERSION = metadata.version;
