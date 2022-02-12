//aqui tenho as queries graphql
import gql from 'graphql-tag' 
import { graphql } from 'react-apollo'
import { lerDiaDeHoje } from '../FuncoesLogicas/LerHorarioDia'

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

 const queryTemasPorDia = gql`
query ($data: String){
	temas (filters:{diaDoGrupo:{eq:$data}}) {
    data  {
      attributes {
        tema
        diaDoGrupo
        grupo{
          data{
            attributes{
              nome
              endereco
            }
          }
        }
      }
    }
  }
}
`

export const buscarTemasPorDia = graphql(queryTemasPorDia, {
  options: props => ({
    variables:{data:lerDiaDeHoje}
  })
})
