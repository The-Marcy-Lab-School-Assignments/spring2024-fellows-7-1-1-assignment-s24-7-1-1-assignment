// TODO: Import BrowserRouter and wrap the entire app with it
// import 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RobotProvider from './context/RobotProvider'

/** FEEDBACK: You forgot to wrap app with BrowserRouter! */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RobotProvider>
    <App />
  </RobotProvider>
);
