import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from '@cerebral/react';

// import App from './00_intro/App';
// import App from './01_view/App';
// import App from './02_react/App';
// import App from './03_cerebral/App';
// import controller from './03_cerebral/cerebral/controller';
import App from './solved20180320/App';
import controller from './solved20180320/cerebral/controller';

// import App from './live/App';

ReactDOM.render(
    <Container controller={controller}>
        <App />
    </Container>,
    document.getElementById('root')
);
