//Essa função vai ler o dia de hoje e verificar se tem grupo de oração hoje, amanhã ou o dia mais próximo.
import React from 'react';
import grupos from '../Dados/Dados'
let gruposDeHoje = [];
const hoje = new Date().getDay();
let contador=0;


export default function identificarGrupo(){
    grupos.grupos.map(grupo => verificar(grupo))
    return gruposDeHoje;
}

function verificar(grupo){
    if(grupo.diaDaSemana===hoje){
        gruposDeHoje[contador] = grupo;
        contador++;
    }
}
