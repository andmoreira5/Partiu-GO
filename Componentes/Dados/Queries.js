//lista de consultas graphql

export const buscarTemas = `query getTemas ($day:Date!) {
    temas (filters:{dia:{eq:$day}}) {
     data{
       attributes{
         tema
         dia
         grupo{
           data{
             attributes{
               nome
             }
           }
         }
       }     
     } 
   }
  }
  `