import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { featured } from '../constants/data'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';
import {theme} from "../theme/index"
import * as Icons from 'react-native-feather'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/RestaurantSlice';

const DeliveryScreen = () => {

 const restarurant =useSelector(selectRestaurant);
 const navigation =useNavigation()
  return (
    <View className="flex-1">
      <MapView
  initialRegion={{
    latitude: restarurant.lat,
    longitude: restarurant.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  className="flex-1"
  mapType="standard"
>
  <Marker coordinate={{
    latitude:restarurant.lat,
    longitude:restarurant.lng,
  }}
  title={restarurant.name }
  description={restarurant.description}
  pinColor={theme.bgColor(1)} />

</MapView>
<View className="rounded-3xl  bg-white relative">
 <View className="flex-row justify-between px-5 pt-10">
<View>
  <Text className="text-lg text-gray-700 font-semibold">
    Estimated Arrival
  </Text>
  <Text className="text-3xl mt-1 text-gray-700 font-semibold">
    20 to 30 mins
  </Text>
  <Text className='mt-1 text-gray-700 font-semibold '>
    Your Order is on the Way </Text>
</View>
<Image className="w-24 h-24" source={require("../assets/images/bikeGuy2.gif")} ></Image>
 </View>
 <View 
 className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
 style={{backgroundColor:theme.bgColor(1)}}>
  <View className='rounded-full'>
   <Image className=" rounded-full w-12 h-12" source={require("../assets/images/deliveryGuy.jpg")}/>
  </View>
  <View className="flex-1 ml-3">
  <Text className="text-gray-200 text-lg font-bold">Neeraj Chopra</Text>
  <Text className="text-gray-200  font-semibold">Your Rider</Text>
  </View>
  <View className="flex-row items-center space-x-3 mr-3">
  <TouchableOpacity className=" bg-white p-2 rounded-full">
   <Icons.PhoneCall fill={theme.bgColor(1)} stroke={theme.bgColor(1)}/>
  </TouchableOpacity>
  <TouchableOpacity
  onPress={()=>(navigation.navigate("Home"))} className=" bg-white p-2 rounded-full">
   <Icons.X stroke={"red"} strokeWidth={5}/>
  </TouchableOpacity>
  </View>

 </View>
</View>

    </View>
  )
}

export default DeliveryScreen