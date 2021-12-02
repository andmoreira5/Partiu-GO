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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  ondas:{
  height: 70,
  },
  input:{
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: 'white',
  }
});

export default estilo;