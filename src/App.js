import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Blog } from './Pages/Blog';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { Nadi } from './Pages/Nadi';
import { Genuie } from './Pages/Genuie';
import { Original } from './Pages/Original';
import { Acure } from './Pages/Acure';
import { Novambar } from './Pages/Novambar';
import { Octobar } from './Pages/Octobar';
import { Accurate } from './Pages/Accurate';
import { All } from './Pages/All';
import { Genuineastro } from './Pages/Genuineastro';
import { Originalnadi } from './Pages/Originalnadi';

import Astrocard from './Box/Astrocard';
import { New } from './Pages/New';
import { Homes } from './Pages/Homes';



function App() {
  return (
   <div>
    <Navbar/>
   
    <Routes>
   
    <Route path='/' element={<Homes/>}/>
    <Route path='/about' element={<About/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/nadi' element={<Nadi/>}/>
       <Route path='/genuine' element={<Genuie/>}/>
  <Route path='/original' element={<Original/>}/>
<Route path='/acure' element={<Acure/>}/>
<Route path='/novambar' element={<Novambar/>}/>
<Route path='/octobar' element={<Octobar/>}/>
<Route path='/accurate' element={<Accurate/>}/>
<Route path='/all' element={<All/>}/>
<Route path='/genuineastro' element={<Genuineastro/>}/>
<Route path="/originalnadi" element={<Originalnadi/>}/>
      
    </Routes>
   
    </div>
    
  );
}

export default App;
