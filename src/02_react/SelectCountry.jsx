import React from 'react';

import styles from './styles.module.css';

class SelectCountry extends React.Component {
    render() {
        return(
            <div className={styles["select-country-container"]}>
                <h2>Wybierz kraj:</h2>
                <ul>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li className={styles.selected}>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                    <li>Polska</li>
                    <li>Anglia</li>
                </ul>
            </div>
        );
    }
}
export default SelectCountry;