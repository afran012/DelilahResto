const sequelize = require('../connection')

const createUser = async (req, res) =>{
    const { UserID, UserName, FullName, Password, Address, PhoneNumber, Email, StateID } = req.body

    let arrayInsertUser = [`${UserID}`, `${UserName}`, `${FullName}`, `${Password}`, `${Address}`, `${PhoneNumber}`, `${Email}`, `${StateID}`]

    try {
        const user = await sequelize.query('INSERT INTO bandas(UserID, UserName, FullName, Password, Address, PhoneNumber, Email, StateID) VALUES( ?, ?, ?, ?, ?, ?, ?, ?)',
        {replacements: arrayInsertUser , type: sequelize.QueryTypes.INSERT })
        res.status(201).json({user})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}

const getUsers = async (req, res) =>{

    try {
        const result = await sequelize.query(`select u.name from users u`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({result})
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


exports.createUser = createUser
exports.getUsers = getUsers