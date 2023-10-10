// import { Divider, NativeBaseProvider } from "native-base";
import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import card from "../../components/Card";
import CardView from "../../components/Card";
const verifySingleUser =({route})=>{
    const {data} = route.params;
    return(
        
        <SafeAreaView style={styles.container}>
            
           {/* <View style={styles.ViewBox}>
                <View style={styles.TextView}>
                    <Text style={styles.textName}>Vimal</Text>
                </View>
                <View style={styles.textDetailsView}>
                            <View style={styles.profileBox}>
                                <Text style={styles.label}>Id: </Text>
                                <Text style={styles.value}>123</Text>
                            </View>
                           
                            <View style={styles.profileBox}>
                                <Text style={styles.label}>Email: </Text>
                                <Text style={styles.value}>vimal@123</Text>
                            </View>
                            <View style={styles.profileBox}>
                                <Text style={styles.label}>Institution: </Text>
                                <Text style={styles.value}>college of engineering vatakara</Text>
                            </View>
                           
                </View>
                        
              

           </View> */}
       <CardView/>

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
ViewBox:{
    backgroundColor:'white',
    width:'90%',
    borderRadius:20,
    height:'80%',
    alignSelf:'center',
    flex:0.8,
},
TextView:{
    alignItems:'center',
    margin:10,
},
textName:{
    fontSize:23,
    fontWeight:'700',
    margin:20,
},
textDetailsView:{
    alignItems:'center',
    marginTop:10,

},
profileBox:{
    flexDirection:'row'
},
label: {
    fontWeight: "bold",
    color: "#333",
    fontSize:10,
},
value:{
    flex:1,
    fontSize:10,
    fontWeight:'bold',
    fontFamily:'sans-serif'
},
})