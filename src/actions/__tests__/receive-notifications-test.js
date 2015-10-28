import {
    RECEIVE_NEW_NOTIFICATIONS,
    DISMISS_NOTIFICATION,
    dismissNotification,
    receiveNotifications
} from '../receive-notifications'

describe('receive-notifications', () => {
    it('actionType should be strings', () => {
        expect(RECEIVE_NEW_NOTIFICATIONS).to.be.a('string').and.equal('RECEIVE_NEW_NOTIFICATIONS');
        expect(DISMISS_NOTIFICATION).to.be.a('string').and.equal('DISMISS_NOTIFICATION');
    } )
    describe('receiveNotifications', () => {
        it('should be a function', () => {
            expect(receiveNotifications).to.be.a('function');
        });
        it('should return an object with a type and a payload property containing an object', () => {
            const NOTIFS = [{content: 'lopez'}, {content: 'lopezz'}];
            const receiveNotificationsResult = receiveNotifications(NOTIFS);

            expect(receiveNotificationsResult)
            .to.be.an('object');

            expect(receiveNotificationsResult)
            .to.have.ownProperty('type')
            .and.to.have.ownProperty('payload')

            expect(receiveNotificationsResult.type).to.equal(RECEIVE_NEW_NOTIFICATIONS);
            expect(receiveNotificationsResult.payload).to.deep.equal(NOTIFS);
        });
    });
    describe('dismissNotification', () => {
        it('should be a function', () => {
            expect(dismissNotification).to.be.a('function');
        });
        it('should return an object with a type and a payload property containing an object', () => {
            const NOTIF_ID = 12345;
            const dismissNotificationResult = dismissNotification(NOTIF_ID);

            expect(dismissNotificationResult)
            .to.be.an('object');

            expect(dismissNotificationResult)
            .to.have.ownProperty('type')
            .and.to.have.ownProperty('payload')

            expect(dismissNotificationResult.type).to.equal(DISMISS_NOTIFICATION);
            expect(dismissNotificationResult.payload).to.deep.equal(NOTIF_ID);
        });
    });
});
