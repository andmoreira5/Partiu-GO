//Primeira área de textos e botões.

import React, {useState} from 'react';
import { Text, View} from 'react-native';
import { BotaoConfirmacao, BotaoTransparente } from '../Botao/Botao';
import InputText from '../InputTexto/InputText';
import { TextoComum, TituloBranco } from '../Textos/Textos';
import estilo from './estilosSplash';
import { useNavigation } from '@react-navigation/native';

export default function TextosSplash01(){
  const [nome, setNome] = useState("");


  const navigation = useNavigation();

  function navegarParaProximaTela(){
    navigation.navigate('SplashInicial02', {nome: 'ASDF'});
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
      <BotaoTransparente title="NEEMM (NÃO) >"  onPress={navegarParaProximaTela} />
      
    </>
  );

}