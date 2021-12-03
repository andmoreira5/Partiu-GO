//Primeira área de textos e botões.

import React from 'react';
import { TextInput, View} from 'react-native';
import { BotaoConfirmacao, BotaoTransparente } from '../Botao/Botao';
import InputText from '../InputTexto/InputText';
import { TextoComum, TituloBranco } from '../Textos/Textos';
import estilo from './estilosSplash';


export default function TextosSplash01(){

  return(
    <>
      <TituloBranco conteudo='Bem vindo(a)!'/>
      <TextoComum conteudo='App oficial da RCC Missão Velha!' />
      <TextoComum conteudo='Você quer me dizer seu nome?' />
      <View style={estilo.alinhamentoHorizontal}>
         <InputText />
        <BotaoConfirmacao title='OKK'/>
      </View>
      <BotaoTransparente title="NEEMM (NÃO) >"  />
      
    </>
  );

}