//componente para subtitulo com uma linha simples
import React from "react";
import {View, Text} from 'react-native'

export default function SubTitulo(props){
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom:20}}>
        <View style={{flex: 1, height: 2, backgroundColor: 'white'}} />
        <View>
            <Text style={{marginHorizontal:10, textAlign: 'center'}}>{props.subTitulo}</Text>
        </View>
        <View style={{flex: 1, height: 2, backgroundColor: 'white'}} />
        </View>
    )
}
