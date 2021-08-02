const  db_data =  {
    conf_db_host  : 'localhost', // host
    conf_db_name  : 'RestaurantDB', // database name
    conf_user     : 'postgres',           // user name
    conf_password : 'admin',               // password
    conf_port     : '5432'           // port number
}

const Sequelize   = require('sequelize');
const sequelize   = new Sequelize( db_data.conf_db_name, db_data.conf_user, db_data.conf_password, { 
    host: db_data.conf_db_host,
    dialect: 'postgres',
    port: db_data.conf_port,
    dialectOptions: {
        multipleStatements: true
    }
});


sequelize.authenticate()
    .then(() => {
        console.log('Conect post.');
    }).catch(err => {
        console.error('Error de conexion:', err);
})

module.exports    = sequelize;