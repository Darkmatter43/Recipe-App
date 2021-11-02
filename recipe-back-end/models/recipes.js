const mongoose=require('mongoose')

const recipeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    desription:String,
    servings:Number,
    time:Number,
    ingredients:Array,
    preparation:String,
    image:String,
    tags:Array
})


const Recipe=mongoose.model('recipe',recipeSchema)


module.exports=Recipe