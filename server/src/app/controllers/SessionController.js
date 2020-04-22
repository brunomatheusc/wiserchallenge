import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from './../models/User';

class SessionControler {
    async store(req, res) {
        // Faz a validação dos dados recebidos pelo request
        const schema = Yup.object().shape({
            email: Yup.string().required(),
            password: Yup.string().required().min(6),
        });

        // Senão foi validado retorna uma mensagem de erro
        if (! (await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Erro ao validar campos. Verifique e digite novamente" });
        }

        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({ msg: "Usuário não encontrado"});
        }

        if (! (await user.checkPassword(password))) {
            return res.status(401).json({ msg: "Senha não confere"});
        }

        const { id, name } = user;

        return res.json({ 
            user: { id, name, email },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn
            })
        });
    }
}

export default new SessionControler();