const express = require('express')
require('dotenv').config()
express.Router()
const jwt = require('jsonwebtoken');
const JwtSecretKey = process.env.key_token
const userController = require('../controllers/user.controller');//validateUser

const validadteUserCredentials = async ( req, res, next ) => {
    const { userName , password } = req.body
    //console.log( "req.body" , req.body)
    //console.log("process.env.key_token" , process.env.key_token)
    //console.log("JwtSecretKey", JwtSecretKey)
    try {
        const findUser = await  userController.validateUser(userName)
        if (!findUser || password !== findUser.password  ){
            return res.status(401).json({ message: "Invalid Credentials" })
        }
        const userState = findUser.stateid
        const payload = { userName, password, userState };
        const jwtToken = jwt.sign(payload, JwtSecretKey, {expiresIn: "15m"});
        //console.log("jwtToken" , jwtToken)
        process.env.temp_token=jwtToken
        //console.log("process.env.temp_token" , process.env.temp_token)

        res.status(200).json({token: jwtToken});
        //req.token = jwtToken
        //console.log("Usuario Validado")
        next();            

    } catch (error){
        console.log(error)
    }
}

const validateToken = ( req , res , next ) => {
    //const token = req.headers["authorization"];
    const jwtClient = req.headers.authorization
    //const jwtClient = token.split(" ")[1];
    //console.log("token" , token)
    try{
        jwt.verify( jwtClient , JwtSecretKey , (error, decoded) => {
            console.log("decoded" , decoded)
            if(error) {
                return res.status(401).json({msg: "Invalid Toker"})
            }
            console.log("decoded", decoded)
            next()
        } ); 
    } catch(error) {
        console.log(error)
    }
      
}


const validateAdmin = ( req , res , next ) => {
    
    //let token = req.headers.authorization.split(" ")[0];
    let jwtClient = req.headers.authorization

    jwt.verify( jwtClient , JwtSecretKey , (error, decoded) => {
        if(error) {
            return res.status(401).json({msg: "token invalido"})
        }
        //console.log(decoded.userState)
        if (decoded.userState != 2) {
            return res.status(401).json({ message: "Permission Denied" })
        }
        next()
    } );   
}

exports.validadteUserCredentials = validadteUserCredentials
exports.validateToken = validateToken
exports.validateAdmin = validateAdmin

