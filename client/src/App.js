import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
    return (
        <>
            <Routes />
            <GlobalStyle />
        </>
    );
}

export default App;