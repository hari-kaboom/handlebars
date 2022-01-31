const express = require('express')
const app=require('express')
const template= app()
let tasks=['maths']
template.use(express.urlencoded({extended:true}))
template.set('view engine','hbs')
template.get('/',(req,res)=>{
    res.render('home',{title:'todo',
    tasks
                    
})
})
template.post('/tasklists',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')

    
})
template.listen(3000,()=>{

})