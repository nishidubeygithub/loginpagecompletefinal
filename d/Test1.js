import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const Test1 = (props) => {
    return(     
     <View> 

         
                                                  
                
            {/* <Image 
           source={require('../AssetImage/grocery.png')} />                                                               */}
               
                {/* <Image source={require('./AssetImage/email-icon.jpeg')} style={styles.email}/> */}
           {/* <Image source={require('./AssetImage/key.png')} style={styles.key}/>  */}
           {/* <Image source={require('./AssetImage/facebook.png')} style={styles.facebook}/>                                  
                 */}
                 
                 {/* <Image source={require('./AssetImage/google-logo.png')} style={{height: 28, width: 35, marginTop: 7, marginLeft: 5}}/> */}
         <Image style={props.style}  source={props.path} /> 
            
       

    </View>
  );
}

export default Test1;
const styles = StyleSheet.create({
image:{
    height:60,
    width:100
},
Img:{
  height:30,
  width:40
},
key: {
  height: 20,
  width: 20,
  marginTop: 25
},
email: {
  height: 10,
  width: 20,
  marginTop: 30
}
})