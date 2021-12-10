//lê o nome do usuário salvo no dispositivo caso o usuario tenha inserido
import React, {useState} from "react";
import AsyncStorage  from '@react-native-async-storage/async-storage';

export default function LerNomeUsuario(){
    const [value,setValue] = useState('');
    

    React.useEffect(() => 
    getData(), []
  );

   async function getData(){
    const response =  await AsyncStorage.getItem("id");
    if(response !== null){
      setValue(response);
    }
  }

  return value;

}