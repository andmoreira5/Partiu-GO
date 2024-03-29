//faz apenas o cálculo do horario do dia para carregar a imagem correta na Home.

export default function lerHorarioDia(){
    let result = '';
    const hora = new Date().getHours();
    if((hora>=0 && hora<6) || (hora>=18 && hora<=24)){
        result = [require('../../assets/img/noite.jpg'), 'Boa noite'];
    }else{
        if(hora>=6 && hora<12){
            result = [require('../../assets/img/manha.jpg'), 'Bom dia'];
        }else{
            result = [require('../../assets/img/tarde.jpg'), 'Boa tarde'];
        }
    }
    return result;
}

export function lerDiaDeHoje(){
    let dataAtual = new Date(); 
    return (dataAtual.getFullYear() + "-" + (adicionaZero(dataAtual.getMonth()+1).toString()) + "-" + adicionaZero(dataAtual.getDate().toString())+"");
}

export function lerDiaDaSemana(){
    const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado']
    return dias[new Date().getDay()]
 }


function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
