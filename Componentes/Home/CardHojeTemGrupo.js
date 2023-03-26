//card que mostra quando tiver grupo de oração
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Dimensions } from "react-native";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CardHojeTemGrupo(props){

    function viewElementos(key, value){
        if(key!='nome'){
            var icon
            switch(key){
                case 'tema':
                    icon= 'cross'
                    break
                case 'horario':
                    icon='clock'
                    break
                case 'local':
                    icon='church'
                    break
                case 'endereco':
                    icon='location-arrow'
                    break
            }
            return <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Icon name={icon} size={20} color='black'/>
                <Text key={value} style={estilo.texto}>{value}</Text>
            </View>
        }
        
    }

    return(
        <View style={estilo.container}>
            <Text style={estilo.titulo}>{props.item.nome.toUpperCase()}</Text>
            <ScrollView>
                {Object.entries(props.item).map(([key, value]) => {
                    return viewElementos(key, value)    
                })}
            </ScrollView>
            
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor:'white', 
        opacity:0.8, 
        marginHorizontal:20,  
        borderRadius:20, 
        padding:20, 
        width:Dimensions.get('window').width*0.7, 
        elevation:20
    },
    titulo:{
        color:'black', 
        fontWeight:'bold', 
        fontSize:17, 
        textAlign:'center', 
        paddingBottom:10, 
        marginBottom:10, 
        borderBottomColor:'black', 
        borderBottomWidth:2
    },
    texto:{
        color:'black', 
        fontSize:17, 
        paddingLeft:10,
        width:Dimensions.get('window').width*0.55
    }
})