import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback, } from 'react-native'
import React from 'react'
import * as Icons from 'react-native-feather';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({item}) => {

  const navigation=useNavigation();
  return (
    <TouchableWithoutFeedback 
    onPress={()=>navigation.navigate("Restaurant", {...item})}>

    <View style={{
      shadowColor:theme.bgColor(0.2),
      shadowRadius:7
    }}
    className="mr-6 bg-gray-100 rounded-3xl shadow-lg ">
      <Image className="h-36 w-64 rounded-t-3xl " source={item.image} />
      <View className="px-3 pb-4 space-y-2">
        <Text className="flex-row items-center space-x-2 font-bold">{item.name}</Text>
        <View className="flex-row items-center space-x-1" >
         <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"/>
         
          <Text className="text-green-700">{item.stars}</Text>
          <Text className=" text-gray-600 ml-8" >
             ({item.reviews}review) .
             <Text className="" >{item.category}</Text>
          </Text>
         
        </View>
        <View  className="flex-row items-center  space-x-1">
          <Icons.MapPin color={"red"}  width={20}  height={20}/>
          <Text className="font-bold text-red-500 pl-4" >Neary by</Text>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default RestaurantCard