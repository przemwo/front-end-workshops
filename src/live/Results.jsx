import React from 'react';

import styles from './styles.module.css';

class Results extends React.Component {
    constructor() {
        super();
        console.log('constructor results');
    }
    render() {
        const { name, capital, population, region } = this.props.country;
        console.log(this.props.country);
        return(
            <div className={styles["results-container"]}>
                <h2>Państwo: {name}</h2>
                <ul>
                    <li>Stolica: <strong>{capital}</strong></li>
                    <li>Populacja: <strong>{population}</strong></li>
                    <li>Region: <strong>{region}</strong></li>
                </ul>
            </div>
        );
    }
}
export default Results;
