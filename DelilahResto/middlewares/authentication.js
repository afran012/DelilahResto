const express = require('express')
require('dotenv').config()
express.Router()

const jwt = require('jsonwebtoken');
const JwtSecretKey = process.env.key_token
const userController = require('../controllers/user.controller');

const validadteUserCredentials = async ( req, res, next ) => {
    const { userName , password } = req.body
    try {
        const findUser = await  userController.validateUser(userName)
        if (!findUser || password !== findUser.password  ){
            return res.status(401).json({ message: "Invalid Credentials" })
        }
        const userState = findUser.stateid
        const payload = { userName, password, userState };
        const jwtToken = jwt.sign(payload, JwtSecretKey, {expiresIn: "15m"});
        process.env.temp_token=jwtToken
        res.status(200).json({token: jwtToken});
        next();            
    } catch (error){
        console.log(error)
    }
}

const validateToken = ( req , res , next ) => {
    const jwtClient = req.headers.authorization;
    try{
        jwt.verify( jwtClient , JwtSecretKey , (error, decoded) => {
            console.log("decoded" , decoded)
            if(error) {
                return res.status(401).json({msg: "Invalid Token"})
            }
            console.log("decoded", decoded)
            next()
        } ); 
    } catch(error) {
        console.log(error)
    }
      
}


const validateAdmin = ( req , res , next ) => {
    let jwtClient = req.headers.authorization

    jwt.verify( jwtClient , JwtSecretKey , (error, decoded) => {
        if(error) {
            return res.status(401).json({msg: "Invalid Token"})
        }
        if (decoded.userState != 2) {
            return res.status(401).json({ message: "Permission Denied" })
        }
        next()
    } );   
}

exports.validadteUserCredentials = validadteUserCredentials
exports.validateToken = validateToken
exports.validateAdmin = validateAdmin

