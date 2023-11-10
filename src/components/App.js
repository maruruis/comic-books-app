

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import SingleComic from '../Pages/SingleComic';
import AddComic from '../Pages/AddComic';
import 'semantic-ui-css/semantic.min.css';
function App() 
{
// Wrap the entire app in a BrowserRouter component to enable routing
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/> } > 
       <Route index element={<Home />} />
       <Route path='about' element={<About />} />
       <Route path='addcomic' element={<AddComic/>} />
       <Route path='comics/:id' element={<SingleComic />} />
       <Route path='contact' element={<Contact />} />
    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
