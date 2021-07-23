const sequelize = require('../connection')

const createUser = async (req, res) =>{
    const { UserName, FullName, Password, Address, PhoneNumber, Email, StateID=1 } = req.body

    let arrayInsertUser = [ `${UserName}`, `${FullName}`, `${Password}`, `${Address}`, `${PhoneNumber}`, `${Email}`, `${StateID}`]


    console.log("arrayInsertUser",arrayInsertUser)

    try {
        const user = await sequelize.query('INSERT INTO Users(UserName, FullName, Password, Address, PhoneNumber, Email, StateID) VALUES( ?, ?, ?, ?, ?, ?, ?)',
        {replacements: arrayInsertUser , type: sequelize.QueryTypes.INSERT })
        
        console.log(`inserción ${user}`)
        res.status(201).json({
            message: 'usuaruio creado',
            'msg':true,
            'data': user
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}

const getUsers = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT u.username from Users u`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({
            message: 'usuaruio creado',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


const deleteUser = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM Users WHERE UserID = ${req.params.id}`)
        res.status(204).json({
            message: 'usuaruio eliminada',
            result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}



exports.createUser = createUser
exports.getUsers = getUsers
exports.deleteUser = deleteUser