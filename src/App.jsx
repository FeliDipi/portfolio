import './App.css';

import Contact from './components/Contacts/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Works from './components/Works/Works.jsx';

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
