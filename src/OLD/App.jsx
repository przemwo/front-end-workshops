import React from 'react';

import api from './api';
import styles from './styles.module.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: [],
            selectedCountry: {},
            isFetchingData: false
        };
    }
    handleSelectCountry = (country) => () => {
        this.setState((state) => {
            return {
                selectedCountry: country
            };
        });
    };
    componentDidMount() {
        this.setState({
            isFetchingData: true
        });
        api.getData()
            .then(countries => {
                const europe = countries.filter(country => country.region === 'Europe');
                const europeSorted = europe.sort((countryA, countryB) => countryB.population - countryA.population);
                const europeSortedTop10 = europeSorted.slice(0);
                return europeSortedTop10;
            })
            .then(res => {
                this.setState({
                    countries: res,
                    selectedCountry: res[0],
                    isFetchingData: false
                })
            })
            .catch(err => {
                this.setState({
                    isFetchingData: false
                });
                // handle error here
            });
    }
    render() {
        const {
            countries,
            selectedCountry,
            isFetchingData
        } = this.state;
        return(
            <div className={styles.wrapper}>

                <div className={styles.header}>
                    <h1>Countries App</h1>
                </div>

                {isFetchingData &&
                    <div className={styles['is-loading']}>
                        <h2>Loading data...</h2>
                    </div>
                }
                
                {!isFetchingData &&
                    <div className={styles['countires-container']}>
                        <h2>Select country</h2>
                        <ul className={styles.countries}>
                            {countries.map(country => (
                                <li
                                    key={country.id}
                                    onClick={this.handleSelectCountry(country)}
                                    className={(country.id === selectedCountry.id) ? styles.selected : '' }
                                >
                                    {country.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                }

                {!isFetchingData &&
                    <div className={styles['details-container']}>
                        <h2>{selectedCountry.name}</h2>
                        <ul>
                            <li>Capital: {selectedCountry.capital}</li>
                            <li>Population: {(selectedCountry.population / 1000000).toFixed(2)}</li>
                            <li>Region: {selectedCountry.region}</li>
                            <li>Id: {selectedCountry.id}</li>
                        </ul>
                    </div>
                }

            </div>
        );
    }
}
export default App;