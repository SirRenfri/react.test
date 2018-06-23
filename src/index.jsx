import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

const Root = () => (
    <div>
        {/*
        <Provider store={store}>
        </Provider>
        */}
        <h1>Hello world !</h1>
    </div>
);

render(<Root />, document.getElementById('root'));