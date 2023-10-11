// import { Divider, NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet,View,BackHandler } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Button} from "react-native-paper";
import UserProfileCard from "../../components/ProfileCard";
import { UserDataByUserId } from "../../Connection/API_Connection/fetchData";
const verifySingleUser =({route , navigation})=>{
    const {id} = route.params;

    // fetching user databyid
    useEffect(async()=>{
        const userDetails = await UserDataByUserId(id);
        console.log("userDatadisplay",userDetails);
    },[])
    // navigate To Scan Button Page
    const navigateToScan=()=>{
        navigation.navigate("tab",{});
    }
    // avoid back navigation
    useEffect(()=>{
        const handleBackpress =()=>{
            navigateToScan();
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handleBackpress
        );
        return ()=>{
            backHandler.remove();
        }
    },[])
    return(
        
        <SafeAreaView style={styles.container}>
            
          <UserProfileCard id={id} />
          
          <View style={styles.buttonView}>
                  <Button mode="contained" style={styles.verifyButton} 
                      
                  >
                      Verify
                  </Button>
                  <Button mode="contained" style={styles.cancelButton} 
                      onPress={navigateToScan}
                  >
                      back
                  </Button>
        </View>
        
        </SafeAreaView>
        
    )
}

export default verifySingleUser;

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#b0c4de'
},
verifyButton: {
    backgroundColor: "#1e7898",
    marginTop: 20,
    height:50,
     width:150,
},
cancelButton: {
    backgroundColor: "#ff0000",
    marginTop: 20,
    marginLeft: 20,
    height:50,
    width:100
},
buttonView: {
    alignSelf:'center',
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 50,
},

})