import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { Container, UserInfo } from './styles';
import api from './../../services/api';

export default function Main() {
    const history = useHistory();
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

    function handleLogout() {
        localStorage.removeItem('token');
        history.push('/login');
    }

    return (
        <>
            { (!token) 
                ? <Redirect to="/login" /> 
                :
                <Container>
                    <UserInfo>
                        <h1>Usuário logado!</h1>
                        <span><strong>User:</strong> { user.name }</span>
                        <span><strong>E-mail:</strong> { user.email}</span>
                        
                        <button onClick={ handleLogout }>Logout</button>
                    </UserInfo>
                </Container>
            }
        </>
    );
}
