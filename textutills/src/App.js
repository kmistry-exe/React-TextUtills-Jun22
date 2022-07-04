import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#343A40'
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtills--DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtills--LightMode';
    }
  }

  const [alert, setAlert] = useState(null);
  
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);

  }

  return (
    <>
    <Router>
    
      <Navbar title="Textutills22" aboutText="AboutUtills" mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert} />
      
      <div className="container">
        
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route exact path="/" element={<TextForm heading="Try TextUtills | Word counter | Convert Text | Remove extra spaces" mode={mode} showAlert={showAlert}/>}></Route>
        </Routes>
      
      </div>
    
    </Router>
    </>
    
  );
}

export default App;
