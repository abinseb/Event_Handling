
import React, { useState ,useEffect} from "react";
import { TouchableOpacity } from "react-native";
import { View,Text ,StyleSheet} from "react-native";
import { Button } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckConnection } from "../../Connection/API_Connection/CheckConnection";

import { UseSelector, useSelector } from "react-redux";

const Workshop =({route,navigation})=>{
    const {event} = route.params;
    const eventString = useSelector((state)=>state.event.eventString);
  
   const [network,setNetwork] = useState('');
useEffect(async()=>{
   let conection = await CheckConnection();
    console.log('connectionuu',conection);
    if(conection ===true){
       setNetwork('Online')
    }
    else{
        setNetwork('Offline');
    }
},[])
//    navigation to scanner
   const handleNavigationToScan=()=>{
        navigation.navigate('QRCode Scan');
   }

//    navigation to manualy input the id 
   const handleNavigateToInputData=()=>{
    navigation.navigate('Input Data');
   }
    return(
        <SafeAreaView 
            style={[styles.container ,
                {
                    backgroundColor: network === 'Online' ? '#b0c4de' : '#ffff',
                },
            ]}
        >
            <View style={styles.viewNetwork}>
                <Text>{network}</Text>
            </View>
            
            <View style={styles.viewTextEvent}>
                <Text style={styles.textEvent}>{eventString}</Text>
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
      
    },
    viewNetwork:{
        top:0,
        position:'absolute',
        alignSelf:'center',
        margin:10
    }
})