import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Button1 = (props) => {
    return( 
        <TouchableOpacity style = {[styles.login, props.style]}>
         <Text style={styles.log}>{props.title}</Text>

        </TouchableOpacity>


    
            
    )
}

export default Button1;

const styles = StyleSheet.create({
login:{
     backgroundColor:'limegreen', 
     width:110, 
     height:42, 
     margin:10,
     borderRadius:2,
     alignItems:'center'
       },
      log: {
        color:'white',
         margin: 10,
         fontSize:17,
         textAlign:'center'
       },
})