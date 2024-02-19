const express = require('express');
const route = express.Router();

route.get('/',(request,response,next)=>{
    response.status(200).json({
        msg:'This is faculty data a/c to name'
    })
})

module.exports=route;