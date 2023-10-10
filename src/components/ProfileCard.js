import React from "react";
import { StyleSheet, View, Text } from "react-native";

const UserProfileCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.TextView}>
        <Text style={styles.textName}>Vimal Prakash TJ</Text>
      </View>
      <View style={styles.textDetailsView}>
        <View style={styles.profileBox}>
          <Text style={styles.label}>Id: </Text>
          <Text style={styles.value}>123</Text>
        </View>
        <View style={styles.profileBox}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.value}>vimajjjjjjjj567788888l@1234gmail.com</Text>
        </View>
        <View style={styles.profileBox}>
          <Text style={styles.label}>Mobile Number: </Text>
          <Text style={styles.value}>9074516446</Text>
        </View>
        <View style={styles.profileBox}>
          <Text style={styles.label}>Institution: </Text>
          <Text style={styles.value}>College of Engineering Vadakara</Text>
        </View>
        <View style={styles.categoryView}>
            <Text style={styles.textCategory}>Techathalon</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "95%",
    borderRadius: 20,
    alignSelf: "center",
    height:'auto',
  },
  TextView: {
    alignItems: "center",
    margin: 10,
  },
  textName: {
    fontSize: 23,
    fontWeight: "700",
    margin: 10,
  },
  textDetailsView: {
    alignItems: "center",
  },
  profileBox: {
    flexDirection: "row",
  },
  label: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 13,
    margin: 10,
  },
  value: {
    flex: 1,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    margin: 10,
  },
  categoryView:{
    alignSelf:'center',
    margin:20
  },
  textCategory:{
    fontSize:20,
    fontWeight:'900',
    color:'#000080'
  }

});

export default UserProfileCard;
