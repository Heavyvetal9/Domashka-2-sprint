import React from 'react'
import { pureAddUserCallback } from '../HW3'

let initialState: Array<{name: string, _id: string}> = [];
const setName = (a: Array<{name: string, _id: string}>) => {
    initialState = [...a];
};

beforeEach(() => {
    initialState = [];
});

test('name 1', () => {
    pureAddUserCallback('name', setName, initialState);
    expect(initialState.length).toBe(1);
    expect(initialState[0].name).toBe('name');
    expect(typeof initialState[0]._id).toBe('string');
});
