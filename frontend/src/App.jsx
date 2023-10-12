import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LoginComponent from "./routes/LoginComponent";
import SignupComponent from "./routes/SignupComponent"
import HomeComponent from "./routes/Home";
import { useCookies } from "react-cookie";
function App() {

  const [cookie,setCookie] = useCookies(["token"]);
  

  return (
    <div className="app w-screen h-screen font-poppins">
        <BrowserRouter>
            {cookie?.token ? (
              // If Cookie Exist go to these routes
              <Routes>
                <Route path="/" element={<h1 className="bg-red-500">Hello</h1>} />
                <Route path="/home" element={<HomeComponent />} />
                {/* For any route that does not exist in above routes use path as "*" */}
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            ) : (
              // If Cookie does not Exist go to these routes
              <Routes>
                <Route path="/login" element={<LoginComponent />} />
                <Route path="/signup" element={<SignupComponent />} />
                <Route path="/home" element={<HomeComponent />} />
                {/* For any route that does not exist in above routes use path as "*" */}
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            )}
        </BrowserRouter>
    </div>
  );
}

export default App;
