import { Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import Home from "./Home";
import { Navbar } from "./Navbar";
import Counter from "./Counter";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<ShoppingCart />} />
          <Route path='counter' element={<Counter />} />
        </Routes>
    </>
  );
}

export default App;
