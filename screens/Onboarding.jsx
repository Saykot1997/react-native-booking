import { View, Text, Image, Platform } from 'react-native'
import React from 'react'
import { images, icons } from "../constants"
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Onboarding() {



    return (
        <SafeAreaProvider className={`flex-1 bg-white ${Platform.OS === "android" && "pt-14 pb-1 px-1"} `}>
            <View className="w-full h-full px-5">
                <View className="flex flex-row justify-end">
                    <Image
                        source={icons.barMenu}
                        className="w-5 h-5"
                    />
                </View>
                <View className=' w-full flex items-center justify-center'>
                    <View className=" w-full">
                        <Image
                            source={images.onboardingImage}
                            resizeMode="contain"
                            className="w-full bg-white"
                        />
                    </View>
                </View>
                <View>
                    <Text className=" text-center font-semibold text-lg">Digital Ticket</Text>
                    <Text className=" text-center text-gray-700 text-sm mt-2 px-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quasi harum ut, eum, ipsams</Text>
                </View>
            </View>
        </SafeAreaProvider>
    )
}