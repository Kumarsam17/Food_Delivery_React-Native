import { View, Text, TextInput, ScrollView} from 'react-native'
import React from 'react'

import { StatusBar } from 'expo-status-bar'

import { theme } from '../theme'
import Categories from './Categories'

import * as Icons from 'react-native-feather';
import { featured } from '../constants/data'
import FeaturedRow from './FeaturedRow'
import { SafeAreaView } from 'react-native-safe-area-context'




const HomeScreen = () => {

  return (
    <SafeAreaView className=" from-65% mt-2 ">
      
        <StatusBar barStyle="dark-content" />
        <View className="flex  items-center">
          <Text 
           className=" text-blue-500 text-3xl justify-center item-center flex ">Ankit Dhaba</Text></View>
      <View className="flex-row items-center space-x-3 px-4 pb-2" >
        
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-blue-300" >
         <Icons.Search height="25" width="25" stroke="grey" />
         <TextInput  placeholder='Restaurant' className='flex-1 ml-2'/>
         <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-600">
          <Icons.MapPin width={"20"} height={"20"} stroke="gray" />
          <Text className="text-gray-600">New York,NYC</Text>
         </View>
        </View>
        <View style={{backgroundColor:theme.bgColor(1)}} className="bg-gray-100 p-3 rounded-full" >
          <Icons.Sliders height={25} width={25} strokeWidth={2.5} stroke={"white"} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}
      contentContainerStyle={{
        paddingBottom:20 ,
        marginLeft:5
      }}>
        <Categories />

        <View className="mt-2">
          {
            [featured,featured,featured].map((item,index)=>{
              return (
                <FeaturedRow key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description }/>
              )
            })
          }
          
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen