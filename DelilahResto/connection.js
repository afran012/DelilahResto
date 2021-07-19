const Sequelize = require('sequelize')
const path = 'mysql://root:@localhost:5432/RestauratDB'

const sequelize = new Sequelize(path, {
    dialect: 'mysql',
    operatorsAliases: 0 ,
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado.');
    }).catch(err => {
        console.error('Error de conexion:', err);
    })

module.exports = sequelize;