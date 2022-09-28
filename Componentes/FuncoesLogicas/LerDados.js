//função responsável por ler e gravar dados no async storage
import React, {useState} from "react";
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useContext } from "react";
import { Context } from "../Contexto";

export function lerDado(chave){
    const [value,setValue] = useState('');
    
    
    React.useEffect(() => 
    getData(), []
  );

   async function getData(){
    const response =  await AsyncStorage.getItem(chave);
    if(response !== null){
      setValue(response);
    }
  }

  return value;

}

export function lerNomeUsuario(){
  const {setNomeUsuario} = useContext(Context)
  
  React.useEffect(() => 
  getData(), []
);

 async function getData(){
  const response =  await AsyncStorage.getItem('id');
  if(response !== null){
    setNomeUsuario(response)
  }else{
    setNomeUsuario('')
  }
}


}

export async function gravarDado(chave, conteudo){
  await AsyncStorage.setItem(chave, conteudo);
}