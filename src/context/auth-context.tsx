import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

type User = {
  email : string | null | undefined,
  id:string | null | undefined
}

type AuthContextType = {
  user : User, 
  signup : (email: string,password:string)=>void,
  logout : ()=>void,
  login : (email: string,password:string)=>void, 
  loader : boolean
}

type AuthContextProviderType = {
  children : React.ReactNode
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }:AuthContextProviderType) => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({email:"",id:null});
  const [loader, setLoader] = useState(false);

  const signup = async (email:string, password:string) => {
    setLoader(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoader(false);
      
      toast.success("Account created. You are logged in.");
    } catch (err:any) {
      toast.error(err.message);
    }
  };

  const login = async (email:string, password:string) => {
    setLoader(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoader(false);
      
      toast.success("You are logged in.");
    } catch (err:any) {
      console.log(err)
      toast.error(err.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);

      setUser({email:"",id:null});
      navigate("/");
      toast.success("You are logged out.");
    } catch (err:any) {
      console.log(err)
      toast.error(err.message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser({email:user?.email,id:user?.uid});
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, signup, logout, login, loader}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
