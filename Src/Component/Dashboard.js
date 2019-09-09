import React from 'react';
import { Button, View, Text,TouchableOpacity} from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import { onSignOut } from "../../Src/auth";
import AsyncStorage from '@react-native-community/async-storage';
export default class DetailsScreen extends React.Component {
      render() {
        AsyncStorage.getItem("USER_KEY",(err,data)=>{

            console.log("vs",data)
        })
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <TouchableOpacity onPress={this.props.navigation.openDrawer}>
           <Text>Open Drawer</Text>
         </TouchableOpacity>
            <Text>Details Screen</Text>
            <Button
              title="signout"
              onPress={() => onSignOut().then(() => this.props.navigation.navigate('Login'))}
            />
          </View>
        );
      }
    }

    DetailsScreen.navigationOptions = {
      title: 'Dashboard'
    }