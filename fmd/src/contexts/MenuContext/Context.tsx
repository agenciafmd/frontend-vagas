import React, { useReducer } from 'react';
import { menuDataContext, menuDataType } from './data';
import { action, menuReducer } from './reducer';

type menuDataContextType = {
  state: menuDataType;
  dispatch: React.Dispatch<action>;
};
export const MenuContext = React.createContext<menuDataContextType>({
  state: { toggle: false },
  dispatch: () => null,
});

export type OnOrOffKnowledgeType = {
  children: React.ReactNode | string;
};
export const MenuContextProvider = ({ children }: OnOrOffKnowledgeType) => {
  const [state, dispatch] = useReducer(menuReducer, menuDataContext);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
