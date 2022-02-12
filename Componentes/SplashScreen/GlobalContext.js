import React from 'react'

import { UserContextProvider} from './Context'

const GlobalContext = ({children}) => {
  return <UserContextProvider>{children}</UserContextProvider>
}

export default GlobalContext