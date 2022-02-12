//aqui tenho o código para executar minhas queries e retornar os dados
import {Query } from 'react-apollo'
import React from 'react';
import {View, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Home from '../Home/Home';

export default function Exec(props){

    const navigation = useNavigation();

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
            if(!loading){
                if(data) {
                    setTimeout(() => {navigation.navigate(Home, {dados:data})}, 3000);
                }
            } 
            
        }
        }
        </Query>
    );
} 