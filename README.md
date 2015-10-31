# focus-notification

This repository stands for the **Notification center** of FOCUS. It needs an **API** in order to be functionnal.

## Notification model

- `uuid` the notification's identifier
- `title` the notification's title (text)
- `content` the notification's content (raw text)
- `creationDate` the notification's creation date
- `type` the notification's type, it's up to you but it can be an external application or your own application module.
- `sender` who send the notification (not displayed for now)
- `targetUrl` where will the notification root the usen on a click on it
- `icon` icon of the notification displayed

## API

The notification center will need an API to be able to work.

- **GET** `notifications/` will try to load all the notifications from the server
- **DELETE** `notifications/{uuid}` where `uuid` is the identifier of the notification to concider **READ**
- **DELETE** `notifications` where the `ids` to delete are given as body part of the request.


## How to start using it

The notification center is really easy to plug in you own application.
- install it: `npm i -S focus-notifications`
- use it using on of the two two options:
  - **browser**:
    - use the file from `node_modules/focus-notifications/dist/focus-notifications.js`
    - ``FocusNotifications` will be available in the `window`
  - **webpack** or **browserify** and then you can use:
    - a simple `import FocusNotifications from 'focus-notifications'`
    - or a `const FocusNotifications = require('focus-notifications')`
  - then use it with `<FocusNotifications />` (it will import all the notification center and display the icon)

 ```jsx
 ReactDOM.render(
        <Layout barContentRight={NotificationCenter} />,
        document.querySelector('application')
 );
 ```

## Customization

- `pollingTimer` the duration between two refresh
- `dismissTimerDuration` the duration between the display and the dismiss of the notification received without the notification center being open.

## Fake server to try it without implementing your own API.
