import {
    RECEIVE_NEW_NOTIFICATIONS,
    receiveNotifications
} from '../receive-notifications'

describe('receive-notifications', () => {
    it('actionType should be strings', () => {
        expect(RECEIVE_NEW_NOTIFICATIONS).to.be.a('string');

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
});
