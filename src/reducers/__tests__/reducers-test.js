import notificationReducers from '../'
import notificationListReducer from '../notifications-list';
import visibilityFilterReducer from '../visibility-filter';
import isFetchingReducer from '../is-fetching';
import isOpenReducer from '../is-open';
import { ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION,READ_NOTIFICATION_GROUP, SET_VISIBILITY_FILTER, OPEN_CENTER, CLOSE_CENTER } from '../../actions';
import { REQUEST_NOTIFICATIONS, RECEIVE_NOTIFICATIONS } from '../../actions/fetch-notifications'
import generateError from '../util/error-generator';
const INITAL_ARRAY_STATE = [{content: 'LOPEZ JOE', uuid: '1'}];
describe('reducers', () => {
    it('should be a function', () => {
        expect(notificationReducers).to.be.a('function');
    });
    describe('notificationListReducer', () => {
        const REDUCER_NAME = 'NOTIFICATION_LIST';
        it('should be a function', () => {
            expect(notificationListReducer).to.be.a('function');
        });
        it('should return an empty array when the state is undefined', () => {
            expect(notificationListReducer()).to.be.an('array');
        });
        it('should return the initial array state when called without action', () => {
            expect(notificationListReducer(INITAL_ARRAY_STATE))
            .to.be.an('array')
            .and.equal(INITAL_ARRAY_STATE);
        });
        it('should return the initial state when the action is unkown', () => {
            expect(notificationListReducer(INITAL_ARRAY_STATE, {type: 'unknown'}))
            .to.be.an('array')
            .and.equal(INITAL_ARRAY_STATE);
        });
        describe('when it receive an ADD_NOTIFICATION action ', () => {
            it('should throw an error when the payload is not an object', () => {
                const NEW_NOTIF = {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'};
                const reducerCaller = (payload) => notificationListReducer(INITAL_ARRAY_STATE, {type: ADD_NOTIFICATION, payload});
                expect(() => reducerCaller(3)).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATION', payload: 3}, expectedType: 'object'}));
                expect(() => reducerCaller('ABCD')).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATION', payload: 'ABCD'}, expectedType: 'object'}));
            });
            it('should add the notification given ad add the read property', () => {
                const NEW_NOTIF = {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'};
                const reducerCall = notificationListReducer(INITAL_ARRAY_STATE, {type: ADD_NOTIFICATION, payload: NEW_NOTIF});
                expect(reducerCall).to.be.an('array');
                // it should add the read attribute
                expect(reducerCall).to.include({...NEW_NOTIF, read: false});
            });
        });
        describe('when it receive an ADD_NOTIFICATIONS action ', () => {
            it('should throw an error when the payload is not an array', () => {
                const NEW_NOTIF = {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'};
                const reducerCaller = (payload) => notificationListReducer(INITAL_ARRAY_STATE, {type: ADD_NOTIFICATIONS, payload});
                expect(() => reducerCaller(3)).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATIONS', payload: 3}, expectedType: 'array'}));
                expect(() => reducerCaller('ABCD')).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATIONS', payload: 'ABCD'}, expectedType: 'array'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATIONS', payload: {a: 'a'}}, expectedType: 'array'}));
            });
            it('should add the notification given ad add the read property', () => {
                const NEW_NOTIFS = [
                    {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'},
                    {content: 'new super notification2', author: 'rodrigo2', targetURL: 'http://test2.com'}
                ];
                const reducerCall = notificationListReducer(INITAL_ARRAY_STATE, {type: ADD_NOTIFICATIONS, payload: NEW_NOTIFS});
                expect(reducerCall)
                .to.be.an('array')
                .and.have.length.of(3)
                .and.include({...NEW_NOTIFS[0], read: false})
                .and.include({...NEW_NOTIFS[1], read: false});
            });
        });
        describe('when it receive an RECEIVE_NOTIFICATIONS action ', () => {
            it('should throw an error when the payload is not an array', () => {
                const NEW_NOTIF = {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'};
                const reducerCaller = (payload) => notificationListReducer(INITAL_ARRAY_STATE, {type: RECEIVE_NOTIFICATIONS, payload});
                expect(() => reducerCaller(3)).to.throw(generateError({name: REDUCER_NAME, action: {type: 'RECEIVE_NOTIFICATIONS', payload: 3}, expectedType: 'array'}));
                expect(() => reducerCaller('ABCD')).to.throw(generateError({name: REDUCER_NAME, action: {type: 'RECEIVE_NOTIFICATIONS', payload: 'ABCD'}, expectedType: 'array'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: 'RECEIVE_NOTIFICATIONS', payload: {a: 'a'}}, expectedType: 'array'}));
            });
            it('should add the notification given ad add the read property', () => {
                const NEW_NOTIFS = [
                    {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'},
                    {content: 'new super notification2', author: 'rodrigo2', targetURL: 'http://test2.com'}
                ];
                const reducerCall = notificationListReducer(INITAL_ARRAY_STATE, {type: RECEIVE_NOTIFICATIONS, payload: NEW_NOTIFS});
                expect(reducerCall)
                .to.be.an('array')
                .and.have.length.of(3)
                .and.include({...NEW_NOTIFS[0], read: false})
                .and.include({...NEW_NOTIFS[1], read: false});
            });
        });
        describe('when it receives an READ_NOTIFICATION action', () => {
            const INITIAL_UNREAD_NOTIFS = [
                {uuid: '1', read: false},
                {uuid: '2', read: false},
                {uuid: '3', read: true}
            ];
            it('should throw an error when the payload is not an string or a number', () => {
                const reducerCaller = (payload) => notificationListReducer(INITIAL_UNREAD_NOTIFS, {type: READ_NOTIFICATION, payload});
                expect(() => reducerCaller('3')).to.not.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION, payload: '3'}, expectedType: 'string|number'}));
                expect(() => reducerCaller(3)).to.not.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION, payload: 3}, expectedType: 'string|number'}));
                expect(() => reducerCaller([3])).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION, payload: [3]}, expectedType: 'string|number'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION, payload: {a: 'a'}}, expectedType: 'string|number'}));
            });
            it('should add mark the notification given as id as read', () => {
                const reducerCall = notificationListReducer(INITIAL_UNREAD_NOTIFS, {type: READ_NOTIFICATION, payload: '1'});
                expect(reducerCall)
                .to.be.an('array')
                .and.have.length.of(3)
                .and.include({...INITIAL_UNREAD_NOTIFS[0], read: true})
                .and.include(INITIAL_UNREAD_NOTIFS[1])
                .and.include(INITIAL_UNREAD_NOTIFS[2]);
            });
            it('should do nothing when the uuid provided in the action is unknown', () => {
                const reducerCall = notificationListReducer(INITIAL_UNREAD_NOTIFS, {type: READ_NOTIFICATION, payload: 'UNKNOWN_UUID'});
                expect(reducerCall)
                .to.be.an('array')
                .and.have.length.of(3)
                .and.equal(INITIAL_UNREAD_NOTIFS);
            });
        });
        describe('when it receives an READ_NOTIFICATION_GROUP action', () => {
            const INITIAL_UNREAD_NOTIFS = [
                {uuid: '0', read: false},
                {uuid: '1', read: false},
                {uuid: '2', read: false},
                {uuid: '3', read: true},
                {uuid: '4', read: false}
            ];
            it('should throw an error when the payload is not an array', () => {
                const reducerCaller = (payload) => notificationListReducer(INITIAL_UNREAD_NOTIFS, {type: READ_NOTIFICATION_GROUP, payload});
                expect(() => reducerCaller('3')).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION_GROUP, payload: '3'}, expectedType: 'array'}));
                expect(() => reducerCaller(3)).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION_GROUP, payload: 3}, expectedType: 'array'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION_GROUP, payload: {a: 'a'}}, expectedType: 'array'}));
                expect(() => reducerCaller([3, 4, 5])).not.to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION_GROUP, payload: [3]}, expectedType: 'array'}));
            });
            it('should add mark all the notifications given as ids as read', () => {
                const reducerCall = notificationListReducer(INITIAL_UNREAD_NOTIFS, {type: READ_NOTIFICATION_GROUP, payload: ['1', '2']});
                expect(reducerCall)
                .to.be.an('array')
                .and.have.length.of(5)
                .and.include(INITIAL_UNREAD_NOTIFS[0])
                .and.include({...INITIAL_UNREAD_NOTIFS[1], read: true})
                .and.include({...INITIAL_UNREAD_NOTIFS[2], read: true})
                .and.include(INITIAL_UNREAD_NOTIFS[3])
                .and.include(INITIAL_UNREAD_NOTIFS[4]);
            });
            it('should do nothing when the uuids provided in the action are unknown', () => {
                const reducerCall = notificationListReducer(INITIAL_UNREAD_NOTIFS, {type: READ_NOTIFICATION_GROUP, payload: ['UNKNOWN_UUID']});
                expect(reducerCall)
                .to.be.an('array')
                .and.have.length.of(5)
                .and.deep.equal(INITIAL_UNREAD_NOTIFS); //Deep equal is necessary because there is a reduce.
            });
        })
    });

    describe.skip('visibilityFilterReducer', () => {

    });
    describe('isFetchingReducer', () => {

        describe('when it receive an UNKNOWN action ', () => {
            it('should return false or the initial state', () => {

                expect(isFetchingReducer())
                .to.be.a('boolean')
                .and.equal(false);

                expect(isFetchingReducer(true))
                .to.be.a('boolean')
                .and.equal(true);
            });
        });

        describe('when it receive an REQUEST_NOTIFICATIONS action ', () => {
            it('should return true when initial state was true', () => {
                expect(isFetchingReducer(true, {type: REQUEST_NOTIFICATIONS}))
                .to.be.a('boolean')
                .and.equal(true);
            });

            it('should return true when initial state was false', () => {
                expect(isFetchingReducer(false, {type: REQUEST_NOTIFICATIONS}))
                .to.be.a('boolean')
                .and.equal(true);
            });
        });

        describe('when it receive an RECEIVE_NOTIFICATIONS action ', () => {

            it('should return false when initial state was true', () => {
                expect(isFetchingReducer(true, {type: RECEIVE_NOTIFICATIONS}))
                .to.be.a('boolean')
                .and.equal(false);
            });

            it('should return false when initial state was fasle', () => {
                expect(isFetchingReducer(false, {type: RECEIVE_NOTIFICATIONS}))
                .to.be.a('boolean')
                .and.equal(false);
            });
        });

    });
    //isOpenReducer
    describe('isOpenReducer', () => {
        it('should be a function', () => {
            expect(isOpenReducer).to.be.a('function');
        });
        describe('when it receive an UNKNOWN action ', () => {
            it('should return false or the initial state', () => {

                expect(isOpenReducer())
                .to.be.a('boolean')
                .and.equal(false);

                expect(isOpenReducer(true))
                .to.be.a('boolean')
                .and.equal(true);
            });
        });

        describe('when it receive an OPEN_CENTER action ', () => {
            it('should return true when initial state was true', () => {
                expect(isOpenReducer(true, {type: OPEN_CENTER}))
                .to.be.a('boolean')
                .and.equal(true);
            });

            it('should return true when initial state was false', () => {
                expect(isOpenReducer(false, {type: OPEN_CENTER}))
                .to.be.a('boolean')
                .and.equal(true);
            });
        });

        describe('when it receive an CLOSE_CENTER action ', () => {

            it('should return false when initial state was true', () => {
                expect(isOpenReducer(true, {type: CLOSE_CENTER}))
                .to.be.a('boolean')
                .and.equal(false);
            });

            it('should return false when initial state was fasle', () => {
                expect(isOpenReducer(false, {type: CLOSE_CENTER}))
                .to.be.a('boolean')
                .and.equal(false);
            });
        });

    });

});
