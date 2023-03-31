//componente para subtitulo com uma linha simples
import React from "react";
import {View, Text} from 'react-native'

export default function SubTitulo(props){
    return(
        <View className='flex-row items-center mb-5'>
        <View className='h-0.5 bg-white flex-1' />
        <View>
            <Text className='mx-4 text-white font-bold text-center'>{props.subTitulo}</Text>
        </View>
        <View className='h-0.5 bg-white flex-1'  />
        </View>
    )
}
