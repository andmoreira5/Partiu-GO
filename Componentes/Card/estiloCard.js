import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flexDirection:'row', alignItems:'center', backgroundColor: '#fff', 
        width: '80%', borderTopLeftRadius:10, borderBottomEndRadius:10,
        marginBottom: 20,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        
        elevation: 8,
      },
      imagem:{
        width:100, height:100, borderTopLeftRadius:10, margin:5
      },
      areaTexto:{
        paddingLeft:10, flex: 1, paddingRight:10
      },
      nome:{
        paddingBottom:5
      }
});

export default estilo;