const Sequelize = require('sequelize')
/* Use MAriaDB Server
const path = 'mysql://admin:password@localhost:3306/Restaurant'
const sequelize = new Sequelize(path, {
    dialect: 'mysql',
    operatorsAliases: 0 ,
    logging: false
});
*/

//postgres

const path = 'postgres://postgres:admin@localhost:5432/RestaurantDB'
const sequelize = new Sequelize(path, {
    dialect: 'mysql',
    operatorsAliases: 0 ,
    logging: false
});


sequelize.authenticate()
    .then(() => {
        console.log('Conectado.');
    }).catch(err => {
        console.error('Error de conexion:', err);
    })

module.exports = sequelize;