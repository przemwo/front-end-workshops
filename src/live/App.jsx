import React from 'react';

import styles from './styles.module.css';

console.log(styles);

class App extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.header}>Header</div>
                <div className={styles.content}>
                    <div className={styles['select-container']}>
                        <h2>Wybierz kraj:</h2>
                        <ul>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                            <li>Polska</li>
                            <li>Anglia</li>
                            <li>Czechy</li>
                        </ul>
                    </div>
                    <div className={styles['results-container']}>Wynik</div>
                </div>
            </div>
        );
    }
}
export default App;