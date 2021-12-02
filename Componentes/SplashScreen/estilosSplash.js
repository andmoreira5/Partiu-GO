import React from 'react';
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
    justifyContent: 'center'
  },
  ondas:{
  height: 70,
  },
});

export default estilo;