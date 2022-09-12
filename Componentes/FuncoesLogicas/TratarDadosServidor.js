//essa função trata os dados que serão mostrados na tela Home.
//Se não tivermos dados do servidor, ele faz uma busca local

import {useContext} from 'react';
import grupos from '../Dados/Dados'
const hoje = new Date().getDay();
let conteudo=[], titulo="HOJE NÃO TEM GRUPO DE ORAÇÃO";
import { Context } from '../Contexto'


//verificarGrupo é função interna e faz a varredura de dados locais verificando se tem grupo hoje
//é chamada caso não venham dados do servidor
 function verificarGrupo(){
     conteudo.length=0
    grupos.map((el) => verificar(el))
    if(conteudo.length===0){
        conteudo[0]='Reze pela RCC :-)'
    }
    return {titulo:titulo, conteudo:conteudo};
}

//função interna complementar 
function verificar(grupo){
    if(grupo.diaDaSemana===hoje){
        titulo="HOJE TEM GRUPO DE ORAÇÃO"
        conteudo.push(grupo.nome + '\n\n' + grupo.horario + ' na '+ grupo.local 
        + '\n' + grupo.endereco);
    }
}

//essa é a função chamada no componente CaixaDialogoGrupo. 
//ela vai trabalhar os dados a serem exibidos no componente
export default function TratarDados(){ 
    const {temas} = useContext(Context)
    console.log('tt ' + temas)
    if(temas.length==0){//se não vieram temas do servidor, então vou fazer verificação local
        return verificarGrupo();
    }else{
        return {titulo:'HOJE TEM GRUPO DE ORAÇÃO', conteudo:temas}
    }
}

//função chamada na TelaOla para organizar o que foi recebido do servidor
export function OrganizarDadosServidor(state, temas){
    let dadosFormatados = []
    dadosFormatados.length=0

    function verifica(el){
        let content = el.attributes.grupo.data.attributes.nome
        content = content.concat('\n\nTEMA: ' +  el.attributes.tema )
        content = content.concat('\nLOCAL: ' + el.attributes.grupo.data.attributes.local)
        content = content.concat('\nENDEREÇO: '+ el.attributes.grupo.data.attributes.endereco)
        content = content.concat('\nHORÁRIO: '+  el.attributes.grupo.data.attributes.horario )
        dadosFormatados.push( content )
    }

    temas.data.map((el) => verifica(el))
    state.temas = dadosFormatados;
}