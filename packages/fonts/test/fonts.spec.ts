import expect from 'expect';
import { activeFont } from '../src/active-font';

describe('fonts', () => {
    it('returns correct font family', () => {
        expect(activeFont('arial, sans-serif, tahoma', '12px')).toBe('arial');
        expect(activeFont('no-such-font, sans-serif, tahoma', '12px')).toBe('sans-serif');
    });
});
