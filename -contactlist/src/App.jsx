import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //create a state
  const [state, setState] = useState([])//[] because we want to return a list
//need to fetch data api
  useEffect(() => {
    const fetcher = async () => {
      const data = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      const array = await data.json()
      console.log(array)//array of 10 objects with id, name, username
      setState(array)
    }
    fetcher()//gotta call the function to see it in console
  },[])
  
  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
