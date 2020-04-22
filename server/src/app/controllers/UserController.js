import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    async index (req, res) {
        try {
            const { authorization } = req.headers;

            const user = await User.findOne({ where: { id: req.userId }})

            const { id, name, email } = user;

            return res.json({ id, name, email });
        } catch (error) {
            return res.status(400).json({ error: true });
        }
    }

    async store (req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required().min(6)
        });

        if (!(await schema.isValid(req.body))){
            return res.status(400).json({ msg: "Verifique os dados e tente novamente" });
        }

        try {            
            const userExists = await User.findOne({ where: { email: req.body.email }});
    
            if (userExists){
                return res.status(400).json({ msg: "Usuário já existe"});
            }
    
            const { email, password, name } = req.body;
    
            const user = await User.create({ name, email, password });
            return res.json(user);
        } catch (error) {
            return res.status(500).json({ error: true });
        }        
    }
}

export default new UserController();