//Esse card contem o dia e evento que irá acontecer.
import React from "react";
import { View, Text } from "react-native";
import DetalhesCalendario from "./DetalhesCalendario";
import estilo from "./estiloCardCalendario";

export default function CardCalendario(props){
    return(
        <View style={[estilo.container, {borderLeftWidth:4, borderLeftColor:'white', paddingLeft:12}]}>
            {/* <View style={estilo.traco}></View> */}
            <View style={{marginBottom:10}}>
                <Text style={estilo.data}>{props.titulo}</Text>
                <Text style={[estilo.detalhes, {fontWeight:'bold', marginTop:7}]} >{props.dados.descricao}</Text>
                {
                    props.dados.endereco!=null ?
                        <DetalhesCalendario nome={'location-sharp'} value={props.dados.endereco} />
                    :
                        <></>
                }
                {
                    props.dados.horario!=null ?
                    <DetalhesCalendario nome={'ios-alarm'} value={props.dados.horario} />
                :
                    <></>
                }
            </View>
        </View>
    );
}