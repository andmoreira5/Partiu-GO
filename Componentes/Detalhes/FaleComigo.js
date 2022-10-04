//card com botão para enviar e-mail para o desenvolvedor
import React from "react";
import {View, Text, TouchableOpacity, Linking} from 'react-native'
import SubTitulo from "../Textos/SubTitulo";
import Card from "../Card/Card";
import { cores } from "../Configuracoes/Configuracoes";
import Icon from "react-native-vector-icons/Ionicons";


export default function FaleComigo(props){
    return(
        <View style={{justifyContent:'center', alignItems:'center'}}>

        <SubTitulo subTitulo='Dúvidas / Sugestões'/>       

        <TouchableOpacity onPress={() => Linking.openURL('mailto:and.moreira5@gmail.com?subject=App Partiu Grupo de Oração') }
        style={{borderColor:'white', borderWidth:3 , borderBottomWidth:20, backgroundColor:cores.verde, padding:10, marginBottom:-15, borderRadius:10, width:'80%', flexDirection:'row', alignItems:'center', justifyContent:'center'}}
    >
            <Icon  name='chatbubbles' size={20} color='#fff'/>
            <Text style={{paddingLeft:15, fontSize:16}}>Fale com o desenvolvedor</Text>
        </TouchableOpacity>
        <Card  img={{uri: props.dadosImagem.url}} titulo={props.dadosImagem.nome} descricao={props.dadosImagem.descricao} />
        </View>
    )
}