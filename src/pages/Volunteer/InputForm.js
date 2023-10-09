import * as React from "react";
import { Box,Heading, VStack, FormControl, Input,Button, Center, NativeBaseProvider } from "native-base";

const InputData=()=>{
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
                  
                 
                />
              </FormControl>
              
              <Button mt="2" colorScheme="teal" bg="#1e7898" >
                Search..
              </Button>
             
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    )
}

export default InputData;