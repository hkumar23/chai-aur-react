import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  return (
    <>
      <h1 className='bg-green-400 mb-4 p-4 rounded-xl text-black'>Tailwind CSS</h1>
      <div className='flex flex row'>
        <Card username="Harsh"/>
        <Card username="Saurabh" btntext="Click Here"/>
      </div>
    </>
  )
}

export default App
