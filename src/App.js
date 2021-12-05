import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import React, {useState} from 'react'
import TextForm from './component/TextForm';
import About from './component/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000)
  }
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
