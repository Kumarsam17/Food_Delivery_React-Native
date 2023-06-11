import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { theme } from '../theme'
import * as Icons from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItemsById } from '../slices/CartSlice';

const DishRow = ({item}) => {
 
  return (
    <View className="flex-row p-3 items-center bg-white rounded-3xl shadow-2xl mb-3 mx-2">
      <Image className="rounded-3xl" source={item.image} style={{height:100,width:100}} />
      <View className="flex flex-1 space-y-3">
        <View className="pl-3" >
            <Text className="text-xl">{item.name}</Text>
            <Text className="text-gray-700">{item.description}</Text>
        </View>
        <View className="flex-row justify-between pl-3 items-center">
            <Text className="font-bold text-gray-700 ">${item.price}</Text>
            <View className="flex-row items-center">
            <TouchableOpacity className="p-1 rounded-full"  style={{backgroundColor:theme.bgColor(1)}} >
             <Icons.Minus strokeWidth={2} height={20} width={20} stroke={"white"}/>
            </TouchableOpacity>
            <Text className="px-3">{3}</Text>
            <TouchableOpacity
           
             className="p-1 rounded-full"  style={{backgroundColor:theme.bgColor(1)}} >
             <Icons.Plus strokeWidth={2} height={20} width={20} stroke={"white"}/>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}

export default DishRow