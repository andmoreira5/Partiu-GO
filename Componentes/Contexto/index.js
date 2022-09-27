import { createContext, useState } from 'react';

export const Context = createContext()
export default function ContextoProvider({children}){

  const [temas, setTemas] = useState([])
  const [grupos, setGrupos] = useState([])
  const [nomeUsuario, setNomeUsuario] = useState()
  const [formacoes, setFormacoes] = useState([])
  const [conselho, setConselho] = useState([])

  return <Context.Provider value={{temas, setTemas, 
    nomeUsuario, setNomeUsuario, 
    grupos, setGrupos, 
    formacoes, setFormacoes,
    conselho, setConselho}}>{children}</Context.Provider>

}