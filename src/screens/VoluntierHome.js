import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { VStack, HStack, IconButton, Icon, Text, NativeBaseProvider, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from "react-native";
const VoluntierHome = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const username = state.auth.user?.userName;
  const [events, setEvents] = useState([]);

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

  const RedirectToCorrecpondingSection=(event)=>{
        alert(`click ${event}`)
  }

  return (
    <NativeBaseProvider>
      <StatusBar bg="#00bfff" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="#00bfff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Welcome, {username}
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
        </HStack>
      </HStack>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>

          {events.map((eventName, index) => (
            <TouchableOpacity onPress={()=>{RedirectToCorrecpondingSection(eventName)}}  key={index} >
            <Card style={[styles.card, { width: cardWidth }]}>
              <Card.Content>
              {/* <Title numberOfLines={1} ellipsizeMode="tail">{eventName}</Title> */}
              <Title style={{ fontWeight:'700', fontSize: eventName.length > 6 ? 16 : 20 }} numberOfLines ={1} ellipsizeMode="tail">
                 {/* <Text style={styles.textName}> */}
                  {eventName}
                  {/* </Text>  */}
                </Title>
              </Card.Content>
              {/* <Card.Cover source={{ uri: 'https://media.designrush.com/inspiration_images/134929/conversions/_1512513081_152_ibm-desktop.jpg' }} /> */}
              <Card.Content>
                <Paragraph>ISCET Application</Paragraph>
              </Card.Content>
            </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

export default VoluntierHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 10,
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
