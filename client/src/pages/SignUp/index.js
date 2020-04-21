import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';
import logo from '../../assets/logo-wiser.png';

import { Content, Wrapper } from '../../styles/sign';
import api from './../../services/api';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit() {
        try {
            const response = await api.post('/user', { name, email, password });
            console.log(response);
        } catch (error) {
            alert('Erro ao executar operação');
        }
    }

    return (
        <>
            <Wrapper>
                <Content>
                    {/* <img src={logo} alt="GoBarber"/> */}

                    <form onSubmit={handleSubmit} autoComplete="off">
                        <input name="name" type="text" placeholder="Nome" onChange={ e => setName(e.target.value) } autoComplete="off" />
                        <input name="email" type="email" placeholder="Seu e-mail" onChange={ e => setEmail(e.target.value) } autoComplete="off" />
                        <input name="password" type="password" placeholder="Sua senha secreta" onChange={ e => setPassword(e.target.value) } autoComplete="new-password" />

                        <button type="submit">Cadastrar</button>

                        <Link to="/">Já tenho login</Link>
                    </form>
                </Content>
            </Wrapper>
        </>
    );
}
