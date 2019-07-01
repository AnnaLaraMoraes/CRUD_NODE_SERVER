module.exports = (sequelize, DataTypes) => {
    const pessoas = sequelize.define('pessoas', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        endereco: DataTypes.STRING,
        sexo: DataTypes.CHAR,
        ativo: DataTypes.BOOLEAN,
    });
  
    return pessoas;
  }
//(nome, email, endereco, sexo(char M/F), ativo(boolean)