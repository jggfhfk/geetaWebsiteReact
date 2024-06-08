import './App.css';
import Nav from './Componenet/Nav/Nav';
import Chapter from './Pages/Chapters/Chapter';
import Main from './Pages/Main/Main';
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect } from 'react';
import Chapter1 from './Pages/Chapter/Chapter1';
import Chapter2 from './Pages/Chapter/Chapter2';
import Chapter3 from './Pages/Chapter/Chapter3';
import Chapter4 from './Pages/Chapter/Chapter4';
import Chapter5 from './Pages/Chapter/Chapter5';
import Chapter6 from './Pages/Chapter/Chapter6';
import Chapter7 from './Pages/Chapter/Chapter7';
import Chapter8 from './Pages/Chapter/Chapter8';
import Chapter9 from './Pages/Chapter/Chapter9';
import Chapter10 from './Pages/Chapter/Chapter10';
import Chapter11 from './Pages/Chapter/Chapter11';
import Chapter12 from './Pages/Chapter/Chapter12';
import Chapter13 from './Pages/Chapter/Chapter13';
import Chapter14 from './Pages/Chapter/Chapter14';
import Chapter15 from './Pages/Chapter/Chapter15';
import Chapter16 from './Pages/Chapter/Chapter16';
import Chapter17 from './Pages/Chapter/Chapter17';
import Chapter18 from './Pages/Chapter/Chapter18';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<Main />} />
        <Route path='/chapters' element={<Chapter />} />
        <Route path='/about' element={<About />} />
        <Route path='/chapters/chapter1' element={<Chapter1/>}/>
        <Route path='/chapters/chapter2' element={<Chapter2/>}/>
        <Route path='/chapters/chapter3' element={<Chapter3/>}/>
        <Route path='/chapters/chapter4' element={<Chapter4/>}/>
        <Route path='/chapters/chapter5' element={<Chapter5/>}/>
        <Route path='/chapters/chapter6' element={<Chapter6/>}/>
        <Route path='/chapters/chapter7' element={<Chapter7/>}/>
        <Route path='/chapters/chapter8' element={<Chapter8/>}/>
        <Route path='/chapters/chapter9' element={<Chapter9/>}/>
        <Route path='/chapters/chapter10' element={<Chapter10/>}/>
        <Route path='/chapters/chapter11' element={<Chapter11/>}/>
        <Route path='/chapters/chapter12' element={<Chapter12/>}/>
        <Route path='/chapters/chapter13' element={<Chapter13/>}/>
        <Route path='/chapters/chapter14' element={<Chapter14/>}/>
        <Route path='/chapters/chapter15' element={<Chapter15/>}/>
        <Route path='/chapters/chapter16' element={<Chapter16/>}/>
        <Route path='/chapters/chapter17' element={<Chapter17/>}/>
        <Route path='/chapters/chapter18' element={<Chapter18/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
