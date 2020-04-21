import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Content, Wrapper } from '../../styles/sign';
import api from './../../services/api';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        try {
            const response = await api.post('/session', { email, password });
            console.log(response);
        } catch (error) {
            alert('Erro ao executar operação');
        }

        setLoading(true);
    }

    return (
        <>
            <Wrapper>
                <Content>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <input name="email" type="email" onChange={ e => setEmail(e.target.value) } placeholder="Seu e-mail" autoComplete="off" />
                        <input name="password" type="password" onChange={ e => setPassword(e.target.value) } placeholder="Sua senha secreta" autoComplete="new-password" />

                        <button type="submit" loading={ loading }>
                        { loading 
                            ? <FaSpinner color="#fff" />
                            : "Acessar"
                        }
                        </button>

                        <Link to="/register">Criar conta gratuita</Link>
                    </form>
                </Content>
            </Wrapper>
        </>
    );
}
