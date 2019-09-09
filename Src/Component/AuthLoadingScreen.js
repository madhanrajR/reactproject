import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Loginscreen from './Loginform';
import DashboardScreen from './Dashboard';
import Signup from './Singnup'
import counter from './CounterComponent';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('USER_KEY');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
    
      <View style={styles.container}>
        <ActivityIndicator /> 
        <StatusBar barStyle="default" />
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


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
     
    },
      {
        initialRouteName:"Login",
      }
    );
   const AfterLogin = createStackNavigator(

    {
      
     
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
      {
        initialRouteName: "Dashboard",
      }
    );

    const DrawerNavigator = createDrawerNavigator( {Dashboard: {
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
      Counter: {
        screen: counter,
        navigationOptions: () => ({
          title: 'Counter Form',
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
    
      {
        initialRouteName: "Dashboard",
      },
    //   {
    //         hideStatusBar: false,
    //         drawerBackgroundColor: 'rgba(255,255,255,.9)',
    //         overlayColor: '#6b52ae',
    //         contentOptions: {
    //           activeTintColor: '#fff',
    //           activeBackgroundColor: '#6b52ae',
    //         },
         // }
         )
const AppStack = createStackNavigator({ Dashboard: DashboardScreen });
const AuthStack = createStackNavigator({ Login: Loginscreen });
export default createAppContainer(createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: DrawerNavigator,
        Auth:BeforeLogin,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    ));