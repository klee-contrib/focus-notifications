import notificationReducers from '../'
import { ADD_NOTIFICATION, READ_NOTIFICATION, SET_VISIBILITY_FILTER } from '../../actions';
describe('reducers', () => {
    it('should be a function', () => {
        expect(notificationReducers).to.be.a('function');
    });
});
