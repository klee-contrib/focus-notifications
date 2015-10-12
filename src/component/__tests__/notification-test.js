import Notification from '../notification';

describe('The Notification component', () => {
    it('shoud have a correct display name', () => {
        expect(Notification.displayName).to.equal('Notification');
    });
});
