import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
const  UserVerification=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topProfileView}>
                <View style={styles.ProfileIcon}>    
                    <FontAwesome name="user" size={100} color="#293033" />
                </View>
                <View style={styles.profileText}>
                    <Text style={styles.txtDataTop}>Email :</Text>
                    <Text style={styles.txtDataTop}> emailId.@gmail.com</Text>
                </View>
            </View>
           
            
            <View style={styles.viewBox}>
                <View style={styles.bottomProfileView}>
                    <View style={styles.bottomProfileData}>
                        <Text style={styles.txtData}>Name</Text>
                        <Text style={styles.txtValue}>Niranjan CK</Text>
                        </View>

                        <View style={styles.separator} />

                        <View style={styles.bottomProfileData}>
                        <Text style={styles.txtData}>Mob Number</Text>
                        <Text style={styles.txtValue}>8547706773</Text>
                        </View>

                        <View style={styles.separator} />

                        <View style={styles.bottomProfileData}>
                            <Text style={styles.txtData}>Institution</Text>
                            <Text style={styles.txtValue}>St.Pius X College Rajapuram</Text>
                        </View>

                        <View style={styles.separator} />

                        <View style={styles.bottomProfileData}>
                            <Text style={styles.txtData}>Institution</Text>
                            <Text style={styles.txtValue}>St.Pius X College Rajapuram</Text>
                        </View>

                        <View style={styles.separator} />
                        
                </View>
                <View style={styles.buttonView}>
                    <Button mode="contained" style={styles.verifyButton}>
                        Verify
                    </Button>
                    <Button mode="contained" style={styles.backButton}>
                      Back
                    </Button>

                </View>
               
            </View>

        </SafeAreaView>
    )

}
export default UserVerification;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#00BFFF',
        flex:1,
        justifyContent:'flex-end'
    },
    viewBox:{
        backgroundColor:'#ffff',
        flex:0.75,
        // borderRadius:50
    },
    topProfileView:{
        alignSelf:'center',
        alignItems:'center',
        top:0,
        position:'absolute',
        paddingTop:20,

    },
    ProfileIcon:{
        alignSelf:'center',
        paddingTop:10,
        backgroundColor:'#3D8299',
        borderRadius:80,
        height:'auto',
        width:'67%',
        alignItems:'center'
    },
    profileText:{
        alignSelf:'center',
        flexDirection:'row',
    },
    txtDataTop:{
        fontWeight:'300'
    },
  
      bottomProfileView: {
        paddingTop:30,
        alignItems:'flex-start',
      },
      bottomProfileData: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
      },
      
      separator: {
        alignSelf:'center',
        height:1,
        backgroundColor: 'darkgray', // Change to the same dark color
        width:'92%'
      },
    txtData:{
        fontSize:15,
        fontWeight:'500',
        color:'#a9a9a9',
        margin:5
    },
    txtValue:{
        fontSize:16,
        color:'#000000',
        margin:5
        
    },
    buttonView:{
        flexDirection:'row',
        paddingTop:20,
        alignItems:'center',
        alignSelf:'center',
        margin:10
    },
    verifyButton:{
        backgroundColor:'#29A3CC',
        margin:10,
    },
    backButton:{
        backgroundColor:'#3D5C66'
    }

})
