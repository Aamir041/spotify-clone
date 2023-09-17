import './App.css'
import "./output.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LoginComponent from './routes/LoginComponent/LoginComponent'

function App() {

  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
          <Routes> {/* Adding Routes Indicate that we are defining routes here*/}
            <Route path ="/" element={<div>Hello World</div>} />
            <Route path ="/login" element={<LoginComponent/>} />
            
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
