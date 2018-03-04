import React from 'react';

import styles from './styles.module.css';

class App extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles["header-container"]}>
                    <h1>Państwa Świata</h1>
                </div>
                <div className={styles["content-container"]}>
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
                    <div className={styles["results-container"]}>
                        <h2>Państwo: Polska</h2>
                        <ul>
                            <li>Stolica: <strong>Warszawa</strong></li>
                            <li>Populacja: <strong>40</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;