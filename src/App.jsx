import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import { PrivateRoute } from "./PrivateRoute/PrivateRoute"
import AddProduct from "./pages/AddProduct"
import UpdateProduct from "./pages/UpdateProduct"
import MyState from "./context/data/myState"

const App = () => {
  return (
    <>
    <MyState>

    <Routes>
      <Route  path="/" element=
      <PrivateRoute>
      {<Home/>} 
      </PrivateRoute>
      />
      <Route  path="/addproduct" element={<AddProduct />} />
      <Route  path="/updateproduct" element={<UpdateProduct />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/signup" element={<Signup />} />

    </Routes>
    </MyState>


    </>
  )
}

export default App