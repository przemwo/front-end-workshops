import React from 'react';

import styles from './styles.module.css';

class Results extends React.Component {
    render() {
        return(
            <div className={styles["results-container"]}>
                <h2>Państwo: Polska</h2>
                <ul>
                    <li>Stolica: <strong>Warszawa</strong></li>
                    <li>Populacja: <strong>40</strong></li>
                </ul>
            </div>
        );
    }
}
export default Results;