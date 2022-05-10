import { createContext, useContext, useReducer, useEffect } from "react";
import { globalReducer, globalStateInitialValue } from "reducers";
import { db } from "firebase-config";
import { collection, getDocs } from "firebase/firestore";

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  useEffect(() => {
    const quizzesCollectionRef = collection(db, "quizzes");
    (async () => {
      try {
        const data = await getDocs(quizzesCollectionRef);
        const allQuizzes = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  const [globalState, globalDisptacher] = useReducer(
    globalReducer,
    globalStateInitialValue
  );

  return (
    <GlobalContext.Provider value={{ globalState, globalDisptacher }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => useContext(GlobalContext);

export { useGlobal, GlobalProvider };
