import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Content, Wrapper } from '../../styles/sign';
import api from './../../services/api';
import { FaSpinner } from 'react-icons/fa';

export default function SignIn() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post('/session', { email, password });

            if (response.status == 200) {
                const { token } = response.data;
                api.defaults.headers['Authorization'] = `Bearer ${token}`;

                localStorage.setItem('token', response.data.token);
                setLoading(false);
                history.push('/');
            }
        } catch (error) {
            toast.error('Falha no cadastro, verifique seus dados!');
            // alert('Erro ao executar operação');
            setLoading(false);
        }
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
