import React from 'react';

import Header from './Header';
import Results from './Results';
import SelectCountry from './SelectCountry';

import api from '../mockApi';

import styles from './styles.module.css';

// 1. Header component
// 2. Results component
// 3. SelectCountry
// 4. Stworz fake dane w state (id, name, capital, population, region)
// 5. Przekaz dane do SelectCountry
// Przekaz dane do Results
// Wydobrebnij SelectCountryItem
// Pobierz dane z api w componentDidMount i ustaw state
// stworz komponent isLoading

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