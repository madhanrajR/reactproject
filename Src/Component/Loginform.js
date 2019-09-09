import React from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet ,Image} from 'react-native'
//import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import logo from '../../assets/Images/Login1.png'
import { onSignIn } from "../../Src/auth";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
import { connect } from 'react-redux';

import * as Actions from '../Actions/ActionTypes';
var url="https://reactnativenode.herokuapp.com"//"http://10.10.0.165:3000"
class Login extends React.Component {
   constructor(props){
        super(props);
        AsyncStorage.getItem("USER_KEY",(err,data)=>{

            console.log("vs1",data)
        })
   }
   //  state = {
   //    email: '',
   //    password: ''
   // }
   // handleEmail = (text) => {
   //    this.setState({ email: text })
   // }
   // handlePassword = (text) => {
   //    this.setState({ password: text })
   // }
   login = (email, pass) => {
      let instance = this;
      let data={
         username: email,
         password: pass
       }
      // let data={
      //    username: this.props.username,
      //    password: this.props.password
      //  }
    //  alert('email: ' + email + ' password: ' + pass)
    
        alert('email: ' + email + ' password: ' + pass)
        axios.post(url+'/login',data )
       .then(function (response) {
       // 
         // console.log('res',response.data.status);
         console.log('res',response.data.token);
         if(response.data.token)
         {
         //instance.setState({status:response.data.status})
         onSignIn().then(() =>instance.props.navigation.navigate('Dashboard'));
              }
                   })
       .catch(function (error) {
         console.log(error);
       });
        
       
     
  
}
   render() {
    // AsyncStorage.getItem("vs",(err,data)=>{

    //     console.log("vs",data)
    // })
      return (
         <View style = {styles.container}>
         {/* <Text style={{color:'#7a42f4',fontSize:40,paddingLeft:60}}>Login Form</Text> */}
         <View style = {styles.container2}>
         <Image source={logo}  style = {styles.logo}/>
         </View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(text)=>this.props.handleEmail(text)}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {(text)=>this.props.handlePassword(text)}/>
                {/* <Button/> */}
                <View  style = {styles.container1}>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.props.username, this.props.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
         <View  style = {styles.container1}>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('Signup')}>
               <Text style = {styles.submitButtonText}> SingnUp </Text>
            </TouchableOpacity>
         </View>
                
         </View>
        
      )
   }

   // static navigationOptions = {
   //    title: 'SignIn Form',
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



//export default Login


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

const mapStateToProps = (state) => ({
    
   username: state.loginReducer.username,
   password: state.loginReducer.password,
});

const mapDispatchToProps = (dispatch) => ({
   handleEmail: (text) => dispatch({type: Actions.username,payload:text}),
   handlePassword: (text) => dispatch({type: Actions.password,payload:text}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
