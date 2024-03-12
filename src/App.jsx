import './App.css';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Works from './components/Works.jsx';
import { GalleryProvider } from './providers/GalleryContext.jsx';
import { SectionsProvider } from './providers/SectionsContext.jsx';

import { works } from "./data/works.json";

const App = () => 
{
  return (
    <div id="app">
      <SectionsProvider>
        <Navbar/>
      </SectionsProvider>
      <Home/>
      <GalleryProvider items={works}>
        <Works/>
      </GalleryProvider>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
