import expect from 'expect';
import { isColor } from '../src';

const TEST_COLOR_NAME = 'hotpink';
const TEST_COLOR_HEX = '#ff69b4';
const TEST_COLOR_RGB = 'rgb(255,105,108)';
const TEST_COLOR_RGBA = 'rgb(255,105,108,0.5)';
const TEST_COLOR_HSL = 'hsl(330,100%,71%)';
const TEST_COLOR_HSLA = 'hsl(330,100%,71%,0.5)';
const TEST_COLOR_INCORRECT = 'coldpink';

describe('styles', () => {
    it('identifies color by HTML name', () => {
        expect(isColor(TEST_COLOR_NAME)).toBe(true);
    });

    it('identifies color by HEX', () => {
        expect(isColor(TEST_COLOR_HEX)).toBe(true);
    });

    it('identifies color by RGB', () => {
        expect(isColor(TEST_COLOR_RGB)).toBe(true);
    });

    it('identifies color by RGBA', () => {
        expect(isColor(TEST_COLOR_RGBA)).toBe(true);
    });

    it('identifies color by HSL', () => {
        expect(isColor(TEST_COLOR_HSL)).toBe(true);
    });

    it('identifies color by HSLA', () => {
        expect(isColor(TEST_COLOR_HSLA)).toBe(true);
    });

    it(`doesn't identifies an invalid color`, () => {
        expect(isColor(TEST_COLOR_INCORRECT)).toBe(false);
    });
});
