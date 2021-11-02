import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'


function App() {
  const [newName,setName]=useState()
  const [newDescription,setDescription]=useState()
  const [newServings,setServings]=useState()
  const [newTime,setTime]=useState()
  const [newIngredients,setIngredients]=useState()
  const [newPrep,setPrep]=useState()
  const [newImg,setImg]=useState()
  const [newTags,setTags]=useState()


  return (
    <main>
      <h1>Testing</h1>
    </main>
  );
}

export default App;
