import { Routes, Route, Link } from "react-router-dom";
import AllViews from "./pages/AllViews";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import NewTransaction from "./pages/NewTransaction";
import ChosseCard from "./pages/ChosseCard";


function App() {

  return (
    <>
      <AllViews />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/transactions" element={<Transactions />}></Route>
        <Route path="/newTransaction" element={<NewTransaction />}></Route>
        <Route path="/ChosseCard" element={<ChosseCard />}></Route>
      </Routes>
    </>
  )
}

export default App