const sequelize = require('../connection')

const createProduct = async (req, res) =>{
    const { ProductName, ProductPrice } = req.body
    console.log(req.body)

    let arrayInsertProduct = [ `${ProductName}` ,`${ProductPrice}` ]


    console.log("arrayInsertProduct",arrayInsertProduct)

    try {
        const result = await sequelize.query('INSERT INTO Products( ProductName , ProductPrice ) VALUES( ?, ? )',
        {replacements: arrayInsertProduct , type: sequelize.QueryTypes.INSERT })
        
        console.log(`inserción ${result}`)
        res.status(201).json({
            message: 'Productos creado',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
        res.status(500).json({error})
    }
}


const getProduct = async (req, res) =>{
    try {
        const result = await sequelize.query(`SELECT * from Products p`, {type: sequelize.QueryTypes.SELECT})
        console.log(result)
        res.status(200).json({
            message: 'Productos existentes',
            'msg':true,
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}


const deleteProduct = async (req, res) =>{
    
    try {
        const result = await sequelize.query(`DELETE FROM Products WHERE ProductID = ${req.params.id}`)
        console.log(req.params.id)
        console.log( "result" , result )
        res.status(204).json({
            'msg':true,
            message: 'EProducto eliminado',
            'data': result
        })
    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}

const updateProduct = async (req, res) =>{
    const { ProductName, ProductPrice  } = req.body
    console.log("req.body" , req.body)

    try {
        const result = await sequelize.query(`UPDATE Products 
        SET ProductName = '${ProductName}' , ProductPrice = '${ProductPrice}' 
        WHERE ProductID = ${req.params.id}`,
        { type: sequelize.QueryTypes.INSERT })

        console.log(result)
        res.status(204).json({
            message: 'Producto Actulizado'
    })

    } catch (error) {
        console.log(`error en la inserción ${error}`)
    }
}



const getProductById = async (req, res) =>{

    try {
        const result = await sequelize.query(`SELECT * FROM Products 
        WHERE ProductID = ${req.params.id}`, 
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


exports.createProduct = createProduct
exports.getProduct = getProduct
exports.deleteProduct = deleteProduct
exports.updateProduct = updateProduct
exports.getProductById = getProductById

