import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import AppBar from "../components/AppBar";
const VoluntierHome = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const username = state.auth.user?.userName;
  const [events, setEvents] = useState([]);
  // const navigation =useNavigation();
  useEffect(() => {
    const eventList = [
      "google",
      "ibm",
      "reception",
      "quest",
      "Techathalon",
      "google",
      "ibm",
      "reception",
      "quest",
      "Techathalon",
    ];

    setEvents(eventList);
  }, [])

  // Calculate the width of each card based on screen width and margin
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 40) / 3; // 40 is the total horizontal margin (2 x 20)

  const RedirectToCorrecpondingSection = (event) => {
    const eventString = String(event); // Convert event to a string
    alert(`click ${eventString}`);
    console.log(eventString);
    navigation.navigate("tab" ,{event}); // Pass eventString as a string
  }
  

  return (
      <SafeAreaView style={styles.container}>
      <AppBar userName={username}/>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          {events.map((eventName, index) => (
            <TouchableOpacity onPress={()=>{RedirectToCorrecpondingSection(eventName)}}  key={index} >
            <Card style={[styles.card, { width: cardWidth }]}>
              <Card.Content>
              <Title style={{ fontWeight:'700', fontSize: eventName.length > 6 ? 16 : 20 }} numberOfLines ={1} ellipsizeMode="tail">
                 {/* <Text style={styles.textName}> */}
                  {eventName}
                  {/* </Text>  */}
                </Title>
              </Card.Content>
              {/* <Card.Cover source={{ uri: 'https://media.designrush.com/inspiration_images/134929/conversions/_1512513081_152_ibm-desktop.jpg' }} /> */}
              <Card.Content>
                <Paragraph>ICSET Application</Paragraph>
              </Card.Content>
            </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>

   
   
  );
};

export default VoluntierHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10, // Adjust the margin as needed between rows
    marginBottom:10
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop:10
  },
  textName:{
    fontWeight:'700',
    
  }
});
