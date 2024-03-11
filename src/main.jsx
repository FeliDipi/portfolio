import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Gradient } from './assets/background/Gradient.js';

const gradient = new Gradient();
gradient.initGradient('#canvas-bg');

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
