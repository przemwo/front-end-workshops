import { Compute } from 'cerebral';
import { state } from 'cerebral/tags';

const isCountriesEmpty = Compute(
    state`countries`,
    (countries) => (countries.length === 0)
);
export default isCountriesEmpty;