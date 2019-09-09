import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import * as Actions from '../Actions/ActionTypes';
 class CounterApp extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity onPress={this.props.navigation.openDrawer}>
           <Text>Open Drawer</Text>
         </TouchableOpacity>
                <Button
                    onPress={this.props.increment}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increase Count"
                />

                <Text>{this.props.count}</Text>

                <Button
                    onPress={this.props.decrement}
                    title="Decrease Count"
                    color="#841584"
                    accessibilityLabel="Decrease Count"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = (state) => ({
    
    count: state.counterReducer.count
});

const mapDispatchToProps = (dispatch) => ({
   increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
   decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);