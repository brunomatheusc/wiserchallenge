import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './../pages/SignIn';
import SignUp from './../pages/SignUp';
import Main from './../pages/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={SignIn} />
                <Route path="/register" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
}