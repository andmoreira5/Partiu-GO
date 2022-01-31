import {StyleSheet} from 'react-native';
import { cores } from '../Configuracoes/Configuracoes';

const estiloTextos = StyleSheet.create({
  tituloAmarelo:{
      color: cores.amarelo,
      fontSize:25,
      fontWeight: 'bold',
      marginBottom:30,
  },
  tituloBranco:{
    fontSize:25,
    fontWeight: 'bold',
    
    },
    textoComum:{
        fontSize: 17,
        paddingBottom: 10,
    },
    textoComumCinza:{
        fontSize: 16,
        color: cores.cinza,
    },
    textoComumLaranja:{
        fontSize: 16,
        color: cores.laranja,
    }
});

export default estiloTextos;