import {StyleSheet} from 'react-native';
import { cores } from '../Configuracoes/Configuracoes';

const estilo = StyleSheet.create({
    container: {
        flexDirection:'row', alignItems:'center', 
        width: '80%',
        marginBottom: 20,
        marginLeft:15,
        backgroundColor:'#0002',
        
      },
      traco:{
        backgroundColor:'white',
        width:7,
        height:80,
        marginRight: 10,
        borderRadius: 30
        
      },
      data:{
          fontSize:25,
          color:cores.amarelo
      },
      detalhes:{
        fontSize:15,
        marginLeft:10,
        color: '#fffd'
      }
      
});

export default estilo;