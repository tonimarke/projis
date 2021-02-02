import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async create(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } }); // Comparar se o email que esta no banco é o mesmo email que o usuario esta tentando cadastrar

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, name, email, provider }  = await User.create(req.body);
    
    return res.json({
      id,
      name,
      email,
      provider,
    });
  }

  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  }

  async show(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: 'User does not exists' });
    }

    return res.status(201).json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .when('oldPassword', (oldPassword, field) => 
          oldPassword ? field.required(): field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    
    const { email, oldPassword } = req.body;

    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(404).json({ error: 'User does not exists' });
    }

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if(userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'Password does not match' });
    }

    await user.update(req.body);

    const { id, name, avatar } = await User.findByPk(user_id); 

    return res.json({
      id,
      name,
      email,
      avatar,
    });
  }

  async delete(req, res) {
    const { user_id } = req.params;

    const user = await User.destroy({ where: { id: user_id } });
    
    if (!user) {
      return res.status(404).json({ error: 'User does not exists' });
    }

    return res.status(201).json({ message: `User with id:${user_id} deleted with success` });
  }
}

export default new UserController();