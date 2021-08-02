const sequelize = require('../db_connection_data')

const createOrderState = async (req, res) =>{
    const { Name } = req.body

    let arrayInsertOrderState = [ `${Name}` ]

    try {
        const result = await sequelize.query('INSERT INTO OrderState(Name) VALUES( ? )',
        {replacements: arrayInsertOrderState , type: sequelize.QueryTypes.INSERT })
        
        res.status(201).json({
            message: 'Estado de Orden creada',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}


const getOrderState = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * from OrderState os`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({
            message: 'Estados de ordenes existentes',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


const deleteOrderState = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM OrderState WHERE StateID = ${req.params.id}`)
        res.status(204).json({
            'msg':true,
            message: 'Estado de orden eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateOrderState = async (req, res) =>{
    const { Name  } = req.body

    try {
        const result = await sequelize.query(`UPDATE OrderState 
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

const getOrderStateById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM OrderState 
        WHERE StateID = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({
            message: 'Estado de Orden encontrada:',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

exports.createOrderState = createOrderState
exports.getOrderState = getOrderState
exports.deleteOrderState = deleteOrderState
exports.updateOrderState = updateOrderState
exports.getOrderStateById = getOrderStateById

