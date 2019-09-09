import React from 'react';
import { ActivityIndicator,StyleSheet,Button, View, Text } from 'react-native';
import AuthLoadingScreen from './Src/Component/AuthLoadingScreen'
import { Provider } from 'react-redux';

import store from './Src/Reducers/index';
export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
   
         return (
          <Provider store={store}> 
           <AuthLoadingScreen/>
           </Provider>
           )
         
  }
}
