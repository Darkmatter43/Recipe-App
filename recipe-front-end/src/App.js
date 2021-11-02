import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Create from './components/create';

function App() {
  const [recipe,setRecipe]=useState()
  const [newName,setName]=useState()
  const [newDescription,setDescription]=useState()
  const [newServings,setServings]=useState()
  const [newTime,setTime]=useState()
  const [newIngredients,setIngredients]=useState()
  const [newPrep,setPrep]=useState()
  const [newImg,setImg]=useState()
  const [newTags,setTags]=useState()

    // This doesn't work yet
    // const getRecipe=()=>{
    //   axios.get('http://localhost:3001/recipes').then((response)=>{
    //     setRecipe(response.data.name)
    //   })
    // }

    // useEffect(()=>{
    //   getRecipe()
    // },[])
  return (
    <main>
      <h1>Testing</h1>
      {recipe}
    </main>
  );
}

export default App;
