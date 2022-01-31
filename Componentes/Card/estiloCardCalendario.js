import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flexDirection:'row', alignItems:'center', 
        width: '80%',
        marginBottom: 20,
        marginLeft:15
        
      },
      traco:{
        backgroundColor:'white',
        width:7,
        height:80,
        marginRight: 10,
        borderRadius: 30
        
      },
      data:{
          fontSize:27
      },
      detalhes:{
        fontSize:15
      }
      
});

export default estilo;