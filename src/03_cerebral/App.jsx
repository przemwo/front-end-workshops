import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import Header from './Header';
import Results from './Results';
import SelectCountry from './SelectCountry';

import api from '../mockApi';

import styles from './styles.module.css';

class App extends React.Component {
    state = {
        selectedCountry: {
            id: 'PL',
            name: 'Poland',
            capital: 'Warsaw',
            population: 38437239,
            region: 'Europe'
        },
        countries: [],
        isLoading: true,
    };
    handleOnSelectCountry = (country) => {
        this.setState({
            selectedCountry: country
        })
    }
    componentDidMount() {
        api.getData().then(countries => {
            // countries = [];
            this.setState({
                countries,
                isLoading: false
            });

        });
    }
    render() {
        const { selectedCountry, countries, isLoading } = this.state;
        return(
            <div className={styles.container}>
                <Header />
                {isLoading ?
                    <h1>Is Loading...</h1> :
                    (countries.length > 0) ?
                        (<div className={styles["content-container"]}>
                            <SelectCountry countries={countries} onClick={this.handleOnSelectCountry} />
                            <Results country={selectedCountry} />
                        </div>) :
                        <h1>No data</h1>
                    
                }
            </div>
        );
    }
}
const cerebralProps = {};
export default connect(cerebralProps, App);
