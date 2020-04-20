import * as Yup from 'yup';

class SessionControler {
    async store(req, res) {
        // Faz a validação dos dados recebidos pelo request
        const schema = Yup.object().shape({
            email: Yup.string().required(),
            password: Yup.string().required().min(6),
        });

        if (! (await schema.isValid(req.body))) {
            return res.status(400).json({ error: "Validation fails" });
        }

        const { email, password } = req.body;

        return res.json({ email });
    }
}

export default new SessionControler();