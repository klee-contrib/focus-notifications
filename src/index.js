import React , { Component , PropTypes }from 'react';
import { Provider } from 'react-redux';
import createStore from './store/create';
import NotificationCenter from './component/notification-center';
import {extendConfig} from './config';
import metadata from '../package.json';
//Import sass files
import './component/style';

const store = createStore();

class SmartNotificationCenter extends Component {
    componentWillMount() {
        const {config} = this.props;
        console.log('SMART PROPS',this.props)
        extendConfig(config);
    }
    render() {
        return <Provider store={store}><NotificationCenter hasAddNotif={false} onSingleClick={this.props.onSingleClick} /></Provider>
    }
}
SmartNotificationCenter.displayName = SmartNotificationCenter;
SmartNotificationCenter.propTypes = {
    config: PropTypes.object
};
SmartNotificationCenter.VERSION = metadata.version;
export default SmartNotificationCenter;
export const VERSION = metadata.version;
