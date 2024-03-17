import './App.css';

import { SectionsProvider } from './providers/SectionsContext.jsx';
import { WorkProvider } from './providers/WorkContext.jsx';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Works from './components/Works/Works.jsx';
import Contact from './components/Contacts/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => 
{
  return (
    <div id="app">
      <SectionsProvider>
        <Navbar/>
      </SectionsProvider>
      <Home/>
      <WorkProvider>
        <Works/>
      </WorkProvider>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
