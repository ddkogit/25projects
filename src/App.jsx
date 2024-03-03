import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/1Accordian/Accordion'
import RandomColor from './components/2RandomColor/RandomColor'
import StarRating from './components/3StarRating/StarRating'

function App() {

  return (
   <>
   <Accordion />
   <RandomColor />
   <StarRating />
   </>
  )
}

export default App
