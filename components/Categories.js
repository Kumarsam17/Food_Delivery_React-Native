import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants/data'

const Categories = () => {

    const [activeCategory, setActiveCategory] = useState(null);
    return (
        <View >
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                className="overflow-visible"
                contentContainerStyle={{
                    paddingHorizontal: 12
                    
                }}>

                {
                    categories.map((category, index) => {
                        let isActive = category.id == activeCategory;
                        let btnClass = isActive? "bg-gray-600" : "bg-gray-200";
                        let textClass = isActive? "font-semibold text-gray-800" : "text-gray-500";
                        return (
                            <View key={index}  className="flex justify-center items-center mr-6">
                                <TouchableOpacity onPress={() => setActiveCategory(category.id)} 
                                
                                className={"p-1 rounded-full shadow bg-gray-300"} >
                                    <Image style={{height:50,width:50}}  source={category.image} />
                                    
                                </TouchableOpacity>
                                <Text className={"text-sm text-red-600"}>{category.name}</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Categories;