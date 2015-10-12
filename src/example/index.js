import React from 'react';
import ReactDOM from 'react-dom';
import NotificationList from '../component/notification-list';


console.log('Exemple Notification center');

const mockNotifs = [
    {title: 'TITRE', content: 'CONTENT ...', date: new Date().toISOString(), type: 'info', author: 'joe.lopez@gmail.com'},
    {title: 'TITRE 2', content: 'CONTENT 2 ...', date: new Date().toISOString(), type: 'info', author: 'david.lopez@gmail.com'},
    {title: 'TITRE 3', content: 'CONTENT 3 ...', date: new Date().toISOString(), type: 'info', author: 'joe.lopez@gmail.com'}
];

document.addEventListener('DOMContentLoaded', (event) => {
    ReactDOM.render(<NotificationList data={mockNotifs}/>, document.getElementById('root'));
});
