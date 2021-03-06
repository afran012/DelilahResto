const sequelize = require('../db_connection_data')
const createProductOrder = async (req, res) =>{
    const { orderID , productID } = req.body

    let arrayInsertProductOrder = [ `${orderID}` ,`${productID}` ]

    try {
        const result = await sequelize.query('INSERT INTO ProductOrder( orderID , productID ) VALUES( ?, ? )',
        {replacements: arrayInsertProductOrder , type: sequelize.QueryTypes.INSERT })
        
        res.status(201).json({
            message: 'Orden de productos creada',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}

const getProductOrder = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * from ProductOrder po`, {type: sequelize.QueryTypes.SELECT})

        res.status(200).json({
            message: 'ordenes de productos existentes',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const deleteProductOrder = async (req, res) =>{    
    try {
        const result = await sequelize.query(`DELETE FROM ProductOrder WHERE ProductOrderID = ${req.params.id}`)
        res.status(204).json({
            'msg':true,
            message: 'Estado de orden eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateProductOrder = async (req, res) =>{
    const { orderID , productID   } = req.body

    try {
        const result = await sequelize.query(`UPDATE ProductOrder 
        SET orderID = '${orderID}' , productID = '${productID}' 
        WHERE ProductOrderID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })
        res.status(204).json({
            message: 'Orden Productos Actulizado'
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}



const getProductOrderById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM ProductOrder 
        WHERE ProductOrderID = ${req.params.id}`, 
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

exports.createProductOrder = createProductOrder
exports.getProductOrder = getProductOrder
exports.deleteProductOrder = deleteProductOrder
exports.updateProductOrder = updateProductOrder
exports.getProductOrderById = getProductOrderById

