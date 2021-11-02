const express=require('express')
const router=express.Router()
const Recipe=require('../models/recipes.js')


router.get('/',(req,res)=>{
    Recipe.find({},(err,foundRecipe)=>{
        res.json(foundRecipe)
    })
})

router.post('/',(req,res)=>{
    Recipe.create(req.body,(err,createdRecipe)=>{
        res.json(createdRecipe)
    })
})

router.delete('/:id',(req,res)=>{
    Recipe.findByIdAndRemove(req.params.id,(err,deletedRecipe)=>{
        res.json(deletedRecipe)
    })
})

router.put('/:id',(req,res)=>{
    Recipe.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,updatedRecipe)=>{
        res.json(updatedRecipe)
    })
})


module.exports=router