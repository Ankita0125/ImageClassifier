import { View, Text, FlatList, TouchableOpacity,Image} from 'react-native'
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const data=[
    {
    id:"111",
    title:"Information",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTqU1jFJjIBgX4SdcBfV57rCe3GQ27tcGXg&usqp=CAU",
    screen:"Information",
    },
    {
    id:"222",
    title:"Schedule pickup",
    image:"https://thumbs.dreamstime.com/b/time-delivery-schedule-pickup-icon-beautiful-design-fully-editable-commercial-print-media-web-any-type-projects-152725063.jpg",
    screen:"Pickup",
    },
];

const NavOptions3 = () => {
    const navigation=useNavigation();
  return (
    
    <FlatList
    data={data}
    horizontal
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
        
        <TouchableOpacity
        onPress={()=> navigation.navigate(item.screen)} 
         style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 h-70 mt-25 ml-5`}
         >
            <View >
                <Image 
                style={{
                    width:120,
                    height:120,
                    resizeMode:"contain",
                }}
                source={{uri:item.image}} />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name="arrowright"
                    color="white"
                    type="antdesign"
                />
        
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions3;