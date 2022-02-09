//aqui tenho as queries graphql
import gql from 'graphql-tag' 

export const buscarTodos = gql`
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