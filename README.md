# focus-notification

This repository stands for the **Notification center** of FOCUS. It needs an **API** in order to be functionnal.

## First see it in action

> Be indulgent the notification center has not been designed by a graphist and a style work will be performed for the next release. The goal of the first release was to have a functional component with an almost stable API for both back-end API and component API.

### Icon with counter
![icon](https://cloud.githubusercontent.com/assets/286966/10824086/468f4b60-7e5f-11e5-88c8-889d0bf2c7ce.png)

## The notification receiver
![receiver](https://cloud.githubusercontent.com/assets/286966/10824216/d5b68cf4-7e5f-11e5-972d-9a2cdb634ffa.png)

### Notifications Panel

### Display the date
![panel with date](https://cloud.githubusercontent.com/assets/286966/10824106/5712a27a-7e5f-11e5-8447-7ff85e743c01.png)
### On hover the action is displayed
![panel with hover](https://cloud.githubusercontent.com/assets/286966/10824174/9b1b7a50-7e5f-11e5-916d-3bb49e674274.png)


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
    - `FocusNotifications` will be available in the `window`
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

## How does it work under the hood ?

### Components structure


```ascii
 +-- ConnectedNotificationCenter
 |   +-- NotificationCenter
 |   |   //The stateless notification center component
 |   |   +-- NotificationCenterIcon
 |   |   // The icon with a counter to display in your application bar
 |   |   +-- NotificationCenterReceiver
 |   |   // The receiver is in charge of displaying the new notifications when the panel is cloed and display them for a small amout of time (`dismissTimerDuration`)
 |   |   |   +-- NotificationReceived
 |   |   |   // The notification received is displayed by the notification receiver for (`dismissTimerDuration`)
 |   |   +-- NotificationCenterPanel
 |   |   |   // The panel which is displayed when the use clicks on the notification center icon
 |   |   |  // It is composed of sevral groups of notifications each with a title and a list (by default grouped by time period)
 |   |     +-- NotificationAdd
 |   |     | // A simple add component in order to add notification in the panel (not displayed by defaults)
 |   |     +-- NotificationGroup
 |   |     | // A group of notification is composed of a list and a title
 |   |     |   +-- NotificationGroupTitle
 |   |     |   // The title of the group
 |   |     |   +-- NotificationList
 |   |     |   // The list of notifications in the group²
 |   |     |   +-- Notification
 |   |     |   // The uniq notification (see model for more information)(icon | title + content | date or read action on hover)
 +--
 ```

## State

The **NOTIFICATION CENTER** _state_ can be representing as follows.
It mixes ui state and data state.
All the components are stateless and connected direcled to part of the store.

```js
{
     isFetching, // Is the notification center fetching data
     isOpen, // Is the panel open
     notificationReceiver: { // State of the receiver
         hasFetchedOnce // Has the notifications benn fetched once
         notificationsReceived // An object containing all the notifications.
                               // Marked with `displayed: true` when displayed.
     },
     notificationList, // An array containing all the raw notifications
     visibilityFilter, // Which filter is activated (by default date)
 }
```


## Customization

The `NotificationCenter` can be customized with the following props:
- `apiRootURL`
- `notificationURL` the notification part of the URL, by default it is `${apiRootURL}/notifications`
- `pollingTimer` the duration between two refresh
- `dismissTimerDuration` the duration between the display and the dismiss of the notification received without the notification center being open.

## Launch the example
In order to launch the example you just have to clone this repository and perform an `npm install` then `npm run start` and the example shoud be available on `localhost:3000` with hot reload. If you need an **API** please read the next section.

## Launch a fake server to try it without implementing your own API.

In order to launch the mocked API you just have to clone this repository and perform an `npm install` then `npm run api` and your **API** shoud be available on `localhost:9999`.

> Thanks for using the module, don't hesitate to report any bug or open an issue if you have a question.
