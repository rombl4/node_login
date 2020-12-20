const express = require('express');
const router = express.Router();
const User = require('../models/User');
router.get('/login',(req,res)=> res.render("login"));
router.get('/register',(req,res)=> res.render("register"));


//register hndle
router.post('/register', (req,res)=>{
    //console.log(req.body)
    const {name,email,password,password2}=req.body
    const newUser = new User ({
        name,
        email,
        password
    })
    newUser.save()

})

module.exports = router