import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
