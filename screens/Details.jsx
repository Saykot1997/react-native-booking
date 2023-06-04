import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Details({ navigation }) {
    return (
        <View className="flex-1 justify-center items-center">
            <Text>Details Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    )
}