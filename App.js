import * as React from 'react';
import { confFontes } from './Componentes/Configuracoes/Configuracoes';
import Routes from './Routes';
import ContextoProvider from './Componentes/Contexto';

export default function App() {

  //configurando as cores das fontes do app.
  confFontes();
  
  return (
    <ContextoProvider>
      <Routes />
    </ContextoProvider>
  );
}


