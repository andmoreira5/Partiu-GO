import * as React from 'react';
import 'react-native-url-polyfill/auto';
import Routes from './Routes';
import ContextoProvider from './Componentes/Contexto';

export default function App() {

  return (
    <ContextoProvider>
      <Routes />
    </ContextoProvider>
  );
}


