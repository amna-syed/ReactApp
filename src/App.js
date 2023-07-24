import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable DarkMode");

  const toggleClick = () => {
    if (mode === "dark") {
      setMode("light");
      setText("Enable Dark Mode ");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode enabled", "success");
      document.title = "TextUtils - Light Mode";
    } else {
      setMode("dark");
      setText("Disable Dark Mode");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title={"TextUtils"} aboutus="About Us" mode={mode} toggleClick={toggleClick} text={text} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route path="/" element={ */}
            <TextBox showAlert={showAlert} heading="Enter your text below:" mode={mode} />
            {/* } /> */}
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
