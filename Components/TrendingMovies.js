import { View,Text, TouchableNativeFeedback, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

export default function TrendingMovies({data}){
    var {width,height}= Dimensions.get("window");
   const navigation=useNavigation();
    const handleclick=()=>{
       navigation.navigate("MovieScreen")
    }
    return(
 
        <View className="mb-8">
    <Text className="text-white text-xl mx-4 mb-5">Trendings</Text>
    <Carousel
    data={data}
    renderItem={({item})=><MovieCard Item={item} handleclick={handleclick}/>}
    firstItem={1}
    inactiveSlideOpacity={0.60}
    sliderWidth={width}
    itemWidth={width*0.62}
    slideStyle={{display:"flex", alignItems:"center"}}
    />
    </View>
  
    )
}
const MovieCard=({item,handleclick})=>{
    var {width,height}= Dimensions.get("window");
    return(
        <TouchableNativeFeedback onPress={handleclick}>
           <Image
           source={require("../assets/movie.jpg")}
           style={{width:width*0.6,height:height*0.4}} className="rounde-3xl"/>
        </TouchableNativeFeedback>
    )
}