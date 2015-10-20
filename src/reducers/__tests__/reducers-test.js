import notificationReducers from '../'
import notificationListReducer from '../notifications-list';
import visibilityFilterReducer from '../visibility-filter';
import isFetchingReducer from '../is-fetching';
import isOpenReducer from '../is-open';
import { ADD_NOTIFICATION, ADD_NOTIFICATIONS, READ_NOTIFICATION,READ_NOTIFICATION_GROUP, SET_VISIBILITY_FILTER, OPEN_CENTER, CLOSE_CENTER } from '../../actions';
import { REQUEST_NOTIFICATIONS, RECEIVE_NOTIFICATIONS } from '../../actions/fetch-notifications'
import generateError from '../util/error-generator';
const INITAL_ARRAY_STATE = [{content: 'LOPEZ JOE'}];
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
        describe.skip('when it receives an READ_NOTIFICATION action', () => {

        });
        describe.skip('when it receives an READ_NOTIFICATION_GROUP action', () => {

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
