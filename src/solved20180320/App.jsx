import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import Header from './Header';
import Results from './Results';
import SelectCountry from './SelectCountry';

import api from '../mockApi';

import styles from './styles.module.css';

// przenies state z App do modulu app

class App extends React.Component {
    handleOnSelectCountry = (country) => {
        const { selectCountryClicked } = this.props;
        selectCountryClicked({ country });
    }
    componentDidMount() {
        const { viewStarted } = this.props;
        viewStarted();
    }
    render() {
        const { selectedCountry, isLoading, countries } = this.props;
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
const cerebralProps = {
    selectedCountry: state`selectedCountry`,
    viewStarted: signal`viewStarted`,
    isLoading: state`isLoading`,
    countries: state`countries`,
    selectCountryClicked: signal`selectCountryClicked`
};
export default connect(cerebralProps, App);
