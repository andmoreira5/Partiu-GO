//Todos os botões da aplicação

import React from "react";
import { Button } from "react-native-elements";
import estiloBotao from "./estiloBotao";

export function BotaoConfirmacao(props){
    return (
        <Button 
            buttonStyle={estiloBotao.confirmacao}
            title={props.title} 
            onPress={props.onPress}
            
        />
    );
}

export function BotaoTransparente(props){
    return (
        <Button 
            buttonStyle={estiloBotao.transparente}
            title={props.title} 
            onPress={props.onPress}
        />
    );
}