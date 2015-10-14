import notificationReducers from '../'
import notificationListReducer from '../notifications-list';
import visibilityFilterReducer from '../visibility-filter';
import { ADD_NOTIFICATION, READ_NOTIFICATION, SET_VISIBILITY_FILTER } from '../../actions';
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
    });

});
