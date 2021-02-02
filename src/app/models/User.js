import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    
    // Vai ser executado antes de Salvar no Banco
    this.addHook('beforeSave', async (user) =>{
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }
  
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash); // Compara se a senha que o usuaria esta tentando acressar é a mesmo que esta no banco
  }
}

export default User;