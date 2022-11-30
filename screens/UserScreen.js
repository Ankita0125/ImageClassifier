import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions3 from '../component/NavOptions3';

const UserScreen = () => {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <Image 
            style={{
              width:100,
              height:100,
              resizeMode:"contain",
             }}
             source={{
              uri:"https://links.papareact.com/gzs",
             }}
  
          />
             <NavOptions3></NavOptions3>
        </View>
      </SafeAreaView>
    );
  };
  
  export default UserScreen;
  
  const styles = StyleSheet.create({
      text:{
          color:"blue",
      },
  
  });