import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({ navigation }) {
    return (
        <View className="flex-1 justify-center items-center">
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Text>Details</Text>
            </TouchableOpacity>
        </View>
    )
}