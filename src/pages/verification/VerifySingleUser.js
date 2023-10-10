// import { Divider, NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import {Button} from "react-native-paper";
import UserProfileCard from "../../components/ProfileCard";
const verifySingleUser =({route})=>{
    const {data} = route.params;
    return(
        
        <SafeAreaView style={styles.container}>
            
          <UserProfileCard data={data} />
          
          <View style={styles.buttonView}>
                  <Button mode="contained" style={styles.verifyButton} 
                      
                  >
                      Verify
                  </Button>
                  <Button mode="contained" style={styles.cancelButton} 
                      
                  >
                      Cancel
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