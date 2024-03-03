import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/accordian/Accordion'
import RandomColor from './components/RandomColor/RandomColor'

function App() {

  return (
   <>
   <Accordion />
   <RandomColor />
   </>
  )
}

export default App
