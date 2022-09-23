//É o quadro branco informando se tem grupo hoje ou não

import React, {useContext} from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { TextoComumCinza, TextoComumLaranja } from "../Textos/Textos";
import estilo from './estiloCaixaDialogo';
import TratarDados from '../FuncoesLogicas/TratarDadosServidor'
import { Context } from '../Contexto'
import { Text } from "react-native";
import { color } from "react-native-reanimated";
import CardHojeNaoTemGrupo from "./CardHojeNaoTemGrupo";


export default function CaixaDialogoGrupo(){
    const {temas} = useContext(Context)
    let titulo = 'HOJE TEM GRUPO DE ORAÇÃO'
    if(temas.length==0){
        titulo='HOJE NÃO TEM GRUPO!'
    }
    

    function leitura(el){
        return <View style={estilo.itemTexto}>
            <Text style={{color:'black', fontWeight:'bold', fontSize:17}}>{el.grupo.toUpperCase()}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize:17}}>Tema: </Text>
                <Text style={{color:'black', fontSize:17}}>{el.tema}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize:17}}>Horário: </Text>
                <Text style={{color:'black', fontSize:17}}>{el.horario}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize:17}}>Local: </Text>
                <Text style={{color:'black', fontSize:17}}>{el.local}</Text>
            </View>
            <View style={{flexDirection: 'row', width:'70%'}}>
                <Text style={{color:'black', fontSize:17, fontWeight:'bold'}}>Endereço: </Text>
                <Text style={{color:'black', fontSize:17}}>{el.endereco}</Text>
            </View>
            
             {/* <TextoComumCinza style={estilo.itemTexto} conteudo={el} /> */}
        </View>
    }

    
    return(

        

        // <View style={estilo.container}>
        //     <View style={estilo.primeiraLinha}>
        //         <Icon style={estilo.icon} name="notifications" color={'#ef5a34'} />
        //         <TextoComumLaranja conteudo={titulo} />
        //     </View>
        //     {/* <View style={estilo.conteudo}>
        //         {temas.map((el) => leitura(el))}
        //         {temas.length==0 ? <TextoComumCinza conteudo='Reze pela RCC!' /> : <></>}
        //     </View> */}
            
        // </View>

<CardHojeNaoTemGrupo />
    );
}