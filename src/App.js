import "./App.css";
import { RulesCard } from "components";
import { Home, Questions, Result, PageNotFound } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
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
        <Route path='/result' element={<Result />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
