import React, { Component } from "react";
import {StyleSheet,Animated} from 'react-native';

export default class AnimatedText extends Component{
   constructor(){
    super();
    this.animated = new Animated.Value(0);
   }
   componentDidMount(){
    this.animate();
   }
   animate(){
    Animated.timing(this.animated,{
        toValue:1,
        duration:2000,
        useNativeDriver:false,
    }).start();
   }
  
   render(){
    const opacity = this.animated.interpolate({
        inputRange:[0,1],
        outputRange:[0,1]
    });
    const translateX = this.animated.interpolate({
        inputRange:[0,1],
        outputRange:[-500,0]
    });
    const translateY = this.animated.interpolate({
        inputRange:[0,1],
        outputRange:[-500,1]
    });
    const scale = this.animated.interpolate({
        inputRange:[0,1],
        outputRange:[50,1]
    })

    const {text} = this.props;

    const transform = [{scale}];
    return(
   
        <Animated.Text style={[styles.textStyles,{backgroundColor:'transperent'},{transform,opacity}]}>
            {text}
        </Animated.Text>
     
    )
   }
   
}


const styles = StyleSheet.create({
    container:{
       alignItems:'center'
    },
    textStyles:{
        fontSize:38,
        fontWeight:900,
        
    }
})


