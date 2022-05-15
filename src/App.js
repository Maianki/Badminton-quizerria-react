import "./App.css";
import { Navbar, Footer, RulesCard } from "components";
import { Home, Questions } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className='App'>
      {!["/rules"].includes(pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<>Login</>}></Route>
        <Route path='/rules' element={<RulesCard />}>
          <Route path=':quizId' element={<RulesCard />}></Route>
        </Route>
        <Route
          path='/questions/:quizId/:questionNumber'
          element={<Questions />}
        ></Route>
      </Routes>
      {!["/rules", "/questions"].includes(pathname) && <Footer />}
    </div>
  );
}

export default App;
