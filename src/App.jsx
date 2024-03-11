import './App.css';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Works from './components/Works.jsx';

const App = () => 
{
  return (
    <div id="app">
      <Navbar/>
      <Home/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
