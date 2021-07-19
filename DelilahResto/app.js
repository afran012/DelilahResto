const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const PORT = 4000
const cors = require('cors')
const sequelize = require('./conexion')


// Routes
const usersRoutes = require('./routers/user.routes')

//Middleware
const app = express()
app.use(helmet())
app.use(cors())


app.use(express.json())
//Middleware

// Routes use

app.use('/api/users', usersRoutes)

//Server
app.listen(PORT, ()=>{
    console.log(`Server started in the ${PORT}`);
 })

 exports.app = app