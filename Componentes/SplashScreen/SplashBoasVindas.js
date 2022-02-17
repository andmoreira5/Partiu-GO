//Essa é a primeira tela que aparece no aplicativo sendo primeira instalação ou não
//Aqui também faremos a conexão com o servidor pra ver se tem dado novo.

import React, { createContext, useContext } from 'react'
import { View, Text , Image, ActivityIndicator} from 'react-native'
import {HttpLink} from 'apollo-link-http'
import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloProvider} from 'react-apollo'
import gql from 'graphql-tag' 
import {Query } from 'react-apollo'
import estilo from './estilosSplash'
import { TituloSplash } from '../Textos/Textos'
import { lerDiaDeHoje } from '../FuncoesLogicas/LerHorarioDia'
import UserContext from './Context'
import { lerDado } from '../FuncoesLogicas/LerDados'



const FETCH_TODOS = gql`
  query{
    objs{
      data {
        id
        attributes{
          nome
          descricao
        }
      }
    }
  }
`

const BUSCA_DE_DATA = gql`
  query {
	temas  {
    data  {
      attributes {
        tema
        diaDoGrupo
        grupo{
          data{
            attributes{
              nome
              local
              endereco
              horario
            }
          }
        }
      }
    }
  }
}

`


const BUSCA = gql`
query ($dia:String) {
	temas (filters:{diaDoGrupo:{eq:$dia}}) {
    data  {
      attributes {
        tema
        diaDoGrupo
        grupo{
          data{
            attributes{
              nome
              local
              endereco
              horario
            }
          }
        }
      }
    }
  }
}`

const dia = lerDiaDeHoje();
const makeApolloClient =  () => {
  const link = new HttpLink( {
    uri: 'http://10.0.0.127:1337/graphql',
    //headers nao colocados
  })

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache
  })

  return client

}



export default class SplashBoasVindas extends React.Component{

  static contextType = UserContext



    state = {
        client: null,
      }
    
      async componentDidMount(){

        

        const client = makeApolloClient()
        this.setState({
          client
        })

        
        
        
    }
    
    
      render(){
        
        if(!this.state.client){
          return <View><Text>Deu erro</Text></View>
        }
        
        return <ApolloProvider client={this.state.client}>
          
          <View style={estilo.containerBoasVindas}>
            <Image  style={estilo.logoBoasVindas} source={require('../../assets/logo.png')} />
            <TituloSplash>Carregando...</TituloSplash>
            <ActivityIndicator size="large" color="#007e3e" />
            
            <Query query={BUSCA} variables={{dia}}>
              {
                ({data, error, loading})   => {
                  const {setState, state} = this.context
                  state.nomeUsuario = lerDado('id')
                  if(loading) 
    
                  if(!data) return <View></View>
                  return <View>{this.props.navigation.navigate('TelaOla', {dados:data})}</View>
                   
                }
              }
            </Query>
          </View>
        </ApolloProvider>
        
      }
    
    
    
}