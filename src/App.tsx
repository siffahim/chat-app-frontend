import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage.jsx";
import "./App.css";
import Chatpage from "./pages/Chatpage.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/chat" Component={Chatpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
