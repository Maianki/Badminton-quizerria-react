import React,{ createContext, useContext, useReducer, useState } from "react";
import { globalReducer, globalStateInitialValue } from "reducers";
import { GlobalStateType , ActionTypes} from "types";


type GlobalContextProviderType = {
  children : React.ReactNode
}

type GlobalContextType = {
  globalState : GlobalStateType,
  globalDisptacher : React.Dispatch<ActionTypes>,
  isOpenModal : boolean,
  handleModal : (value:boolean)=> void
}
const GlobalContext = createContext({}as GlobalContextType);

const GlobalProvider = ({ children } : GlobalContextProviderType) => {
  const [globalState, globalDisptacher] = useReducer(
    globalReducer,
    globalStateInitialValue
  );

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleModal = (value : boolean) => {
    setIsOpenModal(value);
  };

  return (
    <GlobalContext.Provider value={{ globalState, globalDisptacher, isOpenModal, handleModal }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => useContext(GlobalContext);

export { useGlobal, GlobalProvider };
