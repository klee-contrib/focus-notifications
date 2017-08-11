import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import createStore from './store/create';
import NotificationCenter from './component/notification-center';
import { extendConfig, getConfig } from './config';
import DevTools from './container/dev-tools';

//Import sass files
import './style';

const isDev = __DEV__;
const notificationStore = createStore();

/**
 * Render notification center in dev mode.
 * @param {object} props props.
 * @returns {JsxElement} element.
 */
function NotificationCenterDev({ iconName, onSingleClick, store, panelFooter, panelHeader }) {
    return (
        <Provider store={store}>
            <div>
                <NotificationCenter
                    iconName={iconName}
                    hasAddNotif={false}
                    onSingleClick={onSingleClick}
                    panelHeader={panelHeader}
                    panelFooter={panelFooter}
                />
                <DevTools />
            </div>
        </Provider>
    );
}
NotificationCenterDev.displayName = 'NotificationCenterDev';
NotificationCenterDev.propTypes = {
    iconName: PropTypes.string.isRequired,
    onSingleClick: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired,
    panelFooter: PropTypes.element,
    panelHeader: PropTypes.element
};
NotificationCenterDev.defaultProps = {
    panelFooter: undefined,
    panelHeader: undefined
};

/**
 * Render notification center in production mode.
 * @param {object} props props.
 * @returns {JsxElement} element.
 */
function NotificationCenterProd({ iconName, onSingleClick, store, panelFooter, panelHeader }) {
    return (
        <Provider store={store}>
            <NotificationCenter
                iconName={iconName}
                hasAddNotif={false}
                onSingleClick={onSingleClick}
                panelHeader={panelHeader}
                panelFooter={panelFooter}
            />
        </Provider>
    );
}
NotificationCenterProd.displayName = 'NotificationCenterProd';
NotificationCenterProd.propTypes = {
    iconName: PropTypes.string.isRequired,
    onSingleClick: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired,
    panelFooter: PropTypes.element,
    panelHeader: PropTypes.element
};
NotificationCenterProd.defaultProps = {
    panelFooter: undefined,
    panelHeader: undefined
};


/**
 * Render notification center.
 * @param {object} props props.
 * @returns {JsxElement} element.
 */
class SmartNotificationCenter extends Component {

    static displayName = 'SmartNotificationCenter';

    static propTypes = {
        config: PropTypes.object.isRequired,
        iconName: PropTypes.string.isRequired,
        onSingleClick: PropTypes.func.isRequired,
        store: PropTypes.object.isRequired,
        panelFooter: PropTypes.element,
        panelHeader: PropTypes.element
    };

    static defaultProps = {
        panelFooter: undefined,
        panelHeader: undefined
    };

    /** @inheritdoc */
    componentWillMount() {
        const { config } = this.props;
        extendConfig(config);

        const { translateText, translateDate } = getConfig();
        if (!translateText) {
            console.error('please define a text translation function. ex: translateText: (text) => i18next.t(text)');
        }
        if (!translateDate) {
            console.error('please define a date formatter function. ex: translateDate: (date) => moment(date).forNow()');
        }
    }

    /** @inheritdoc */
    render() {
        const { iconName, onSingleClick, panelFooter, panelHeader } = this.props;
        const NotificationCenterComponent = isDev ? NotificationCenterDev : NotificationCenterProd;

        return (
            <NotificationCenterComponent
                iconName={iconName}
                onSingleClick={onSingleClick}
                store={notificationStore}
                panelHeader={panelHeader}
                panelFooter={panelFooter}
            />
        );
    }
}

export default SmartNotificationCenter;
