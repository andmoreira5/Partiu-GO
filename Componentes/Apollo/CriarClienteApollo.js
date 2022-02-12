//esse cliente vai fazer a conexão com o servidor
import {HttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'

export default criarApolloClient =  () => {
    const link = new HttpLink( {
      uri: 'http://192.168.0.194:1337/graphql',
      //headers nao colocados
    })
  
    const cache = new InMemoryCache();
  
    const client = new ApolloClient({
      link,
      cache
    })
  
    return client
  
  }