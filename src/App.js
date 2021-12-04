import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import React, {useState} from 'react'
import TextForm from './component/TextForm';

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
    <>
      <Navbar title="TextUtils"/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert}/>
    </>
  );
}

export default App;
