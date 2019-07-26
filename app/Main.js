import React from 'react';
// eslint-disable-next-line no-unused-vars
import {
    View, Text, Image,
    ListView, ScrollView,
    ToastAndroid, StyleSheet, Modal,
} from 'react-native';
import HeaderView from './component/HeaderView.js';
import TabLayout from './component/TabLayout';
import BannerLayout from './component/BannerView.js';
import CardView from './component/CardView';
import BaseDialog from './component/BaseDialog';

const data = ['我的最爱', '热门内容', '优美话题'];

class MainPage extends React.Component {
    render() {
        return (
            <View>
                <HeaderView leftClick={this.left} centerTitle="这是主页" mode={2} clickRight={this.clickRight}/>
                <BannerLayout/>
                <TabLayout datas={data}/>
                <View style={styles.bodyContainerStyle}
                      _dialogLeftBtnAction={()=>{}}
                      _dialogRightBtnAction={()=>{}}>
                    {/*<CardView/>*/}
                </View>
                <BaseDialog/>
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

const styles = StyleSheet.create({
    bodyContainerStyle: {
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10,
    },
});

export default MainPage;
