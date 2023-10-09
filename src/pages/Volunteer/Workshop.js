
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View,Text ,StyleSheet} from "react-native";
import { Button } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";

const Workshop =({route,navigation})=>{
    const {event} = route.params;
   let statusOnline = "online";
   let statusOffline = "offline";
   let Network = statusOnline;
   
   const handleNavigationToScan=()=>{
        navigation.navigate('QRCode Scan');
   }

   const handleNavigateToInputData=()=>{
    navigation.navigate('Input Data');
   }
    return(
        <SafeAreaView 
            style={[styles.container ,
                {
                    backgroundColor: Network === statusOnline ? '#b0c4de' : '#ffff',
                },
            ]}
        >
            
            <View style={styles.viewTextEvent}>
                <Text style={styles.textEvent}>{event}</Text>
            </View>
            <View style={styles.btnContainer}>  
              <TouchableOpacity onPress={handleNavigationToScan} >
                <Button mode="contained" textColor="black" style={styles.btn}
                  
                ><Text style={{fontSize:20}} >Scan</Text></Button>
              </TouchableOpacity> 
                
            </View>
            <View style={styles.textClick}>
                <Text style={styles.text1}>If QR won't work?{" "}</Text>
                <TouchableOpacity onPress={handleNavigateToInputData} >
                    <Text style={styles.text2}>Click</Text>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
}

export default Workshop;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        // backgroundColor:'#f8f8ff'
        },
   
    btn:{
        backgroundColor:'#87cefa',
        
        height:150,
        width:150,
        justifyContent:'center',
        borderRadius:70,
        alignItems:'center',
    },
    btnContainer:{
        margin:20,
        alignSelf:'center'
    },
    textClick: {
        marginLeft: 20,
        alignSelf: 'center',
        bottom: 0,
        position: 'absolute',
        marginBottom: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text1: {
        fontSize: 18,
        color: '#000'
    },
    text2: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000'
    },
    viewTextEvent:{
        alignSelf:'center'
    },
    textEvent:{
        fontWeight:'900',
        fontSize:30,
      
    } 
})