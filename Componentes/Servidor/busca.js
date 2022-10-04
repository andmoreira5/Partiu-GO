import urlServidor from '.'

export default async function busca(consulta, variaveis={}){

  var response = await fetch(urlServidor,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: consulta,
      variables: variaveis
    }),
  })
  return await response.json()

}