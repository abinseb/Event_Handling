import * as React from "react";
import { useState } from "react";
import { Box,Heading, VStack, FormControl, Input,Button, Center, NativeBaseProvider } from "native-base";

const InputData=({navigation})=>{
  const [id , setId] = useState('');

  const handleNavigation=()=>{
    console.log(id);
      navigation.navigate('verifyuser',{id});
  }
    return(
        <NativeBaseProvider>
        <Center w="100%">
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
              Welcome
            </Heading>
            <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
              Input the Id OR Mobile Number to continue!
            </Heading>
  
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>ID OR Mobile Number </FormControl.Label>
                <Input 
                value={id}
                onChangeText={(value)=>{setId(value)}}
                />
              </FormControl>
              
              <Button mt="2" colorScheme="teal" bg="#1e7898" onPress={handleNavigation} >
                Search..
              </Button>
             
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    )
}

export default InputData;