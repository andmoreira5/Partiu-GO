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
import { Context } from '../Contexto'


export default function TextosSplash01(){
  const [nomeDigitado, setNomeDigitado] = useState("");
  const {setNomeUsuario} = useContext(Context)
  const navigation = useNavigation();

  async function navegarParaProximaTela(){
    setNomeUsuario(nomeDigitado)
    gravarDado("id", nomeDigitado);
    navigation.navigate('SplashInicial02');
  }

  async function navegarParaProximaTelaSemNome(){
    setNomeUsuario('$0')
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
            value={nomeDigitado}
            onChangeText={setNomeDigitado}
          />
          <BotaoConfirmacao title='OK' onPress={navegarParaProximaTela }/>
        </View>
       </View>
      <BotaoTransparente title="NEEMM (NÃO) >"  onPress={navegarParaProximaTelaSemNome} />
      
    </>
  );

}