const sequelize = require('../connection')

const createOrder = async (req, res) =>{
    const { StateID, OrderHour, PaymentType ="Cash", UserID } = req.body

    let arrayInsertOrder = [ `${StateID}`, `${OrderHour}`, `${PaymentType}`, `${UserID}` ]


    console.log("arrayInsertOrder",arrayInsertOrder)

    try {
        const result = await sequelize.query('INSERT INTO Orders(StateID, OrderHour, PaymentType, UserID) VALUES( ?, ?, ?, ? )',
        {replacements: arrayInsertOrder , type: sequelize.QueryTypes.INSERT })
        
        console.log(`inserción ${result}`)
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
        const result = await sequelize.query(`SELECT * from Orders o`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
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
        console.log(req.params.id)
        console.log( "result" , result )
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
    const { StateID, OrderHour, PaymentType ="Cash", UserID  } = req.body
    console.log("req.body" , req.body)

    try {
        const result = await sequelize.query(`UPDATE Orders 
        SET StateID = '${StateID}',  OrderHour = '${OrderHour}', 
        PaymentType = '${PaymentType}',  UserID = '${UserID}'
        WHERE OrderID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        console.log(result)
        res.status(204).json({
            message: 'Orden actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}



const getOrderById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM Orders 
        WHERE OrderID = ${req.params.id}`, 
        {type: sequelize.QueryTypes.SELECT})
        console.log(result)
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
    const { StateID } = req.body
    console.log("req.body" , req.body)

    try {
        const result = await sequelize.query(`UPDATE Orders 
        SET StateID = '${StateID}'
        WHERE OrderID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        console.log(result)
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