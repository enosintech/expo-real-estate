import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from "@expo/vector-icons";

import { login } from '@/lib/appwrite';
import images from '@/constants/images';
import icons from '@/constants/icons';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';

const SignIn = () => {

    const { refetch, loading, isLogged } = useGlobalContext();

    if(!loading && isLogged) return <Redirect href={"/"} />

    const handleLogin = async () => {

        const result = await login();

        if(result) {
            refetch();
        } else {
            Alert.alert("Error", "Failed to Login")
        }
    }

  return (
    <SafeAreaView className='bg-white h-full'>
        <ScrollView contentContainerClassName='h-full'>
            <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain' />

            <View className="px-10">
                <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to Restate</Text>

                <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
                    Let's Get You Closer to {"\n"}
                    <Text className='text-primary-300'>Your Ideal Home</Text>
                </Text>

                <TouchableOpacity className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-20' onPress={handleLogin}>
                    <View className='flex flex-row items-center justify-center'>
                        <Image source={icons.google} className='w-5 h-5' resizeMode='contain' />
                        <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue With Google</Text>
                        <Entypo name="chevron-small-right" size={25} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn;