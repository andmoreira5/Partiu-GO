//Primeira área de textos e botões.

import React from 'react';
import {Text, TextInput} from 'react-native';
import estilo from './estilosSplash';


export default function Textos01(){

  return(
    <>
      <Text>Olá! Bem vindo(a)!</Text>
      <Text>Este é o aplicativo oficial da{"\n"}RCC Missão Velha.</Text>
      <Text>Você quer me dizer seu nome?</Text>
      <TextInput
        style={estilo.input}
        value={"text"}
      />
    </>
  );

}