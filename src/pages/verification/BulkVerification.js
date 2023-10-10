import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl, // Import RefreshControl
} from "react-native";
import { Button, Checkbox as PaperCheckbox } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
const bulkVerification =({route})=>{
    const {collegeName} = route.params;

    const studentlist= [
        {
            id:"101",
            name:"Bimal",
            college:"college of engineering",

        },
        {
            id:"102",
            name:"amal",
            college:"CET"
        },
        {
            id:"103",
            name:"niranjan",
            college:"SCMS"
        },
        {
            id:"104",
            name:"Adrishin",
            college:"VimalJyothi"
        },
        {
        id:"105",
        name:"amala",
        college:"st pius X college Rajapuramhh hjjj hjjkkk"
        },
        {
            id:"106",
            name:"Adrishin",
            college:"VimalJyothi"
        },
        {
        id:"107",
        name:"amala",
        college:"st pius X college Rajapuramhh hjjj hjjkkk"
        },
        {
            id:"108",
            name:"amala",
            college:"st pius X college Rajapuramhh hjjj hjjkkk"
            },
            {
                id:"109",
                name:"Adrishin",
                college:"VimalJyothi"
            },
            {
            id:"110",
            name:"amala",
            college:"st pius X college Rajapuramhh hjjj hjjkkk"
            }
    ]

      // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <PaperCheckbox.Item
        status={item.checked ? 'checked' : 'unchecked'}
        onPress={() => toggleCheckbox(item._id)}
      />
      <ScrollView>
        <Text style={{fontWeight:'700'}}>{item.name}</Text>
         <Text>{item.college}</Text>
        {/* <Text>{item.phone}</Text>  */}
      </ScrollView>
    </View>
  );

//   toggle checkbox
  const toggleCheckbox = () => {
    // setStudentList((prevStudents) => {
    //   return prevStudents.map((student) => {
    //     if (student._id === studentId) {
    //       return { ...student, checked: !student.checked };
    //     }
        // return student;
    //   });
    // });
  };
    return(
        <SafeAreaView style={styles.container}>
       
        {/* <View style={styles.networkStatus}>
          <Text style={styles.networkText}>{network}</Text>
        </View> */}
  
        <View style={styles.viewBox}>
          <Text style={styles.collegeText}>{collegeName}</Text>
          <View style={styles.verified_and_Notverified_Count_View}>
            <Text style={styles.verifiedAndnotVerifiedCount}>Verified  :</Text>
            <Text style={styles.verifiedAndnotVerifiedCount}>Not Verified :</Text>
  
          </View>
  
          <FlatList
            style={styles.FlatlistData}
            data={studentlist}
            renderItem={renderItem}
            keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
            refreshControl={ // Add RefreshControl component here
              <RefreshControl
                // refreshing={refreshing}
                // onRefresh={handleRefresh}
              />
            }
          />
  
          <Button mode="contained" style={styles.verifyButton}>
            Verify
          </Button>
  
        </View>
        <View style={styles.offlineCount}>
          <Text style={styles.networkText}>Offline Verified Count :</Text>
        </View>
      </SafeAreaView>
    )
}

export default bulkVerification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#b0c4de",
      },
      checkboxContainer: {
        marginBottom: 5,
      },
      viewBox: {
        justifyContent: 'flex-start',
        alignItems: "center",
        borderRadius: 20,
        elevation: 1,
        padding: 20,
        backgroundColor: "white",
        width: '90%',
        alignSelf: 'center',
        paddingBottom: 20,
        height:"80%"
      },
      FlatlistData: {
        padding: 10,
        width: '100%',
        alignSelf: 'flex-start',
        backgroundColor: "white",
      },
      verifyButton: {
        backgroundColor: "#1e7898",
        marginTop: 20,
      },
      networkStatus: {
        alignSelf: 'center',
        paddingBottom: 20,
      },
      networkText: {
        color: '#ffff',
        fontWeight: '700'
      },
      collegeText: {
        fontWeight: '700',
      },
      itemContainer: {
        flexDirection: 'row', // To align checkbox, name, and email horizontally
        marginVertical: 8,
      },
      textContainer: {
        marginLeft: 16,
      },
      offlineCount: {
        bottom: 0,
        position: 'absolute',
        alignSelf: 'center'
      },
      CollegeverifyButton: {
        backgroundColor: "#abdbe3",
        marginTop: 20,
      },
     
     
      verified_and_Notverified_Count_View: {
        alignSelf: 'center',
        padding: 5,
      },
      verifiedAndnotVerifiedCount: {
        fontWeight: '500'
      }
})