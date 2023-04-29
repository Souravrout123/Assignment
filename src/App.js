/** @format */

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import RegistarationForm from "./component/RegistrationForm";
import Details from "./component/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<RegistarationForm />} />
        <Route exact path="details" element={<Details />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
