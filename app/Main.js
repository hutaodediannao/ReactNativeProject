import React from 'react';
// eslint-disable-next-line no-unused-vars
import {View, Text, Image, ListView, ScrollView, ToastAndroid} from 'react-native';
import HeaderView from './component/HeaderView.js';

class MainPage extends React.Component {
    render() {
        return (
            <View>
                <HeaderView leftClick={this.left} centerTitle="这是主页" mode={2} clickRight={this.clickRight}/>
                <Text>Hello SB</Text>
            </View>
        );
    }

    left = () => {
        ToastAndroid.show('ok', ToastAndroid.SHORT);
    };

    clickRight = () => {
        ToastAndroid.show('right', ToastAndroid.SHORT);
    };
}

export default MainPage;
