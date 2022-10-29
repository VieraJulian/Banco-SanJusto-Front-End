import { Routes, Route, Link } from "react-router-dom";
import AllViews from "./pages/AllViews";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";


function App() {

  return (
    <>
      <AllViews />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
      </Routes>
    </>
  )
}

export default App