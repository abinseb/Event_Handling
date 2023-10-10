import React from "react";
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from "react-native";

const CardView =()=>{
    return(
        <Card style={styles.card}>
              <Card.Content>
              <Title >
                 {/* <Text style={styles.textName}> */}
                haiiiii
                  {/* </Text>  */}
                </Title>
              </Card.Content>
              {/* <Card.Cover source={{ uri: 'https://media.designrush.com/inspiration_images/134929/conversions/_1512513081_152_ibm-desktop.jpg' }} /> */}
              <Card.Content>
                <Paragraph>ICSET Application</Paragraph>
              </Card.Content>
    </Card>
    )
}
export default CardView;

const styles = StyleSheet.create({
    card:{
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop:10
    }
})