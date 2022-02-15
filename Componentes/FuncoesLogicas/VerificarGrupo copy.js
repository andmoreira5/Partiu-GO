import React from 'react';
import grupos from '../Dados/Dados'
const hoje = new Date().getDay();
let conteudo="", titulo="HOJE NÃO TEM GRUPO DE ORAÇÃO";


export default function verificarGrupo(){
    grupos.grupos.map(grupo => verificar(grupo))
    if(conteudo===''){
        conteudo='Reze pela RCC :-)'
    }
    return {titulo:titulo, conteudo:conteudo};
}

function verificar(grupo){
    if(grupo.diaDaSemana===hoje){
        titulo="HOJE TEM GRUPO DE ORAÇÃO"
        conteudo = conteudo.concat(grupo.nome + '\n\n' + grupo.horario + ' na '+ grupo.local 
        + '\n' + grupo.endereco+'\n\n');
    }
}
