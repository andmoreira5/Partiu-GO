import React, {createContext, useState} from 'react';

const DEFAULT_VALUE = {
  state:{
    name:"",
    dados:{}
  },
  setState: () => {}
}

const UserContext = createContext(DEFAULT_VALUE);

const UserContextProvider = ({children}) =>{
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return(
    <UserContext.Provider value={{state, setState}} >
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider };
export default UserContext;