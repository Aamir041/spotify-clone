import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginComponent from "./routes/LoginComponent";
import SignupComponent from "./routes/SignupComponent"
import HomeComponent from "./routes/Home";
function App() {
  return (
    <div className="app w-screen h-screen font-poppins">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1 className="bg-blue-500">Hello</h1>}/>
            <Route path="/login" element={<LoginComponent/>} />
            <Route path="/signup" element={<SignupComponent/>} />
            <Route path="/home" element={<HomeComponent/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
