import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Cart from "./Cart"
import Signup from "./Signup"
import Signin from "./Signin"
import Private from "./Private"
import Admin from "./Admin"

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route element={<Private/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
    </Route>  
      <Route path="signup" element={<Signup/>}/>
      <Route path="signin" element={<Signin/>}/>
      <Route path="admin" element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
