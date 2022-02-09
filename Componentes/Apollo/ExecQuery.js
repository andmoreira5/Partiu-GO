//aqui tenho o código para executar minhas queries e retornar os dados
import {Query } from 'react-apollo'
import React from 'react';
import {View, Text} from 'react-native'

export default function Exec(props){


    function ler(dados){
        var conteudo = 'nome: ';
        conteudo = conteudo.concat(dados.attributes.nome + "  -  descricao: ")
        conteudo = conteudo.concat(dados.attributes.descricao)
        return <Text>{conteudo}</Text>
      }

    return (
        <Query query={props.query}>
        {
        ({data, error, loading})   => {
            if(loading) return <View><Text>Loading</Text></View>

            if(!data.objs) return <View><Text>{"\n\nDados não carregados"}</Text></View>
            return <View><Text>{"\n\nDados carregados"}</Text>
            {data.objs.data.map(a => ler(a))}
            </View>
        }
        }
        </Query>
    );
} 