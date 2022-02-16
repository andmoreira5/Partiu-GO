import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        backgroundColor:'white', borderRadius:10, width:'85%'
      },
    primeiraLinha:{
        flexDirection:'row', margin:10, paddingBottom:10, paddingRight:5
    },
    icon:{
        marginRight:5
    },
    conteudo:{
        marginLeft:20, marginRight:20, padding:3
    },
    itemTexto:{
        marginBottom:20,
        paddingTop:10,
        borderTopWidth: 1
        
    }
     
});

export default estilo;