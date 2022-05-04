import "./App.css";
import { Navbar, Footer } from "components";
import { Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<>Login</>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
