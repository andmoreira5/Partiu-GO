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
export const buscarConselho = `
query get{
  conselhos {
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

export const buscarCalendario = `
query get ($day:Date!) {
  calendarios{
    data{
      attributes{
        Mes
        Ano
        Eventos  (filters:{Inicio:{gt:$day}}, sort:"Inicio:asc") {
          Descricao
          Inicio
          Fim
          Endereco
          Horario
        }
      }
    }
  }
}      
`

export const buscarDesenvolvedor = `
query get {
  desenvolvedor{
    data{
      attributes{
        Nome
        Foto{
          data{
            attributes{
              url
            }
          }
        }
        Descricao
      }
    }
  }
}
`