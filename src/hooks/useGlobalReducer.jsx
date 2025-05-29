import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialStore } from "../store/store";

const StoreContext = createContext()

export function StoreProvider({ children }) {
  // useReducer()
  const [store, dispatch] = useReducer(storeReducer, initialStore())

  return (
    <StoreContext.Provider value={ { store, dispatch } }>
      {children}
    </StoreContext.Provider>
  )
}

export default function useGlobalReducer() {
  return useContext(StoreContext);
}