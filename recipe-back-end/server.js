const express = require('express')
const app = express()
const cors = require('cors')
const mongoose=require('mongoose')

app.use(express.json())
app.use(cors())

const recipeController=require('./controllers/recipes.js')
app.use('/recipes',recipeController)

app.get('/',(req,res)=>{
    res.redirect('/recipes')
})

app.listen(3001,()=>{
    console.log('listening on port 3001');
})
mongoose.connect('mongodb://localhost:27017/recipeapp')
mongoose.connection.once('open',()=>{
    console.log('connected to mongod...');
})