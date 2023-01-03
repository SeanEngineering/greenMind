import { useState } from 'react'
import reactLogo from './assets/react.svg'
import style from './styles/App.module.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Components
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';


function App() {
  const [count, setCount] = useState(0)
  const navTitles: Array<string> = ['home', 'schedules', 'plants', 'notifications', 'usage']

  return (
    <BrowserRouter>
    <div className={style.main}>
      <Nav title={navTitles}/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/schedules" element={<Hero/>} />
        <Route path="/plants" element={<Hero/>} />
        <Route path="/notifications" element={<Hero/>} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
