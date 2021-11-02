import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Create = (props) => {

     const handleName = () => {
          setName(event.target.value)
     }

     const handleDescription = () => {
          setDescription(event.target.value)
     }

     const handleServings = () => {
          setServings(event.target.value)
     }

     const handleTime = () => {
          setTime(event.target.value)
     }

     const handleIngredients = () => {
          setIngredients(event.target.value)
     }

     const handlePreparation = () => {
          setPreparation(event.target.value)
     }

     const handleImage = () => {
          setImage(event.target.value)
     }

     const handleTags = () => {
          setTags(event.target.value)
     }

     const handleFormSubmit = () => {
          event.preventDefault()
          axios.post(
               'http://localhost:3000/recipes',
               {
                    name: name,
                    description: description,
                    servings: servings,
                    time: time,
                    ingredients: ingredients,
                    preparation: preparation,
                    image: image,
                    tags: tags
               }
          ).then(() => {
               axios
                    .get('http://localhost:3000/recipes')
                    .then((response) => {
                         setRecipes(response.data)
                    })
          })
     }

     useEffect(() => {
          axios
               .get('http://localhost:3000/recipes')
               .then(() => {
                    setRecipes(response.data)
               })
     }, [])


     return (
          <section>
               <h2>Add a Recipe!</h2>
               <form onSubmit={handleFormSubmit}>
                    Recipe name: <input type="text" onChange={handleName}><br/>
                    Description: <input type="text" onChange={handleDescription}><br/>
                    Servings: <input type="text" onChange={handleServings} placeholder="how many people does this serve?"><br/>
                    Time: <input type="text" onChange={handleTime} placeholder="how long does it take to make? Ex. 25 minutes, 1 hour"><br/>
                    Ingredients: <input type="text" onChange={handleIngredients}><br/>
                    Preparation: <input type="text" onChange={handlePreparation}><br/>
                    Image: <input type="text" onChange={handleImage}><br/>
                    Tags: <input type="text" onChange={handleTags}><br/>
                    <input type="submit" value="Add Recipe"/>
               </form>
          </section>
     )
}
