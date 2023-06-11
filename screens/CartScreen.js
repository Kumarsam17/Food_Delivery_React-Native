import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { featured } from "../constants/data"
import { theme } from '../theme/index'
import * as Icons from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/RestaurantSlice';
const CartScreen = () => {

  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)

  return (
    <View className=" flex-1">
      <View className="relative py-4 sha" >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: theme.bgColor(1) }}
          className="absolute z-10 top-14 left-3 rounded-full shadow p-2 bg-gray-50" >
          <Icons.ArrowLeft strokeWidth={3} stroke={"white"} />

        </TouchableOpacity>
        <View className=" mt-5"  >
          <Text className="text-center font-bold text-xl ">Your Cart</Text>
          <Text className="text-center text-gray-500 ">{restaurant.name}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: theme.bgColor(0.5) }}
        className="flex-row px-4 mt-2 items-center">
        <Image source={require("../assets/images/bikeGuy.png")} className="w-20 h-20" />
        <Text className="flex-1 pl-4">Delivers in 20-30 mins</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: theme.bgColor(1) }}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* dishes */}
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
        }}
        className=" bg-gray-200 pt-5"
      >

        {
          restaurant.dishes.map((dish, index) => {
            return (
              <View key={index} className=" flex-row items-center  py-2 bg-white rounded-3xl mb-3 mx-2 shadow-sm" >
                <Text className="font-bold" style={{ color: theme.text }}>
                  2 x 
                </Text>
                <Image className="h-14 w-14 m-2 rounded-full" source={dish.image} />
                <Text className=" flex-1 font-bold">{dish.name}</Text>
                <Text className="font-bold text-base px-2">${dish.price}</Text>
                <TouchableOpacity
                className="rounded-full p-1 mr-1"
                style={{
                  backgroundColor:theme.bgColor(1)
                }}>
                  <Icons.Minus height={15} width={15} strokeWidth={5} stroke={"white"} />
                </TouchableOpacity>
              </View>
            )
          })
        }

        {/* place order area */}
        

      </ScrollView>
          <View className={"rounded-t-3xl space-y-8 p-3"}
          
          style={{
            backgroundColor:theme.bgColor(0.2)
          }}>
            <View className="flex-row justify-between">
              <Text className="text-gray-700 font-extrabold">Subtotal</Text>
              <Text className="text-gray-700 font-extrabold">$20</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-700 font-extrabold">Subtotal</Text>
              <Text className="text-gray-700 font-extrabold">$20</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-gray-700 font-extrabold">Subtotal</Text>
              <Text className="text-gray-700 font-extrabold">$20</Text>
            </View>
            <View >
              <TouchableOpacity
              style={{backgroundColor:theme.bgColor(1)
              }}
              onPress={()=>navigation.navigate('DeliveryProcessScreen')}
              className=" rounded-full p-3  "
              >
                <Text className="text-white text-lg font-bold text-center">Place Order</Text>
              </TouchableOpacity>
            </View>
          </View>

        
    </View>

  )
}

export default CartScreen