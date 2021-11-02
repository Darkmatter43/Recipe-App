import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Create = (props) => {
     const [recipes,setRecipes]=useState([])
     const [newName,setName]=useState()
     const [newDescription,setDescription]=useState()
     const [newServings,setServings]=useState()
     const [newTime,setTime]=useState()
     const [newIngredients,setIngredients]=useState()
     const [newPrep,setPrep]=useState()
     const [newImg,setImg]=useState()
     const [newTags,setTags]=useState()

     const handleName = (event) => {
          setName(event.target.value)
     }

     const handleDescription = (event) => {
          setDescription(event.target.value)
     }

     const handleServings = (event) => {
          setServings(event.target.value)
     }

     const handleTime = (event) => {
          setTime(event.target.value)
     }

     const handleIngredients = (event) => {
          setIngredients(event.target.value)
     }

     const handlePreparation = (event) => {
          setPrep(event.target.value)
     }

     const handleImage = (event) => {
          setImg(event.target.value)
     }

     const handleTags = (event) => {
          setTags(event.target.value)
     }

     const handleFormSubmit = (event) => {
          event.preventDefault()
          axios.post(
               'http://localhost:3001/recipes',
               {
                    name: newName,
                    description: newDescription,
                    servings: newServings,
                    time: newTime,
                    ingredients: newIngredients,
                    preparation: newPrep,
                    image: newImg,
                    tags: newTags
               }
          ).then(() => {
               axios
                    .get('http://localhost:3001/recipes')
                    .then((response) => {
                         setRecipes(response.data)
                    })
          })
     }

     useEffect(() => {
          axios
               .get('http://localhost:3001/recipes')
               .then((response) => {
                    setRecipes(response.data)
               })
     }, [])

     const handleDelete = (recipe) => {
          axios
               .delete(`http://localhost:3001/recipes/${recipe._id}`)
               .then((response) => {
                    axios
                         .get('http://localhost:3001/recipes')
                         .then((response) => {
                              setRecipes(response.data)
                         })
               })
     }

     const handleUpdate = (recipe) => {
          console.log('anything');
          // event.preventDefault()
          axios
               .put(
                    `http://localhost:3001/recipes/${recipe._id}`,
                    {
                         name: newName || recipe.name,
                         description: newDescription || recipe.description,
                         servings: newServings || recipe.servings,
                         time: newTime || recipe.time,
                         ingredients: newIngredients || recipe.ingredients,
                         preparation: newPrep || recipe.prep,
                         image: newImg || recipe.img,
                         tags: newTags || recipe.tags
                    }
               ).then((response) => {
                    axios
                         .get('http://localhost:3001/recipes')
                         .then((response) => {
                              setRecipes(response.data)
                         })
               })
     }


     return (
          <main>
               <section>
                    <h2>Add a Recipe!</h2>
                    <form onSubmit={handleFormSubmit}>
                         Recipe name: <input type="text" onChange={handleName}/><br/>
                         Description: <input type="text" onChange={handleDescription}/><br/>
                         Servings: <input type="text" onChange={handleServings} placeholder="how many people does this serve?"/><br/>
                         Time: <input type="text" onChange={handleTime} placeholder="how long does it take to make? Ex. 25 minutes, 1 hour"/><br/>
                         Ingredients: <input type="text" onChange={handleIngredients}/><br/>
                         Preparation: <input type="text" onChange={handlePreparation}/><br/>
                         Image: <input type="text" onChange={handleImage}/><br/>
                         Tags: <input type="text" onChange={handleTags}/><br/>
                         <input type="submit" value="Add Recipe"/>
                    </form>
               </section>
               <section>
                    <h2>Recipes</h2>
                    <ul>
                         {
                              recipes.map((recipe) => {
                                   return (<li key={recipe._id}>
                                        {
                                             recipe.name
                                        } <br/>
                                        {
                                             recipe.description
                                        }
                                        <form onSubmit={ () => { handleUpdate(recipe)} }>
                                             Recipe name: <input type="text" onChange={handleName}/><br/>
                                             Description: <input type="text" onChange={handleDescription}/><br/>
                                             Servings: <input type="text" onChange={handleServings} placeholder="how many people does this serve?"/><br/>
                                             Time: <input type="text" onChange={handleTime} placeholder="how long does it take to make? Ex. 25 minutes, 1 hour"/><br/>
                                             Ingredients: <input type="text" onChange={handleIngredients}/><br/>
                                             Preparation: <input type="text" onChange={handlePreparation}/><br/>
                                             Image: <input type="text" onChange={handleImage}/><br/>
                                             Tags: <input type="text" onChange={handleTags}/><br/>
                                             <input type="submit" value="Edit Recipe"/>
                                        </form>
                                        <button onClick={() => { handleDelete(recipe)} }>Delete</button>
                                   </li>)
                              })
                         }
                    </ul>
               </section>
          </main>
     )
}

export default Create
