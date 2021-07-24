const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const PORT = 4000
const cors = require('cors')
const sequelize = require('./connection')


// Routes
const usersRoutes = require('./routers/user.routers')
const ordersRoutes = require('./routers/orders.routers')
const orderStateRoutes = require('./routers/orderstate.routers')
const ProductorderRoutes = require('./routers/productorder.routers')
const ProductsRoutes = require('./routers/products.routers')
const userStateRoutes = require('./routers/userstate.routers')

//Middleware
const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
//Middleware

// Routes use

app.use('/api/v1/users', usersRoutes)
app.use('/api/v1/orders', ordersRoutes)
app.use('/api/v1/orderstate', orderStateRoutes)
app.use('/api/v1/productorder', ProductorderRoutes)
app.use('/api/v1/products', ProductsRoutes)
app.use('/api/v1/userstate', userStateRoutes)


//Server
app.listen(PORT, ()=>{
    console.log(`Server started in the ${PORT}`);
 })

 exports.app = app