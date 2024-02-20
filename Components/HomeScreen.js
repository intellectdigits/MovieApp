import { Platform } from "expo-modules-core";

import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import {Bars3CenterLeftIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import TrendingMovies from "./TrendingMovies";
import MovieList from "./MovieList";


const ios=Platform.OS=="ios";
export default function HomeScreen() {
  const[trending,setTrending]=useState([1,2,3,4])
  const[upcoming,setUpcoming]=useState([1,2,3,4])
  const[topRated,setTopRated]=useState([1,2,3,4])
  return (
    
    <View className="flex-1  bg-neutral-800 ">
     
      <SafeAreaView className={ios?"-mb-2":"mb-3 mt-4"}>
        <StatusBar style="light"/>
       <View className="flex-row justify-between items-center mx-4">
        <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
        <Text className="text-white text-3xl font-bold">Movies</Text>
        <TouchableOpacity>
          <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
        </TouchableOpacity>
       </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
      {/* Trending Movie Carousel*/}
      <TrendingMovies data={trending}/>
      <MovieList title="upcoming" data={upcoming} movieName="Legend of the seeker"/>
      <MovieList title="upcoming" data={upcoming} movieName="Legend of the seeker"/>
      </ScrollView>
    </View>
  );
}