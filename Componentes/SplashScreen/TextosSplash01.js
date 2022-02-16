//Primeira área de textos e botões.

import React, {useState} from 'react';
import { useContext } from 'react';
import { View} from 'react-native';
import { BotaoConfirmacao, BotaoTransparente } from '../Botao/Botao';
import InputText from '../InputTexto/InputText';
import { TextoComum, TituloBranco } from '../Textos/Textos';
import estilo from './estilosSplash';
import { useNavigation } from '@react-navigation/native';
import { gravarDado } from '../FuncoesLogicas/LerDados';
import UserContext from './Context';


export default function TextosSplash01(){
  const [nome, setNome] = useState("");

  const {setState, state} = useContext(UserContext)

  const navigation = useNavigation();

  async function navegarParaProximaTela(){
    state.nomeUsuario = nome
    gravarDado("id", nome);
    navigation.navigate('SplashInicial02');
  }

  async function navegarParaProximaTelaSemNome(){
    state.nomeUsuario = '$0'
    gravarDado("id", "$0");
    navigation.navigate('SplashInicial02');
  }

  return(
    <>
      <TituloBranco conteudo='Bem vindo(a)!'/>
      <View >
        <TextoComum conteudo='Você quer me dizer seu nome?' />
        <View style={estilo.alinhamentoHorizontal}>
          <InputText 
            value={nome}
            onChangeText={setNome}
          />
          <BotaoConfirmacao title='OK' onPress={navegarParaProximaTela }/>
        </View>
       </View>
      <BotaoTransparente title="NEEMM (NÃO) >"  onPress={navegarParaProximaTelaSemNome} />
      
    </>
  );

}