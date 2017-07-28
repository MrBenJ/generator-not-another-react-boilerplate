/* global
    describe
    expect
    it
 */

import {shallow} from 'enzyme';
import React from 'react';

import { Text, Title, Code } from './';

describe('Common Component Tests', () => {
    describe('<Text>', () => {

        const setupText = () => shallow(<Text>Hello</Text>);


        it('Renders with children', () => {
            const TextWrapper = setupText();
            expect(TextWrapper.props().children).toBe('Hello');
        });

        it('Renders a <p> tag', () => {
            const TextWrapper = setupText();
            expect(TextWrapper.find('p').length).toBe(1);
        })

        it('Has styles', () => {
            const TextWrapper = setupText();
            expect(TextWrapper.props().className).toBeTruthy();
        });

    });

    describe('<Title>', () => {
        const setupTitle = () => shallow(<Title>Title Here</Title>);

        it('Renders with children', () => {
            const TitleWrapper = setupTitle();
            expect(TitleWrapper.props().children).toBe('Title Here');
        });

        it('Renders an <h1> tag', () => {
            const TitleWrapper = setupTitle();
            expect(TitleWrapper.find('h1').length).toBe(1);
        });

        it('Has styles', () => {
            const TitleWrapper = setupTitle();
            expect(TitleWrapper.props().className).toBeTruthy();
        });
    });

    describe('<Code>', () => {
        const setupCode = () => shallow(<Code>pretty code</Code>);

        it('Renders with children', () => {
            const CodeWrapper = setupCode();
            expect(CodeWrapper.find('code').props().children).toBe('pretty code');
        });

        it('Renders a <pre> and <code> tag', () => {
            const CodeWrapper = setupCode();
            expect(CodeWrapper.find('code').length).toBe(1);
            expect(CodeWrapper.find('pre').length).toBe(1);
        });

        it('Has styles', () => {
            const CodeWrapper = setupCode();
            expect(CodeWrapper.props().className).toBeTruthy();
        });
    })
});
