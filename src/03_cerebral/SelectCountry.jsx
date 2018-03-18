import React from 'react';

import styles from './styles.module.css';

{/* <li className={styles.selected}>Polska</li> */}

class SelectCountry extends React.Component {
    render() {
        const { countries, onClick } = this.props;
        return(
            <div className={styles["select-country-container"]}>
                <h2>Wybierz kraj:</h2>
                <ul>
                    {countries.map((country) => (
                        <li
                            key={country.id}
                            onClick={() => onClick(country)}
                        >
                            {country.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default SelectCountry;