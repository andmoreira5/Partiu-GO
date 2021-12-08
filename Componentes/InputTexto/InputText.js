//Componente de campo de texto

import React from "react";
import { TextInput } from "react-native-gesture-handler";
import estiloInput from './estiloInput';

export default function InputText(props){
    return(
        <TextInput 
            style={estiloInput.input}
            placeholder='INSIRA SEU NOME AQUI'
            placeholderTextColor='rgba(255,255,255,0.5)'
            value={props.value}
            onChangeText={props.onChangeText}
        />
    );
}