import * as Yup from 'yup';
import User from './../../models/User';

class UserController {
    async index (req, res) {

    }

    async store (req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().required(),
            password: Yup.string().required().min(6)
        });

        if (!(await schema.isValid(req.body))){
            return res.status(400).json({ error: "Validation fails" });
        }

        try {            
            const userExists = await User.findOne({ where: { email: 'bmatheusc@gmail.com' }});
    
            if (userExists){
                return res.status(400).json({ error: "User already exists"});
            }
    
            const { email, password, name } = req.body;
    
            const user = await User.create({ name, email, password });
            return res.json(user);
        } catch (error) {
            console.log(error);            
            return res.status(500).json({ error: true });
        }        
    }
}

export default new UserController();