import api from '../../../../../mockApi';

const getCountries = () => api.getData().then(countries => ({ countries }));
export default getCountries;