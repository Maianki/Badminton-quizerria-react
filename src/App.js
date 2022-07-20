import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { RulesCard, RequireAuth, RestrictAuth } from "components";
import { Home, Questions, Result, PageNotFound, Login, Signup } from "./pages";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        style={{ fontSize: "1.6rem" }}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route element={<RestrictAuth />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Route>

        <Route element={<RequireAuth />}>
          <Route path='/rules' element={<RulesCard />}>
            <Route path=':quizId' element={<RulesCard />}></Route>
          </Route>
          <Route
            path='/questions/:quizId/:questionNumber'
            element={<Questions />}
          ></Route>

          <Route path='/result' element={<Result />}></Route>
        </Route>

        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
