import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
import Create from './components/create';

function App() {
 
  return (
    <main>
      <h1>Recipes</h1>
      <Create/>
    </main>
  );
}

export default App;
