import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        ReactDOM.render(
            <App />,
            document.getElementById('root')
        );
    });
}