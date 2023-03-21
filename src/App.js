import Donor from "./Components/Donor";
import React from 'react'
import "./App.css"
import LoginSignin from "./Components/LoginSignin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Donar" element={<Donor />} />
          <Route path="/" element={<LoginSignin />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
