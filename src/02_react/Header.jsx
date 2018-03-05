import React from 'react';

import styles from './styles.module.css';

class Header extends React.Component {
    render() {
        return(
            <div className={styles["header-container"]}>
                <h1>Państwa Świata</h1>
            </div>
        );
    }
}
export default Header;