const sequelize = require('../db_connection_data')
const sqlQueries = require('../database/sql')

const createOrder = async (req, res) =>{
    const { StateID = 1, orderHour, paymentType ="Cash", userID, productIDS } = req.body
    let arrayInsertOrder = [ `${StateID}`, `${orderHour}`, `${paymentType}`, `${userID}` ]

    try {    
        const result = await sequelize.query('INSERT INTO Orders(StateID, OrderHour, PaymentType, UserID) VALUES( ?, ?, ?, ? ); ',
        {replacements: arrayInsertOrder , type: sequelize.QueryTypes.INSERT })

        // The insert Query does not retrieve the generated order id, therefor, we use currval to obtain the inserted id  

        let orderID = await sequelize.query("SELECT currval ('orders_orderid_seq')",
        { type: sequelize.QueryTypes.SELECT })
        orderID = orderID[0].currval

        // Now we start dynamically inserting the products associated to the order  
        productIDS.forEach(async (productID) => {
                let arrayInsertProductOrder = [ `${orderID}` ,`${productID}` ]
                await sequelize.query('INSERT INTO ProductOrder( orderID , productID ) VALUES( ?, ? )',
                {replacements: arrayInsertProductOrder , type: sequelize.QueryTypes.INSERT })
            })
        
        res.status(201).json({
            message: 'Orden creada',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}

const getOrders = async (req, res) =>{
    try {
        const result = await sequelize.query(sqlQueries.sqlOrdersList, 
            {type: sequelize.QueryTypes.SELECT})
        res.status(200).json({
            message: 'Ordenes existentes',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const deleteOrder = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM Orders WHERE OrderID = ${req.params.id}`)
        res.status(204).json({
            'msg':true,
            message: 'orden eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateOrder = async (req, res) =>{
    const { stateId, orderHour, paymentType ="Cash", userID  } = req.body

    try {
        const result = await sequelize.query(`UPDATE Orders 
        SET stateId = ${stateId} ,  orderHour = '${orderHour}' , 
        paymentType = '${paymentType}' ,  userID = '${userID}'
        WHERE OrderID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        res.status(204).json({
            message: 'Orden actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getOrderById = async (req, res) =>{

    try {

        const query = sqlQueries.detailOrderQuery(req.params.id)

        const result = await sequelize.query(query, {type: sequelize.QueryTypes.SELECT})

        res.status(200).json({
            message: 'Orden encontrada:',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const getOrderByUserID = async (req, res) =>{

    try {

        const query = sqlQueries.detailOrderQueryByUser(req.params.id)

        const result = await sequelize.query(query, {type: sequelize.QueryTypes.SELECT})

        res.status(200).json({
            message: 'Orden encontrada:',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateState = async (req, res) =>{
    const { stateId } = req.body

    try {
        const result = await sequelize.query(`UPDATE Orders 
        SET stateID = '${stateId}'
        WHERE OrderID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        res.status(204).json({
            message: 'Estado actulizado',
            'data': result
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

exports.createOrder = createOrder
exports.getOrders = getOrders
exports.deleteOrder = deleteOrder
exports.updateOrder = updateOrder
exports.getOrderById = getOrderById
exports.updateState = updateState
exports.getOrderByUserID = getOrderByUserID