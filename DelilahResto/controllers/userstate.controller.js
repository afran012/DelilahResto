// This module enabes CRUD operation on the User State
//const sequelize = require('../connection')
const sequelize = require('../db_connection_data')

const createUserState = async (req, res) =>{
    const { Name } = req.body

    let arrayInsertUserState = [ `${Name}` ]


    console.log("arrayInsertUserState",arrayInsertUserState)

    try {
        const result = await sequelize.query('INSERT INTO UserState(Name) VALUES( ? )',
        {replacements: arrayInsertUserState , type: sequelize.QueryTypes.INSERT })
        
        console.log(`inserción ${result}`)
        res.status(201).json({
            message: 'Estado de Usuario creada',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}


const getUserState = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * from UserState os`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({
            message: 'Estados de usuarios existentes',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


const deleteUserState = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM UserState WHERE StateID = ${req.params.id}`)
        console.log(req.params.id)
        console.log( "result" , result )
        res.status(204).json({
            'msg':true,
            message: 'Estado de orden eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateUserState = async (req, res) =>{
    const { Name  } = req.body
    console.log("req.body" , req.body)

    try {
        const result = await sequelize.query(`UPDATE UserState 
        SET Name = '${Name}'
        WHERE StateID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        console.log(result)
        res.status(204).json({
            message: 'Estado de Orden actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}



const getUserStateById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM UserState 
        WHERE StateID = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({
            message: 'Estado de Orden encontrada:',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


exports.createUserState = createUserState
exports.getUserState = getUserState
exports.deleteUserState = deleteUserState
exports.updateUserState = updateUserState
exports.getUserStateById = getUserStateById

