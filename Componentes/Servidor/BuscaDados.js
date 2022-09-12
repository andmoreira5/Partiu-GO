import { useContext } from 'react';
import { lerDiaDeHoje } from '../FuncoesLogicas/LerHorarioDia'
import urlServidor from '.'
import { Context } from '../Contexto';
import { buscarTemas } from '../Dados/Queries';


export default function buscaDados () {
  const {setData} = useContext(Context)

  fetch(urlServidor, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: buscarTemas,
      variables: {
        day: lerDiaDeHoje(),
      },
    }),
  })
  .then((res) => res.json())
  .then((result) => {
    var temas = []
    result.data.temas.data.map(item => {
      var obj = {
        tema: item.attributes.tema,
        dia: item.attributes.dia,
        grupo: item.attributes.grupo.data.attributes.nome
      }
      temas.push(obj)
    })
    setData(temas)
    
  });
  
}

