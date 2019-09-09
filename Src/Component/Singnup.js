import React from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet ,Image} from 'react-native'
//import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import logo from '../../assets/Images/Login1.png'
import { onSignIn } from "../../Src/auth";
import AsyncStorage from '@react-native-community/async-storage';
// import axios from 'react-native-axios'
import axios from 'axios'

var url="http://10.10.0.165:3000"
class Login extends React.Component {
   constructor(props){
        super(props);
        AsyncStorage.getItem("USER_KEY",(err,data)=>{

            console.log("vs1",data)
        })
   }
    state = {
      email: '',
      password: '',
      status:''
   }
   
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
     let instance = this;
      let data={
      username: email,
      password: pass
    }
        //alert('email: ' + email + ' password: ' + pass)
        // AsyncStorage.setItem('userToken', 'abc');
        axios.post(url+'/signup',data )
       .then(function (response) {
       // 
         console.log('res',response.data.status);
         if(response.data.status===true)
         {
         instance.setState({status:response.data.status})
         instance.props.navigation.navigate('Login');
              }
                   })
       .catch(function (error) {
         console.log(error);
       });
    
     
   
}

// handelroute = (status) => {
//    console.log('handelroute',status);
   
//    if(status)
//    {
//       this.props.navigation.navigate('Login');
//    }
// }
   render() {
    // AsyncStorage.getItem("vs",(err,data)=>{

    //     console.log("vs",data)
    // })
      return (
         <View style = {styles.container}>
         {/* <Text style={{color:'#7a42f4',fontSize:40,paddingLeft:60}}>SingnUp Form</Text> */}
         <View style = {styles.container2}>
         <Image source={logo}  style = {styles.logo}/>
         </View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
                {/* <Button/> */}
                <View  style = {styles.container1}>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> SingnUp </Text>
            </TouchableOpacity>
         </View>
         </View>
        
      )
   }
   // static navigationOptions = {
   //    title: 'SignUp Form',
   //    headerStyle: {
   //      backgroundColor: '#7a42f4',
   //    },
   //    headerTintColor: '#fff',
   //    headerTitleStyle: {
   //      fontWeight: 'bold',
   //      fontSize:30
        
   //    },
   //  };
}

export default Login

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      paddingLeft: 40,
   },
   container1: {
    paddingLeft: 100,
 },
 container2: {
    paddingRight: 40,
 },
   input: {
      margin: 15,
      height: 40,
      width:300,
      borderColor: '#7a42f4',
      borderWidth: 1,
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      width:100,
      alignItems: 'center',
   },
   submitButtonText:{
      color: 'white'
   },
   logo: {
   // flex: 1,
    width: "100%",
    resizeMode: "contain",
    // alignSelf: "center"
  },
})