// esse componente lê e mostra os dados do Conselho e das apostilas de formação.
import React from 'react'
import {View} from 'react-native'
import { TituloAmarelo } from '../Textos/Textos'
import Card from '../Card/Card'
import estilo from './estiloConselho'
import { urlFor } from '../Database/sanity'

export default function DadosComFoto(props){

    // console.log(props.dados[0].grupoFormativo[0])

    function lerDados(el){
        return <Card img={{uri: urlFor(el.imagem).url()}} titulo={el.nome} descricao={el.descricao} />
    }

    function lerGrupo(el){
        return <View className='items-center justify-center pb-7'>
            <TituloAmarelo  conteudo={el.grupo}/>
                {el.dados.map((element)=>lerDados(element))}
        </View>
    }

    return(
        <View className='items-center justify-center w-full '>
              {props.dados.map((el)=>lerGrupo(el))}
         </View>
    );
}