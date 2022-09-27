import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";

function MainFileCrud() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainFileCrud;
