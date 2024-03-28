const express = require('express')
const router= express.Router()

//listen
router.get('/', function(req,res,next){
    const id= req.params.id
    res.send(`vous avez demander l'api n°${id}`)
})