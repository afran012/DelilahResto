// This module enabes CRUD operation on the User. For example creating a new user

const sequelize = require('../connection')

const createUser = async (req, res) =>{
    const { userName, fullName, password, address, phoneNumber, email, stateID=1 } = req.body

    let arrayInsertUser = [ `${userName}`, `${fullName}`, `${password}`, `${address}`, `${phoneNumber}`, `${email}`, `${stateID}`]


    console.log("arrayInsertUser",arrayInsertUser)

    try {
        let exist = await sequelize.query(`SELECT u.userName 
        FROM Users u WHERE username = '${userName}'`,
        {type: sequelize.QueryTypes.SELECT})
        if (exist[0]) {
            console.log("exist" , exist[0])
            return res.status(401).json({msg: "Existing user"})
        }

        const user = await sequelize.query('INSERT INTO Users(UserName, FullName, Password, Address, PhoneNumber, Email, StateID) VALUES( ?, ?, ?, ?, ?, ?, ?)',
        {replacements: arrayInsertUser , type: sequelize.QueryTypes.INSERT } , { raw: true });
        console.log("user" , user)
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
        const result = await sequelize.query(`SELECT u.username from Users u`, 
        {type: sequelize.QueryTypes.SELECT});
        console.log("result" , result)
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
    const { userName, fullName, password, address, phoneNumber, email, stateID=1 } = req.body
    console.log("req.body" , req.body)
    console.log("req.body" , req.params.id)

    try {
        const result = await sequelize.query(`UPDATE Users 
        SET userName = '${userName}',  fullName = '${fullName}', 
        password = '${password}',  address = '${address}', 
        phoneNumber = '${phoneNumber}', email = '${email}', 
        stateID = ${stateID} WHERE UserID = ${req.params.id}`,
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

const validateUser = async (user) => {
    //const { user , password } = req.body
    //console.log( "UserName" , UserName )
    console.log( "user" , user )
    try {
        const result = await sequelize.query(`SELECT u.password , u.stateid 
        FROM Users u WHERE username = '${user}'`, 
        {type: sequelize.QueryTypes.SELECT})


        console.log("result[0]" , result[0])
        /*
        res.status(200).json({
            message: 'usuario:',
            'msg':true,
            'data': result

        })*/
        return result[0]
    } catch (error){
        console.log(`Error ${error}`)
    }
}

const loginUser = async (req, res) =>{
    console.log("Validando Usuario")

}


exports.createUser = createUser
exports.getUsers = getUsers
exports.deleteUser = deleteUser
exports.updateUser = updateUser
exports.getUsersById = getUsersById
exports.validateUser = validateUser
exports.loginUser = loginUser