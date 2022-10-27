import { Routes, Route, Link } from "react-router-dom";
import AllViews from "./pages/AllViews";
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {

  return (
    <>
      <AllViews />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App