import { Routes, Route, Link } from "react-router-dom"
import Login from "./pages/Login"

function App() {

  return (
    <>
    <Routes>
      <Route path="/user/login" element={<Login />}></Route>
    </Routes>
    </>
  )
}

export default App