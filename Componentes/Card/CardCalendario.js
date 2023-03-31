//Esse card contem o dia e evento que irá acontecer.
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import DetalhesCalendario from "./DetalhesCalendario";
import estilo from "./estiloCardCalendario";

export default function CardCalendario(props){
    const [ corDestaqueEvento, setCorDestaqueEvento ] = useState()

    useEffect(()=>{
        if(props.nivel=='LOCAL'){
            setCorDestaqueEvento('#ffca0a')
        }else if(props.nivel=='DIOCESANO'){
            setCorDestaqueEvento('#013f58')
        }else if(props.nivel=='ESTADUAL'){
            setCorDestaqueEvento('#a3420d')
        }else if(props.nivel=='NACIONAL'){
            setCorDestaqueEvento('#007e3e')
        }else{
            setCorDestaqueEvento('#730041')
        }
    }, [])

    return(
        <View style={[estilo.container, {borderLeftWidth:4, borderLeftColor:'white', paddingLeft:12}]}>
            <View style={{marginBottom:10}}>
                <Text style={estilo.data}>{props.titulo}</Text>
                <Text style={[estilo.detalhes, {fontWeight:'bold', marginTop:7}]} >{props.dados.descricao}</Text>
                {
                    props.dados.local!=null ?
                        <DetalhesCalendario nome={'location-sharp'} value={props.dados.local} />
                    :
                        <></>
                }
                {
                    props.dados.horario!=null ?
                    <DetalhesCalendario nome={'ios-alarm'} value={props.dados.horario} />
                :
                    <></>
                }
            <View className='flex-row items-center'>
                <Text className='font-bold text-white p-2 m-2' style={{backgroundColor:corDestaqueEvento}} >EVENTO {props.dados.nivel}</Text>
            </View>
            </View>
        </View>
    );
}