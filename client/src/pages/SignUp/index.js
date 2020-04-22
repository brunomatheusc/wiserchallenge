import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FaSpinner } from 'react-icons/fa';

import { Content, Wrapper } from '../../styles/sign';
import api from './../../services/api';
import { toast } from 'react-toastify';

export default function SignUp() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/user', { name, email, password });

            toast.success("Usuário criado com sucesso!"); 
            
            history.push('/');
        } catch (error) {
            const { msg } = error.response.data;
            toast.error(msg);
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
                        <input name="password" type="password" placeholder="Sua senha secreta [pelo menos 6 caracteres]" onChange={ e => setPassword(e.target.value) } autoComplete="new-password" />

                        <button type="submit">Cadastrar</button>

                        <Link to="/">Já tenho login</Link>
                    </form>
                </Content>
            </Wrapper>
        </>
    );
}
