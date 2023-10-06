import React, { useEffect, useState } from "react";
// import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
import { VStack, HStack, IconButton, Icon, Text, NativeBaseProvider, Box, StatusBar } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const AppBar =({props})=>{
    return(
        <NativeBaseProvider>
        {/* <StatusBar bg="#00bfff" barStyle="light-content" /> */}
        {/* <Box safeAreaTop bg="violet.600" /> */}
        <HStack bg="#00bfff" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%">
          <HStack alignItems="center">
            <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
            <Text color="white" fontSize="20" fontWeight="bold">
              Welcome,
            </Text>
          </HStack>
          <HStack>
            <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
            <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
          </HStack>
        </HStack>
    </NativeBaseProvider>
    )
}

export default AppBar;


