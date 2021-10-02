import React, { ReactNode, useReducer, VFC } from 'react'
import { Reducer } from '../reducer/reducer';
import { ContextType, Data } from '../types/types';
import { UserContext } from './context';

const initialState: Data = {
  name: '',
  className: 'hero',
  gender: 'male',
  trait: 'everyman',
  strength: 10,
  agility: 10,
  resilience: 10,
  wisdom: 10,
  luck: 10,
};

type Props = {
  children: ReactNode;
}

const UserContextProvider: VFC<Props> = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const context: ContextType = {state: state, dispatch: dispatch}

  return (
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
