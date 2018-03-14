import React from 'react';

import Header from './Header';
import Results from './Results';
import SelectCountry from './SelectCountry';

import api from '../mockApi';

import styles from './styles.module.css';

// TEMATY
// state (setState + jego asynchroniczne działanie)
// bindowanie this do metod (różne warianty)
// prospy w dół, akcje w górę - pokazać pełne koło
// bindowanie wartosci do metod przekazywanych w dol

// DZIALANIA
// wyodrebnij komponenty
// przekaz propsy "z palca" do komponentów (do Results)
// stworz state (id, name, capital, population, region) i przekaz propsy ze state do kompoenentów
// handleOnClick w SelectCountry - update state
// pobierz dane z api
// komponent isLoading

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            countries: ['Polska']
        };
    }
    // componentDidMount() {
    //     api.getData().then(countries => {
    //         this.setState({
    //             countries
    //         });
            
    //     });
    // }
    render() {
        const { countries } = this.state;
        console.log(countries);
        
        return(
            <div className={styles.container}>
                <Header />
                <div className={styles["content-container"]}>
                    <SelectCountry />
                    <Results />
                </div>
            </div>
        );
    }
}
export default App;