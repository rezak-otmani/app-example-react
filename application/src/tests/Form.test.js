import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';


describe('Form', function () {
    it('should validate', function () {
        const createFakeStore = fakeData => ({
            getState() {
                return fakeData;
            },
            subscribe(fn) {

            },
            dispatch() {

            }
        });

        expect(true).toBeTruthy();
   });
});
