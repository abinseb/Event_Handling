import React, { useEffect, useState } from "react";
import {View,Text, StyleSheet} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {BarCodeScanner} from 'expo-barcode-scanner';
const qrCodeScan =({navigation})=>{
    const [hasPermission , setHasPermission ] = useState(null);
    const [scanned , setScanned] = useState(false);
    const [ qrdata , setQrdata] = useState('')

// scanned qr data get on this fuction
    const handleBarCodeScanned=({type,data})=>{
        setScanned(true);
        setQrdata(data);
        alert(`clicked${data}`)
        navigateAndPassDataForValidate(data);
    }

const navigateAndPassDataForValidate =(id)=>{
        navigation.navigate("verifyuser",{id});
}



    useEffect(()=>{
        (async ()=>{
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[]);



    return(
        <SafeAreaView style={styles.container}>
            <BarCodeScanner 
                onBarCodeScanned={scanned ? null ||false :handleBarCodeScanned}
                style={styles.absoluteFillObject}
            />
            <Text>{qrdata}</Text>
        </SafeAreaView>
    )
}

export default qrCodeScan;

const styles = StyleSheet.create({
container:{
    justifyContent:'center',
    flex:1,
    backgroundColor:'#b0c4de'
},
absoluteFillObject:{
    height:'80%',
    width:'90%',
    alignSelf:'center',
}
})