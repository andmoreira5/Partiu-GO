//Primeira área de textos e botões.

import React, {useState} from 'react';
import { useContext } from 'react';
import { View} from 'react-native';
import { BotaoConfirmacao, BotaoTransparente } from '../Botao/Botao';
import InputText from '../InputTexto/InputText';
import { TextoComum, TituloBranco } from '../Textos/Textos';
import estilo from './estilosSplash';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../Contexto'
import * as SQLite from "expo-sqlite";


export default function TextosSplash01(){
  const [nomeDigitado, setNomeDigitado] = useState("");
  const {setNomeUsuario} = useContext(Context)
  const navigation = useNavigation();

  async function navegarParaProximaTela(botaoSemNome){
    var name
    if(botaoSemNome){
      name = '$0'
      setNomeUsuario(name)
    }else{
      name = nomeDigitado
      setNomeUsuario(name)
    }

    const db = SQLite.openDatabase("database.db");
    db.transaction((tx) => {
      tx.executeSql(
      "select * from usuario", [], (_, { rows: { _array } }) => {
          if(_array.length>0){ //se tem registro
            tx.executeSql(
              'update usuario set nome = ?  where id = ?', 
              [name, _array[0].id]
            )
          }else{
            tx.executeSql(
              'insert into usuario (nome) values (?)', [name]
            )
            
          }
        }
      )
  })
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
          <BotaoConfirmacao title='OK' onPress={() => navegarParaProximaTela(false) }/>
        </View>
       </View>
      <BotaoTransparente title="NEEMM (NÃO) >"  onPress={() => navegarParaProximaTela(true)} />
      
    </>
  );

}