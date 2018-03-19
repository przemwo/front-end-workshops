import { Module } from 'cerebral';
import { set, wait } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';

import api from '../../../../mockApi';

const app = Module({
    state: {
        selectedCountry: {
            id: 'PL',
            name: 'Poland',
            capital: 'Warsaw',
            population: 38437239,
            region: 'Europe'
        },
        countries: [],
        isLoading: false
    },
    signals: {
        viewStarted: [
            set(state`isLoading`, true),
            () => api.getData().then(countries => ({ countries  })),
            set(state`countries`, props`countries`),
            set(state`isLoading`, false)
        ],
        selectCountryClicked: [
            set(state`selectedCountry`, props`country`)
        ]
    }
});
export default app;