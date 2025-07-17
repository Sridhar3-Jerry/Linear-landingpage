import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Content from './pages/Content'
import Main from './pages/Main'
import Cards from './pages/Cards.Jsx'
import CarouselPage from './pages/Carousel'

function App() {

  return (
    <>
      <Header></Header>
      <Main></Main>
      <CarouselPage></CarouselPage>
      <Cards></Cards>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}

export default App
