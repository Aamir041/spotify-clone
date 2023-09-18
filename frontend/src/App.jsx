import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./routes/LoginComponent";

function App() {
  return (
    <div className="app w-screen h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1 className="bg-blue-500">Hello</h1>}/>
            <Route path="/login" element={<LoginComponent/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
