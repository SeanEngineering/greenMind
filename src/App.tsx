import { useState } from 'react'
import style from './styles/App.module.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

//Components
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import HeroImage from './components/heroImage/HeroImage';
import HeroContent from './components/heroContent/HeroContent';
import Monitor from './components/monitor/Monitor';
import PlantList from './components/plantList/PlantList';
import Control from './components/control/Control';


function App() {
  const [count, setCount] = useState(0)
  const navTitles: Array<string> = ['home', 'schedules', 'monitor', 'plants', 'notifications', 'usage', 'control']

  return (
    <BrowserRouter>
    <div className={style.main}>
      <Nav title={navTitles}/>
      <Routes>
        <Route path="/" element={<Hero>
          <HeroImage/>
          <HeroContent/>
        </Hero>} />
        <Route path="/schedules" element={<Hero>
          <HeroImage />
          <HeroImage />
        </Hero>} />
        <Route path="/monitor" element={<Hero>
          <HeroImage />
          <Monitor />
        </Hero>} />
        <Route path="/plants" element={<Hero>
          <h1>Plants</h1>
          <PlantList plants={[]} />
        </Hero>}/>
        <Route path="/notifications" element={<Hero>
          <HeroImage />
          <HeroImage />
        </Hero>} />
        <Route path="/usage" element={<Hero>
          <HeroImage />
          <HeroImage />
        </Hero>} />
        <Route path="/control" element={<Hero>
            <HeroImage />
            <Control />
          </Hero>}
        />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
