import React from 'react';
import ReactDOM from 'react-dom';
import SmartNotificationCenter from '../';

import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'material-design-lite/material.css';
import 'material-design-lite/material.min';

import moment from 'moment';
import i18next from 'i18next';
import resource from '../translation/resources/fr-FR';

i18next.init({
    lng: 'fr-FR',
    resources: {
        ['fr-FR'] : {
            translation: resource
        }
    }
}, (err, t) => {
    console.info('[FOCUS-APPLICATION] Translation initialized !');
});
moment.locale('fr');

const configuration = {
    translateDate: (date) => moment(date).fromNow(),
    translateText: (key) => i18next.t(key)
};

// Create the react component when the DOM is loaded.
document.addEventListener('DOMContentLoaded', (event) => {

    const rootElement = document.querySelector(`.${__ANCHOR_CLASS__}`);
    // The child must be wrapped in a function
    // to work around an issue in React 0.13.
    ReactDOM.render(
        <div className='mdl-layout  mdl-layout--fixed-header'>
            <header className='mdl-layout__header'>
                <div className='mdl-layout__header-row'>
                    <span className='mdl-layout-title'>Title</span>
                    <div className='mdl-layout-spacer'></div>
                    <nav className='mdl-navigation mdl-layout--large-screen-only'>
                        <a className='mdl-navigation__link' href=''>Link</a>
                        <a className='mdl-navigation__link' href=''>Link</a>
                        <a className='mdl-navigation__link' href=''>Link</a>
                        <SmartNotificationCenter config={configuration} onSingleClick={url => console.log('navigate', url)} />
                    </nav>

                </div>
            </header>
            <div className='mdl-layout__drawer'>
                <span className='mdl-layout-title'>Notification Center</span>
                <nav className='mdl-navigation'>
                    <a className='mdl-navigation__link' href=''>Link</a>
                    <a className='mdl-navigation__link' href=''>Link</a>
                    <a className='mdl-navigation__link' href=''>Link</a>
                    <a className='mdl-navigation__link' href=''>Link</a>
                </nav>
            </div>
            <main className='mdl-layout__content'>
                <div className='page-content'>APPLICATION CONTENT</div>
            </main>
        </div>,
        rootElement
    );
});
