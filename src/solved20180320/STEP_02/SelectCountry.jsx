import React from 'react';
import { connect } from '@cerebral/react';
import { state, signal } from 'cerebral/tags';

import styles from './styles.module.css';

{/* <li className={styles.selected}>Polska</li> */}

class SelectCountry extends React.Component {
    render() {
        const { countries, selectCountryClicked } = this.props;
        return(
            <div className={styles["select-country-container"]}>
                <h2>Wybierz kraj:</h2>
                <ul>
                    {countries.map((country) => (
                        <li
                            key={country.id}
                            onClick={() => selectCountryClicked({ country })}
                        >
                            {country.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
const cerebralProps = {
    countries: state`countries`,
    selectCountryClicked: signal`selectCountryClicked`
};
export default connect(cerebralProps, SelectCountry);