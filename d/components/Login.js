import React, {Component} from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import Test1 from '../Test1'
import Button1 from '../components/Button1'
import TextInputComponent from '../components/TextInputComponent'

class Login extends Component {
  constructor() {
    super();

    this.state = { 
       hidePassword: "true ",
       email: "",
       emailError: "",
       password: "",
       passwordError: "",
       TypeEmail:"",
       TypePassword:"",
}
};


secureTextEntry = () => {
  this.state.secureTextEntry ? this.setState({secureTextEntry:false})
  : this.setState({secureTextEntry:true});
}
emailValidate = () => {
  if (this.state.TypeEmail == this.state.email) {
    this.setState({emailError:" Valid email"})
  }else{this.setState({emailError:"Enter a valid email"})}
}

passwordValidate = () => {
  if (this.state.TypeEmail == this.state.password) {
    this.setState({passwordError:" Valid password"})
  }else{this.setState({passwordError:"Enter a valid password"})}
};
CompleteValidator = () => {
  if(this.state.email== "" && this.state.password == ""){
alert ('Incorrect email id and password')
  }
  else{
    alert('Login Successfully')
  }
}


setPasswordVisibility = () => {
  this.setState({ hidePassword: !this.state.hidePassword });
}

  
facebook = () => {
    alert('Sign into facebook successfully ');
  };
google = () => {
    alert('Sign into google successfully ');
  };
 render(){

  return (
    <View style={styles.container}>
      {/* <Image source={require('../AssetImage/grocery.png')} style={styles.image}/> */}
    <Test1 path={require('../AssetImage/grocery.png')} style={styles.image} />
    
  
             
      <Text style={{margin: 20, fontSize: 20}}>Welcome Back</Text>
      <View>
        <View>
          <Text style={{fontSize: 15, marginLeft:15}}>Email</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.Emailsection}>
              {/* <Image source={require('../AssetImage/email-icon.jpeg')} style={styles.email} /> */}
            <Test1 path={require('../AssetImage/email-icon.jpeg')} style={styles.email} />
            
              
              <TextInputComponent placeholder= "Email" style={styles.placeholder} 
               onBlur={() => this.emailValidate()}
              autoCapitalize="words"
              // onChange={(text) => this.setState({TypeEmail: text})}
          
            onChangeText={(text) => this.setState({TypeEmail: text})}

          // onChange={text => {this.setState({email:text})}
  /> 
  
           </View>
          </View>
          <Text style={styles.emailidmsg}>{this.state.emailError}></Text>
        </View>
      </View>
      <View>
        <Text style={{fontSize: 15, marginLeft: 5, padding: 15}}>Password</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.password}>
            {/* <Image source={require('../AssetImage/key.png')} style={styles.key}/> */}
            <Test1 path={require('../AssetImage/key.png')} style={styles.key}/>
           
           
            <TextInput placeholder= "Password" 
            onBlur = 
            {() => this.passwordValidate()}
              style={styles.placeholderpass}
              onChangeText={(text) => this.setState({TypePassword:text})}
             secureTextEntry={this.state.hidePassword}></TextInput>
             
              <TouchableOpacity onPress={this.setPasswordVisibility}>
        {/* <Image source={(this.state.hidePassword)  ? require('../AssetImage/eye.png') : require('../AssetImage/eye-hidden.webp')} style={styles.eye}/> */}
        <Test1 path={(this.state.hidePassword)  ? require('../AssetImage/eye.png') : require('../AssetImage/eye-hidden.webp')} style={styles.eye}/>
             </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.passwordmsg}>{this.state.passwordError}</Text>
        </View>
    
      <View style={{margin: 10, paddingTop: 20}}>
        <TouchableOpacity onPress={() => alert("hii")}>
        <Text style={styles.forgotpassword}>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
      <View style={styles.login}>
        <Button1 title = {'Login'}/>
        {/* <Button1 title = {'Login'} onPress={this.CompleteValidator}/> */}
        
      {/* <Button title="Login" color="white" onPress={this.CompleteValidator}/> */}

      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 30}}>
        <View style={styles.line} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
        </View>
        <View style={styles.line} />
      </View>
      <Text style={styles.continuewith}>Continue With</Text>
      <View style={styles.button}>
        <View>
          <TouchableOpacity onPress={() => {this.facebook()}}>
          {/* <Image source={require('../AssetImage/facebook.png')} style={styles.facebook}/> */}
          <Test1 path={require('../AssetImage/facebook.png')} style={styles.facebook}/>
              
</TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity onPress={() => {this.google()}}>
        <Test1 path={require('../AssetImage/google.jpg')} style={styles.google} />
        </TouchableOpacity>
        
        
          {/* <Image source={require('../AssetImage/google-logo.png')} style={styles.ggl}/>
         
          <Button onPress={this.google} title="Google" color="black" /> */}
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.paragraph}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => alert("Hello")}>
        <Text style={styles.highlight}>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 50,
    marginTop: 60,
  },
  email: {
    height:15,
    width: 20,
    marginTop: 30
    
  },
   eye: {
      height: 15,
      width: 20,
      marginTop: 25
  },
  placeholder: {
    marginLeft: 10,
    marginTop: 30,
marginTop:15
    
  },
  Emailsection: {
    flexDirection: 'row',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    margin:10,
    width:340
  },
  password: {
    flexDirection: 'row',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderTopColor: 'white',
    borderWidth: 1,
    borderColor: 'green',
    //margin:10
  },
  placeholderpass: {
  paddingTop:10,
    marginLeft: 10,
    width: 300,
  },
  button:{
    flexDirection:"row",
    padding:30
  },
  key: {
    height: 20,
    width: 20,
    marginTop: 25,
  },
  // login:{
  //   backgroundColor:'limegreen', 
  //   width:110, 
  //   height:42, 
  //   margin:10,
  //   borderRadius:2,
  //   alignItems:'center'
  // },
  // log: {
  //  color:'white',
  //  margin: 10,
  //   fontSize:17,
  //   textAlign:'center'
  // },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    margin: 5,
  },
  continuewith: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  forgotpassword:{
    color:'green',
    fontSize:15
  },
  facebook: {
    flexDirection: 'row',
    marginBottom: 20,
    marginRight: 10,
    paddingTop:20
  },
  google: {
    flexDirection: 'row',
    marginBottom: 10,
    marginRight: 2,
    paddingTop:20,
    height:42,
    width:140,
    borderWidth: 1,
    marginLeft: 15,
  },
  
  paragraph: {
    marginTop: 10,
    fontSize: 15,
  },
  highlight: {
    marginTop: 10,
    color: 'green',
    fontSize: 15,
  },
  emailidmsg:{
    color:'red',
    marginLeft:10
  },
  passwordmsg:{
    color:'red',
    marginLeft:10
  },
  
}
);

export default Login;


