import React from "react";
import { View,Text } from "react-native";
import SearchableDropDown from "react-native-searchable-dropdown";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
const CollegeList =({navigation})=>{

    // const [selectedData, setSelectedData] = useState(null);
    var items = [
        {
          id: 1,
          name: 'JavaScript',
        },
        {
          id: 2,
          name: 'Java',
        },
        {
          id: 3,
          name: 'Ruby',
        },
        {
          id: 4,
          name: 'React Native',
        },
        {
          id: 5,
          name: 'PHP',
        },
        {
          id: 6,
          name: 'Python',
        },
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        },
      ];

const handleItemSelected=(item)=>{
let collegeName = item.name;
alert(`college ${item.name}`);
navigateToBulkVerification(collegeName);

}

// navigate To Bulk verification
const navigateToBulkVerification =(collegeName)=>{
    navigation.navigate("BulkVerification",{collegeName});
}


    return(
        <SafeAreaView style={styles.container}>
    
        <Text style={styles.titleText}>ICSET Registered College List</Text>
            <SearchableDropDown
            onTextChange={(text) => console.log(text)}
            onItemSelect={handleItemSelected}
            containerStyle={{ padding: 5 }}
            textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#FAF7F6',
            }}
            itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#FAF9F8',
                borderColor: '#bbb',
                borderWidth: 1,
            }}
            itemTextStyle={{
                color: '#222',
            }}
            itemsContainerStyle={{
                maxHeight: '100%',
            }}
            items={items}
            defaultIndex={2}
            placeholder="Select a college"
            resetValue={false}
            underlineColorAndroid="transparent"
            />
    </SafeAreaView>
)
}

export default CollegeList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b0c4de',
        padding: 10,
      },
      titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      headingText: {
        padding: 8,
      },
})