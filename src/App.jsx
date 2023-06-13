import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

const App = () => {
  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail" element={<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
  )
};

export default App;