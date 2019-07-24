import React from 'react';
// eslint-disable-next-line no-unused-vars
import {View, Text, Image, ListView, ScrollView, ToastAndroid} from 'react-native';
import HeaderView from './component/HeaderView.js';
import TabLayout from './component/TabLayout';
import BannerLayout from './component/BannerView.js';

const data = ['我的最爱', '热门内容', '优美话题'];

class MainPage extends React.Component {
    render() {
        return (
            <View>
                <HeaderView leftClick={this.left} centerTitle="这是主页" mode={2} clickRight={this.clickRight}/>
                <TabLayout datas={data}/>
                <BannerLayout/>

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
