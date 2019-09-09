import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
// Version can be specified in package.json
import Loginscreen from './Component/Loginform';
import DashboardScreen from './Component/Dashboard';
import Signup from './Component/Singnup'
import AuthLoadingScreen from './Component/AuthLoadingScreen'
import {USER_KEY} from './auth'
import AsyncStorage from '@react-native-community/async-storage';

   const BeforeLogin = createStackNavigator(

    {
      Signup:{
        screen: Signup,
        navigationOptions: () => ({
          title: 'SignUp Form',
        //   headerLeft: null,
        // gesturesEnabled: false,
          headerStyle: {
            backgroundColor: '#7a42f4',
          },
          headerRight: (<View />),
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign:"center", 
            flex:1 ,
            fontWeight: 'bold',
            fontSize:20
            
          },
       }),
      },
      Login: {
        screen: Loginscreen,
        navigationOptions: () => ({
          title: 'SignIn Form',
          headerLeft: null,
        gesturesEnabled: false,
          headerStyle: {
            backgroundColor: '#7a42f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign:"center", 
            flex:1 ,
            fontWeight: 'bold',
            fontSize:20
            
          },
       }),
      },
      
      // Dashboard: {
      //   screen: DashboardScreen,
      //   navigationOptions: () => ({
      //     title: 'DashBoard Form',
      //     headerStyle: {
      //       backgroundColor: '#7a42f4',
      //     },
      //     headerRight: (<View />),
      //     headerTintColor: '#fff',
      //     headerTitleStyle: {
      //       textAlign:"center", 
      //       flex:1 ,
      //       fontWeight: 'bold',
      //       fontSize:20
            
      //     },
      //  }),
      // },
    },
      {
        initialRouteName:"Login",
      }
    );
   const AfterLogin = createStackNavigator(

    {
      // Signup:{
      //   screen: Signup,
      //   navigationOptions: () => ({
      //     title: 'SignUp Form',
      //   //   headerLeft: null,
      //   // gesturesEnabled: false,
      //     headerStyle: {
      //       backgroundColor: '#7a42f4',
      //     },
      //     headerRight: (<View />),
      //     headerTintColor: '#fff',
      //     headerTitleStyle: {
      //       textAlign:"center", 
      //       flex:1 ,
      //       fontWeight: 'bold',
      //       fontSize:20
            
      //     },
      //  }),
      // },
      // Login: {
      //   screen: Loginscreen,
      //   navigationOptions: () => ({
      //     title: 'SignIn Form',
      //     headerLeft: null,
      //   gesturesEnabled: false,
      //     headerStyle: {
      //       backgroundColor: '#7a42f4',
      //     },
      //     headerTintColor: '#fff',
      //     headerTitleStyle: {
      //       textAlign:"center", 
      //       flex:1 ,
      //       fontWeight: 'bold',
      //       fontSize:20
            
      //     },
      //  }),
      // },
     
      Dashboard: {
        screen: DashboardScreen,
        navigationOptions: () => ({
          title: 'DashBoard Form',
          headerStyle: {
            backgroundColor: '#7a42f4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            textAlign:"center", 
            flex:1 ,
            fontWeight: 'bold',
            fontSize:20
            
          },
       }),
      },
    },
      // {
      //   initialRouteName: "Dashboard",
      // }
    );

    const DrawerNavigator = createDrawerNavigator({
      Login: Loginscreen,
      Signup: Signup,
      Dashboard:DashboardScreen
    },
      {
        initialRouteName: "Dashboard",
      },
      {
            hideStatusBar: true,
            drawerBackgroundColor: 'rgba(255,255,255,.9)',
            overlayColor: '#6b52ae',
            contentOptions: {
              activeTintColor: '#fff',
              activeBackgroundColor: '#6b52ae',
            },
          })


          const AppStack = createStackNavigator({ Dashboard: DashboardScreen });
const AuthStack = createStackNavigator({ Login: Loginscreen });

// export default createAppContainer(createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     App:AuthStack, //AfterLogin,
//     Auth: AppStack//BeforeLogin,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//   }
// ));
    export {BeforeLogin,AfterLogin,DrawerNavigator}
  //  export default Routestack
