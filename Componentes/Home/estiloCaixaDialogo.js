import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        backgroundColor:'white', marginBottom:200, borderRadius:10, paddingBottom:30
      },
    primeiraLinha:{
        flexDirection:'row', margin:10, paddingBottom:10, paddingRight:5
    },
    icon:{
        marginRight:5
    },
    conteudo:{
        marginLeft:20
    },botao:{
        alignItems: 'center', margin:20, borderRadius:5, borderColor:'#ef5a34', borderWidth:2, padding:7, marginLeft:35, marginRight:35
    }
     
});

export default estilo;