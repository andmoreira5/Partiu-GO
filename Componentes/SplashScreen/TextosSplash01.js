//Primeira área de textos e botões.

import React, {useState} from 'react';
import { View} from 'react-native';
import { BotaoConfirmacao, BotaoTransparente } from '../Botao/Botao';
import InputText from '../InputTexto/InputText';
import { TextoComum, TituloBranco } from '../Textos/Textos';
import estilo from './estilosSplash';
import { useNavigation } from '@react-navigation/native';
import executar from '../FuncoesLogicas/GravarDadosGrupo';
import { gravarDado } from '../FuncoesLogicas/LerDados';


export default function TextosSplash01(){
  const [nome, setNome] = useState("");


  const navigation = useNavigation();

  async function navegarParaProximaTela(){
    gravarDado("id", nome);
    executar();
    navigation.navigate('SplashInicial02');
  }

  async function navegarParaProximaTelaSemNome(){
    gravarDado("id", "");
    executar();
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