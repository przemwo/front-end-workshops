import { Module, sequence } from 'cerebral';
import { set, wait } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';

import { getCountries } from './actions';

const app = Module({
    state: {
        selectedCountry: {},
        countries: [],
        isLoading: false
    },
    signals: {
        viewStarted: [
            sequence('Starting the app...', [
                set(state`isLoading`, true),
                getCountries,
                set(state`countries`, props`countries`),
                set(state`selectedCountry`, props`countries.0`),
                set(state`isLoading`, false)
            ])
        ],
        selectCountryClicked: [
            set(state`selectedCountry`, props`country`)
        ]
    }
});
export default app;