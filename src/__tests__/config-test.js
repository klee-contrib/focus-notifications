import DEFAULT_CONF , {getConfig, extendConfig} from '../config';
describe('config', () => {
    it('config should have a default mode', () => {
        expect(DEFAULT_CONF).to.be.an('object');
        expect(getConfig).to.be.a('function');
        expect(extendConfig).to.be.a('function');
    } )
});
