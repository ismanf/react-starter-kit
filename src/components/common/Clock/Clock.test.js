import React from 'react'
import {shallow} from 'enzyme'
import Clock from './Clock'

describe('<Clock />', () => {

    let componentWrapper = null

    beforeAll(() => {
        componentWrapper = shallow(
            <Clock className={'success-timer-container'} />
        )
    })

    afterAll(() => {
        componentWrapper = null
    })

    test('renders div with apropriate class', () => {
        expect(componentWrapper.find('div.success-timer-container').length).toBe(1)
    })

    test('renders h1 inside div', () => {
        expect(componentWrapper.find('div>h1').length).toBe(1)
    })

    test('renders h1 tag with date string', () => {
        expect(componentWrapper.find('h1').)
    })
})