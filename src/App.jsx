import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/1Accordian/Accordion'
import RandomColor from './components/2RandomColor/RandomColor'
import StarRating from './components/3StarRating/StarRating'
import ImageSlider from './components/4ImageSlider/ImageSlider'

function App() {

  return (
   <>
   <div className='mainApp'>

 {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

   <Accordion />
   <RandomColor />
   <StarRating noOfStarts={10} />
   <ImageSlider url={"https://picsum.photos/v2/list"} limit={10}/>
   </div>
   </>
  )
}

export default App
