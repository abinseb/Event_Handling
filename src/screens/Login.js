import React, { useState } from "react";

import { Box, Text, Heading, VStack, FormControl, Input, Link, Button, HStack, Center, NativeBaseProvider } from "native-base";
import { connect} from "react-redux";

import { loginSuccess } from "../reduxStore/Actions";

const Login=({loginSuccess,navigation})=>{

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const handleVerification=()=>{
        console.log("click");
        console.log("userName",userName);
        console.log("Password",password);
        const user = {userName};
        loginSuccess(user);
        navigation.navigate('VHome');
    }

    return(
     <NativeBaseProvider>
         <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                  <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                  color: "warmGray.50"
                }}>
                    Welcome
                  </Heading>
                  <Heading mt="1" _dark={{
                  color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                  </Heading>
          
                  <VStack space={3} mt="5">
                    <FormControl>
                      <FormControl.Label>Email ID</FormControl.Label>
                      {/* type user name here */}
                            <Input 
                                value={userName}
                                onChangeText={(value) => {
                                    setUserName(value);
                                    console.log(`userName changed: ${value}`);
                                }}
                            />
                    </FormControl>
                    <FormControl>
                      <FormControl.Label>Password</FormControl.Label>
                      {/* type password here */}
                            <Input
                                type="password"
                                value={password}
                                onChangeText={(value) => {
                                    setPassword(value);
                                    console.log(`password changed: ${value}`);
                                }}
                            />
                      <Link _text={{
                      fontSize: "xs",
                      fontWeight: "500",
                      color: "indigo.500"
                    }} alignSelf="flex-end" mt="1">
                        Forget Password?
                      </Link>
                    </FormControl>
                    <Button mt="2" colorScheme="indigo"
                        onPress={handleVerification}
                    >
                      Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                      <Text fontSize="sm" color="coolGray.600" _dark={{
                      color: "warmGray.200"
                    }}>
                        I'm a new user.{" "}
                      </Text>
                      <Link _text={{
                      color: "indigo.500",
                      fontWeight: "medium",
                      fontSize: "sm"
                    }} href="#">
                        Sign Up
                      </Link>
                    </HStack>
                  </VStack>
                </Box>
              </Center>
    </NativeBaseProvider>
         
    );
};

export default connect(null, {loginSuccess})(Login);
