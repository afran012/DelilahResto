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
            message: 'usuarios existentes',
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
        console.log(req.params.id)
        console.log( "result" , result )
        res.status(204).json({
            'msg':true,
            message: 'usuario eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateUser = async (req, res) =>{
    const { UserName, FullName, Password, Address, PhoneNumber, Email, StateID=1 } = req.body
    console.log("req.body" , req.body)

    try {
        const result = await sequelize.query(`UPDATE Users 
        SET UserName = '${UserName}',  FullName = '${FullName}', 
        Password = '${Password}',  Address = '${Address}', 
        PhoneNumber = ${PhoneNumber}, Email = '${Email}', 
        StateID = ${StateID} WHERE UserID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        console.log(result)
        res.status(204).json({
            message: 'usuario actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


const getUsersById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM Users 
        WHERE UserID = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({
            message: 'usuario:',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

exports.createUser = createUser
exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.updateUser = updateUser
exports.getUsersById = getUsersById