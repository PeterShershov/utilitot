import expect from 'expect';
import { renderTestElement } from '../src';

describe('mocks', () => {
    it('renders a test element', () => {
        const element = renderTestElement();

        expect(element.id).toBe('test');
    });
});
