import {addNotification, readNotification, setVisibilityFilter, VisibilityFilters, ADD_NOTIFICATION, COMPLETE_NOTIFICATION, SET_VISIBILITY_FILTER} from '../'

describe.only('actions', () => {
    it('actionType should be strings', () => {
        expect(ADD_NOTIFICATION).to.be.a('string');
        expect(COMPLETE_NOTIFICATION).to.be.a('string');
        expect(SET_VISIBILITY_FILTER).to.be.a('string');
    } )
    describe('addNotification', () => {
        it('should be a function', () => {
            expect(addNotification).to.be.a('function');
        });
    });
    describe('readNotification', () => {
        it('should be a function', () => {
            expect(readNotification).to.be.a('function');
        });
    });
    describe('setVisibilityFilter', () => {
        it('should be a function', () => {
            expect(setVisibilityFilter).to.be.a('function');
        });
    });
    describe('VisibilityFilters', () => {
        it('should be an object', () => {
            expect(VisibilityFilters).to.be.an('object');
        });
    });
});
