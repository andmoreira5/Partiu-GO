import React, { createContext } from 'react';
import { lerDado } from '../FuncoesLogicas/LerDados';

const Context = createContext(lerDado('id'));

export default Context;