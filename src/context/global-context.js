import { createContext, useContext, useReducer, useState } from "react";
import { globalReducer, globalStateInitialValue } from "reducers";

const GlobalContext = createContext(null);

const GlobalProvider = ({ children }) => {
  const [globalState, globalDisptacher] = useReducer(
    globalReducer,
    globalStateInitialValue
  );

  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModal = (value) => {
    setIsOpenModal(value);
  };

  return (
    <GlobalContext.Provider
      value={{ globalState, globalDisptacher, isOpenModal, handleModal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => useContext(GlobalContext);

export { useGlobal, GlobalProvider };
