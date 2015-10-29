import notificationReducers from '../'
import notificationListReducer from '../notifications-list';
import visibilityFilterReducer from '../visibility-filter';
import notificationReceivedReducer from '../notifications-received'
import isFetchingReducer from '../is-fetching';
import isOpenReducer from '../is-open';
import { ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION,READ_NOTIFICATION_GROUP, SET_VISIBILITY_FILTER, OPEN_CENTER, CLOSE_CENTER } from '../../actions';
import { REQUEST_NOTIFICATIONS, RECEIVE_NOTIFICATIONS } from '../../actions/fetch-notifications';
import {RECEIVE_NEW_NOTIFICATIONS, receiveNotifications, DISMISS_NOTIFICATION, dismissNotification} from '../../actions/receive-notifications';
import generateError from '../util/error-generator';
import {keys} from 'lodash/object';
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
                    {uuid: 10, content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'},
                    {uuid: 11, content: 'new super notification2', author: 'rodrigo2', targetURL: 'http://test2.com'}
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
                    {uuid: 10, content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'},
                    {uuid: 11, content: 'new super notification2', author: 'rodrigo2', targetURL: 'http://test2.com'}
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
//////////////////////////////////////
///
    describe('notificationReceivedReducer', () => {
        const REDUCER_NAME = 'NOTIFICATIONS_RECEIVED';
        const INITAL_OBJECT_STATE = {1234566616161: {content: 'rodrigo'}};
        it('should be a function', () => {
            expect(notificationReceivedReducer).to.be.a('function');
        });
        it('should return an empty object when the state is undefined', () => {
            expect(notificationReceivedReducer()).to.be.an('object');
        });
        it('should return the initial object state when called without action', () => {
            expect(notificationReceivedReducer(INITAL_OBJECT_STATE))
            .to.be.an('object')
            .and.equal(INITAL_OBJECT_STATE);
        });
        it('should return the initial state when the action is unkown', () => {
            expect(notificationReceivedReducer(INITAL_OBJECT_STATE, {type: 'unknown'}))
            .to.be.an('object')
            .and.equal(INITAL_OBJECT_STATE);
        });
        describe('when it receive an ADD_NOTIFICATION action ', () => {
            const NEW_NOTIF = {uuid: '1234', content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'};
            it('should throw an error when the payload is not an object', () => {
                const reducerCaller = (payload) => notificationReceivedReducer({}, {type: ADD_NOTIFICATION, payload});
                expect(() => reducerCaller(3)).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATION', payload: 3}, expectedType: 'object'}));
                expect(() => reducerCaller('ABCD')).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATION', payload: 'ABCD'}, expectedType: 'object'}));
                expect(() => reducerCaller([])).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATION', payload: []}, expectedType: 'object'}));
            });
            it('should add the notification given if it does no exists', () => {

                const reducerCall = notificationReceivedReducer(INITAL_OBJECT_STATE, {type: ADD_NOTIFICATION, payload: NEW_NOTIF});
                expect(reducerCall).to.be.an('object').and.have.ownProperty(NEW_NOTIF.uuid);
                expect(reducerCall[NEW_NOTIF.uuid]).to.be.an('object').and.deep.equal(NEW_NOTIF);
            });
            it('should not add the notification given if it exists', () => {
                notificationReceivedReducer({}, {type: ADD_NOTIFICATION, payload: NEW_NOTIF})
                const secondReducerCall = notificationReceivedReducer({}, {type: ADD_NOTIFICATION, payload: NEW_NOTIF});
                expect(secondReducerCall).to.be.an('object').and.contain.all.keys([NEW_NOTIF.uuid]);
            });
        });
        describe('when it receive an ADD_NOTIFICATIONS action ', () => {
            it('should throw an error when the payload is not an array', () => {
                const reducerCaller = (payload) => notificationReceivedReducer(INITAL_OBJECT_STATE, {type: ADD_NOTIFICATIONS, payload});
                expect(() => reducerCaller(3)).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATIONS', payload: 3}, expectedType: 'array'}));
                expect(() => reducerCaller('ABCD')).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATIONS', payload: 'ABCD'}, expectedType: 'array'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: 'ADD_NOTIFICATIONS', payload: {a: 'a'}}, expectedType: 'array'}));
            });
            it('should add the notification ', () => {
                const NEW_NOTIFS = [
                    {uuid: 123, content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'},
                    {uuid: 456, content: 'new super notification2', author: 'rodrigo2', targetURL: 'http://test2.com'}
                ];
                const reducerCall = notificationReceivedReducer(INITAL_OBJECT_STATE, {type: ADD_NOTIFICATIONS, payload: NEW_NOTIFS});
                expect(reducerCall)
                .to.be.an('object')
                .and.contain.keys([`${NEW_NOTIFS[0].uuid}`, `${NEW_NOTIFS[1].uuid}`]);
            });
        });
        describe('when it receive an RECEIVE_NOTIFICATIONS action ', () => {
            it('should throw an error when the payload is not an array', () => {
                const NEW_NOTIF = {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'};
                const reducerCaller = (payload) => notificationReceivedReducer(INITAL_OBJECT_STATE, {type: RECEIVE_NOTIFICATIONS, payload});
                expect(() => reducerCaller(3)).to.throw(generateError({name: REDUCER_NAME, action: {type: 'RECEIVE_NOTIFICATIONS', payload: 3}, expectedType: 'array'}));
                expect(() => reducerCaller('ABCD')).to.throw(generateError({name: REDUCER_NAME, action: {type: 'RECEIVE_NOTIFICATIONS', payload: 'ABCD'}, expectedType: 'array'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: 'RECEIVE_NOTIFICATIONS', payload: {a: 'a'}}, expectedType: 'array'}));
            });
            it('should add the notification given in the action', () => {
                const NEW_NOTIFS = [
                    {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'},
                    {content: 'new super notification2', author: 'rodrigo2', targetURL: 'http://test2.com'}
                ];
                const reducerCall = notificationReceivedReducer(INITAL_OBJECT_STATE, {type: RECEIVE_NOTIFICATIONS, payload: NEW_NOTIFS});
                expect(reducerCall)
                .to.be.an('object')
                expect(reducerCall)
                .to.be.an('object')
                .and.contain.all.keys([`${keys(INITAL_OBJECT_STATE)[0]}`,`${NEW_NOTIFS[0].uuid}`, `${NEW_NOTIFS[1].uuid}`]);
            });
            it('should not add duplicate notifications', () => {
                const NEW_NOTIFS = [
                    {content: 'new super notification', author: 'rodrigo', targetURL: 'http://test.com'},
                    {content: 'new super notification2', author: 'rodrigo2', targetURL: 'http://test2.com'},
                    {content: 'new super notification2', author: 'rodrigo2', targetURL: 'http://test2.com'}
                ];
                const reducerCall = notificationReceivedReducer(INITAL_OBJECT_STATE, {type: RECEIVE_NOTIFICATIONS, payload: NEW_NOTIFS});
                expect(reducerCall)
                .to.be.an('object')
                .and.contain.all.keys([`${keys(INITAL_OBJECT_STATE)[0]}`, `${NEW_NOTIFS[0].uuid}`, `${NEW_NOTIFS[1].uuid}`]);

            });
        });
        describe('when it receives an READ_NOTIFICATION action', () => {
            const INITIAL_UNDISPLAYED_NOTIFS ={
                1: {uuid: '1'},
                2: {uuid: '2'},
                3: {uuid: '3', displayed: true}
            };
            it('should throw an error when the payload is not an string or a number', () => {
                const reducerCaller = (payload) => notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: READ_NOTIFICATION, payload});
                expect(() => reducerCaller('3')).to.not.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION, payload: '3'}, expectedType: 'string|number'}));
                expect(() => reducerCaller(3)).to.not.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION, payload: 3}, expectedType: 'string|number'}));
                expect(() => reducerCaller([3])).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION, payload: [3]}, expectedType: 'string|number'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION, payload: {a: 'a'}}, expectedType: 'string|number'}));
            });
            it('should add displayed on the read notifs', () => {
                const reducerCall = notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: READ_NOTIFICATION, payload: '1'});
                expect(reducerCall).to.be.an('object');
                expect(reducerCall).to.have.property('1').that.deep.equal({...INITIAL_UNDISPLAYED_NOTIFS['1'], displayed: true});
                expect(reducerCall).to.have.property('2').that.deep.equal(INITIAL_UNDISPLAYED_NOTIFS['2'])
                expect(reducerCall).to.have.property('3').that.deep.equal(INITIAL_UNDISPLAYED_NOTIFS['3']);
            });
            it('should do nothing when the uuid provided in the action is unknown', () => {
                const reducerCall = notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: READ_NOTIFICATION, payload: 'UNKNOWN_UUID'});

                expect(reducerCall)
                .to.be.an('object')
                .that.deep.equal(INITIAL_UNDISPLAYED_NOTIFS)
            });
        });
        describe('when it receives an DISMISS_NOTIFICATION action', () => {
            const INITIAL_UNDISPLAYED_NOTIFS ={
                1: {uuid: '1'},
                2: {uuid: '2'},
                3: {uuid: '3', displayed: true}
            };
            it('should throw an error when the payload is not an string or a number', () => {
                const reducerCaller = (payload) => notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: DISMISS_NOTIFICATION, payload});
                expect(() => reducerCaller('3')).to.not.throw(generateError({name: REDUCER_NAME, action: {type: DISMISS_NOTIFICATION, payload: '3'}, expectedType: 'string|number'}));
                expect(() => reducerCaller(3)).to.not.throw(generateError({name: REDUCER_NAME, action: {type: DISMISS_NOTIFICATION, payload: 3}, expectedType: 'string|number'}));
                expect(() => reducerCaller([3])).to.throw(generateError({name: REDUCER_NAME, action: {type: DISMISS_NOTIFICATION, payload: [3]}, expectedType: 'string|number'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: DISMISS_NOTIFICATION, payload: {a: 'a'}}, expectedType: 'string|number'}));
            });
            it('should add displayed on the displayed notifs', () => {
                const reducerCall = notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: DISMISS_NOTIFICATION, payload: '1'});
                expect(reducerCall).to.be.an('object');
                expect(reducerCall).to.have.property('1').that.deep.equal({...INITIAL_UNDISPLAYED_NOTIFS['1'], displayed: true});
                expect(reducerCall).to.have.property('2').that.deep.equal(INITIAL_UNDISPLAYED_NOTIFS['2'])
                expect(reducerCall).to.have.property('3').that.deep.equal(INITIAL_UNDISPLAYED_NOTIFS['3']);
            });
            it('should do nothing when the uuid provided in the action is unknown', () => {
                const reducerCall = notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: DISMISS_NOTIFICATION, payload: 'UNKNOWN_UUID'});

                expect(reducerCall)
                .to.be.an('object')
                .that.deep.equal(INITIAL_UNDISPLAYED_NOTIFS)
            });
        });
        describe('when it receives an READ_NOTIFICATION_GROUP action', () => {

            const INITIAL_UNDISPLAYED_NOTIFS ={
                1: {uuid: '1'},
                2: {uuid: '2'},
                3: {uuid: '3', displayed: true},
                4: {uuid: '4'}
            };

            it('should throw an error when the payload is not an array', () => {
                const reducerCaller = (payload) => notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: READ_NOTIFICATION_GROUP, payload});
                expect(() => reducerCaller('3')).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION_GROUP, payload: '3'}, expectedType: 'array'}));
                expect(() => reducerCaller(3)).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION_GROUP, payload: 3}, expectedType: 'array'}));
                expect(() => reducerCaller({a: 'a'})).to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION_GROUP, payload: {a: 'a'}}, expectedType: 'array'}));
                expect(() => reducerCaller([3, 4, 5])).not.to.throw(generateError({name: REDUCER_NAME, action: {type: READ_NOTIFICATION_GROUP, payload: [3]}, expectedType: 'array'}));
            });
            it('should add mark all the notifications given as ids as displayed', () => {
                const reducerCall = notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: READ_NOTIFICATION_GROUP, payload: ['1', '2']});
                expect(reducerCall)
                .to.be.an('object')
                expect(reducerCall).to.have.property('1').that.deep.equal({...INITIAL_UNDISPLAYED_NOTIFS['1'], displayed: true});
                expect(reducerCall).to.have.property('2').that.deep.equal({...INITIAL_UNDISPLAYED_NOTIFS['2'], displayed: true});
                expect(reducerCall).to.have.property('3').that.deep.equal(INITIAL_UNDISPLAYED_NOTIFS['3'])
                expect(reducerCall).to.have.property('4').that.deep.equal(INITIAL_UNDISPLAYED_NOTIFS['4']);
            });
            it('should do nothing when the uuids provided in the action are unknown', () => {
                const reducerCall = notificationReceivedReducer(INITIAL_UNDISPLAYED_NOTIFS, {type: READ_NOTIFICATION_GROUP, payload: ['UNKNOWN_UUID']});
                expect(reducerCall)
                .to.be.an('object')
                .and.be.deep.equal(INITIAL_UNDISPLAYED_NOTIFS);
            });
        })

    });




    ///////////////
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
