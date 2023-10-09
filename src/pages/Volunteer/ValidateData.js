import React from "react";
import { View,Text } from "react-native";

const validateData =({route})=>{
    const {data} = route.params;
    return(
        <View style={{paddingTop:200}}>
            <Text>data{data}</Text>
        </View>
    )
}

export default validateData;