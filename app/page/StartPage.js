import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainPage from './Main';
import HeaderView from '../component/HeaderView';

class StartPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.body}>
                <HeaderView leftClick={() => {

                }}
                            centerTitle="登录"
                            mode={2}
                            clickRight={() => {

                            }}/>
                <TouchableOpacity style={styles.btn}
                                  onPress={() => {
                                      this.props.navigation.navigate('Main');
                                  }}>
                    <Text>点击进入下一个页面</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#33CCFF',
        flex: 1,
        alignItems: 'center',
    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center',
    },
});

const AppNavigator = createStackNavigator({
        Start: {
            screen: StartPage,
        },
        Main: {
            screen: MainPage,
        },
    },
    {
        initialRouteName: 'Start',
        headerMode: 'none',
    });

export default createAppContainer(AppNavigator);
