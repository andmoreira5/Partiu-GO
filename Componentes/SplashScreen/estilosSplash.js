import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  imagem: {
    resizeMode: 'contain',
    width:'50%',
    height:120,
    marginTop: 30
  },
  gradiente:{
    width: '100%',
    height: 700,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ondas:{
  height: 70,
  },
  alinhamentoHorizontal:{
    flex: 1,
    flexDirection:'row',
    maxHeight: 50,
    alignItems: 'center',
    justifyContent:'flex-end',
  },
});

export default estilo;