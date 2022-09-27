// esse componente lê e mostra os dados do Conselho e das apostilas de formação.
import React from 'react'
import {View} from 'react-native'
import { TituloAmarelo } from '../Textos/Textos'
import Card from '../Card/Card'
import estilo from './estiloConselho'

export default function DadosComFoto(props){

    // console.log(props.dados[0].grupoFormativo[0])

    function lerDados(el){
        return <Card img={{uri: el.url}} titulo={el.titulo} descricao={el.descricao} />
    }

    function lerGrupo(el){
        return <View>
            <TituloAmarelo  conteudo={el.grupo.replace('_', ' ').replace('Mod', 'Mód').replace('mat', 'mát').replace('asi', 'ási').replace('den', 'dên').replace('teri', 'téri')}/>
                {el.content.map((element)=>lerDados(element))}
        </View>
    }

    return(
        <View style={estilo.containerScroll}>
              {props.dados.map((el)=>lerGrupo(el))}
         </View>
    );
}