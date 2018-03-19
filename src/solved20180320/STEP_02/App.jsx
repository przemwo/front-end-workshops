import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import isCountriesEmpty from './cerebral/modules/app/computed/isCountriesEmpty';

import Header from './Header';
import Results from './Results';
import SelectCountry from './SelectCountry';

import api from '../mockApi';

import styles from './styles.module.css';

// przenies odwolania do state do poszczegolnych komponentow

class App extends React.Component {
    componentDidMount() {
        const { viewStarted } = this.props;
        viewStarted();
    }
    render() {
        const { isLoading, isCountriesEmpty } = this.props;
        return(
            <div className={styles.container}>
                <Header />
                {isLoading ?
                    <h1>Is Loading...</h1> :
                    (!isCountriesEmpty) ?
                        (<div className={styles["content-container"]}>
                            <SelectCountry />
                            <Results />
                        </div>) :
                        <h1>No data</h1>
                    
                }
            </div>
        );
    }
}
const cerebralProps = {
    viewStarted: signal`viewStarted`,
    isLoading: state`isLoading`,
    isCountriesEmpty
};
export default connect(cerebralProps, App);
