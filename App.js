import * as React from 'react';
import { confFontes } from './Componentes/Configuracoes/Configuracoes';
import Routes from './Routes';


export default function App() {

  //configurando as cores das fontes do app.
  confFontes();
  
  return (
    <Routes />
  );
}


