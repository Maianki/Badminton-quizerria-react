import "./App.css";
import { Navbar } from "components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<>Home</>}></Route>
        <Route path='/login' element={<>Login</>}></Route>
      </Routes>
    </div>
  );
}

export default App;
