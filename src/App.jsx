import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Gallery from "./pages/gallery/gallery";
import NotFound from "./pages/notFound/notFound";
import Plans from "./pages/plans/plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from './components/Navbar';
import Footer from './components/footer';
const App = () => {
  return (
    <BrowserRouter>
    {/* This Navbar below is not in the route element because i want it to show in all the pages */}
    <Navbar/> 
    <Routes>
      {/* the Routes element makes sure we dynamically render components, that is where we want them to show
        @path: This is the location of the page we are heading to.
        @element: the component we want to render in that path.
      */}

      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='gallery' element={<Gallery/>} />
      <Route path='trainers' element={<Trainers/>} />
      <Route path='plans' element={<Plans/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App