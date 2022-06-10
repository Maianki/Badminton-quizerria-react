import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

  const signup = async (email, password) => {
    console.log("Called");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(location?.state?.from?.pathname || "/");
      toast.success("Account created. You are logged in.");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate(location?.state?.from?.pathname || "/");
      toast.success("You are logged in.");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate("/");
      toast.success("You are logged out.");
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
