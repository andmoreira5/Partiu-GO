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
    // color:'white',
    textShadowColor: 'black',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 4    
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
    },
    tituloSplash:{
        fontSize:26,
        fontWeight: 'bold',
        color: cores.marrom,
        textAlign:'center'
    }
});

export default estiloTextos;