import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';

import styles from './styles.module.css';

class Results extends React.Component {
    render() {
        const { name, capital, population, region } = this.props.country;
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
const cerebralProps = {
    country: state`selectedCountry`
};
export default connect(cerebralProps, Results);
