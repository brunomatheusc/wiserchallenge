import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { Container } from './styles';
import api from './../../services/api';
import history from './../../services/history';

export default function Main() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await api.get('/user');
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getUser();
    }, [])

    return (
        <>
            { (!token) 
                ? <Redirect to="/login" /> 
                :
                <Container>
                    <h1>Usuário logado!</h1>
                    <span><strong>User:</strong> { user.name }</span>
                    <span><strong>E-mail:</strong> { user.email}</span>
                </Container>
            }
        </>
    );
}
