
import { useState } from 'react';
import Alert from './Alert';
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [alert, setAlert]=useState(null);
  const [mlabel, setmlabel]=useState('Enable Dark Mode');
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  const toggleMode =()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#251e44';
      showAlert("Dark mode has been enabled","success");
      document.title="BingoHome-Dark Mode";
      setmlabel("Enable light mode");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title="BingoText"
      setmlabel('Enable dark mode');
      
    }

  }
  return (
    <>
    <Router>
    <Navbar  title="Bingo Text Playground" about="About BingoTP" mode={mode} toggleMode={toggleMode} mlabel={mlabel}/> 
    <Alert alert={alert}/>   
    <div className="container">
    <Routes>
  <Route exact path="/" element={<TextForm heading="Enter Your text Here to play with it" mode={mode} showAlert={showAlert} />}/>
  
  <Route exact path="about" element={<About mode={mode} />} />
</Routes>
    
    
        
  
    </div>
    </Router>
    

    </>
    
    
  );
}

export default App;
