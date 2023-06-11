import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import * as Icons from 'react-native-feather';
import { theme } from '../theme';
import DishRow from './DishRow';
import Cart from './Cart';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/RestaurantSlice';

const RestaurantScreen = () => {

  const {params} =useRoute();
  const navigation=useNavigation()
  let item=params;
  const dispatch=useDispatch()
  
  useEffect(()=>{
    if(item && item.id){
      dispatch(setRestaurant({...item}))
    }
  },[])

  return (
    <View>
      <Cart />
      <ScrollView  >
        <View className="relative ">

        <Image className="w-full h-72" source={item.image} />
        <TouchableOpacity 
         onPress={()=>{navigation.navigate("Home")}}
         className="absolute top-14 left-3 rounded-full shadow p-2 bg-gray-50" >
          <Icons.ArrowLeft strokeWidth={3} stroke={theme.bgColor(1)} />
          
        </TouchableOpacity>
           </View>
           <View style={{borderTopLeftRadius:40,borderTopRightRadius:40}}
          className="bg-gray-200 -mt-16 p-6"
          >
          <View className="px-5">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className=" flex-row  items-center">

            <View className="flex-row items-center space-x-1" >
         <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"/>
         
          <Text className="text-green-700">{item.stars}</Text>
          <Text className=" text-gray-600 ml-8" >
             ({item.reviews}review) .
             <Text className="" >{item.category}</Text>
          </Text>
         
        </View>
        <View  className="flex-row items-center  space-x-1 ml-3">
          <Icons.MapPin color={"red"}  width={20}  height={20}/>
          <Text className="font-bold text-red-500 pl-2" >Neary by</Text>
        </View>
          </View>
            </View>
            <Text className="text-black">{item.description}</Text>
           </View>
           <View className="pb-36 bg-gray-200 ">
           <Text className="font-bold px-4 py-4 text-2xl">Menu</Text>
           {
            item.dishes.map((dish,index)=>{
              return (<DishRow item={{...dish}} key={index} />)
            })
           }

           </View>

      </ScrollView>
    </View>
  )
}

export default RestaurantScreen