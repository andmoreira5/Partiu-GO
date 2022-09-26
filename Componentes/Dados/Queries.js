//lista de consultas graphql

export const buscarTemas = `query getTemas ($day:Date!) {
    temas (filters:{dia:{eq:$day}}) {
     data{
       attributes{
         tema
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

  export const buscarGruposDeHoje = `
  query getGrupos  ($day:String!)  {
     grupos (filters:{diaDaSemana: {eq:$day}}) {
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
  `

  export const buscarFormacoes = `
query getFormacoes{
  formacaos {
    data{
      attributes{
        grupo
        item{
          capa{
            data{
              attributes{
                url
              }
            }
          }
          titulo
          descricao
        }
      }
    }
  }
}         
`