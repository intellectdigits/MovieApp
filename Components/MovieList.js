import { View,Text, TouchableNativeFeedback, Dimensions, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const MovieList = ({title,data,movieName}) => {
  var {width,height}= Dimensions.get("window");
  const handleclick=()=>{

  }
  return (
 <View className="mb-8 space-y-4">
<View className="mx-4 flex-row justify-between items-center">
<Text className="text-white text-xl">{title}
</Text>
<TouchableOpacity>
    <Text className="text-lg text-yellow-300 text-lg">See All</Text>
</TouchableOpacity>
</View>
<ScrollView
horizontal
showsHorizontalScrollIndicator={false}
contentContainerStyle={{paddingHorizontal:15}}
>
{
data.map(({item,index})=>{
  return(
    <TouchableWithoutFeedback
    key={index}
    onPress={()=>handleclick}
    >
      <View className="space-y-1 mr-4">
        
        <Image 
         source={require("../assets/movie.jpg")}
         style={{width:width*0.33,height:height*0.22}} className="rounde-3xl"/>
          <Text className="text-neutral-300 ml-1">
        {movieName.length>14?movieName.slice(0,14)+"...":movieName}
      </Text>

      </View>
     
    </TouchableWithoutFeedback>
  )
})
}
</ScrollView>

 </View>
  )
}

export default MovieList
