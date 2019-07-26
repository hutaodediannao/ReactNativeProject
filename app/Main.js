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

    constructor(props) {
        super(props);
        this.state = {
            isShowDialog: false,
        };
    }

    render() {
        return (
            <View>
                <HeaderView leftClick={this.left}
                            centerTitle="这是主页"
                            mode={2}
                            clickRight={this.clickRight}/>
                <BannerLayout/>
                <TabLayout datas={data}/>
                <View style={styles.bodyContainerStyle}
                      _dialogLeftBtnAction={() => {
                      }}
                      _dialogRightBtnAction={() => {
                      }}>
                    {/*<CardView/>*/}
                </View>
                <BaseDialog
                    _dialogTitle={'温馨提示'}
                    _dialogContent={'是否退出'}
                    _dialogLeftBtnTitle={'取消'}
                    _dialogRightBtnTitle={'确定'}
                    _dialogVisible={this.state.isShowDialog}
                    _dialogLeftBtnAction={() => {
                        this.setState({
                            isShowDialog: !this.state.isShowDialog,
                        });
                    }}
                    _dialogRightBtnAction={() => {
                        this.setState({
                            isShowDialog: !this.state.isShowDialog,
                        });
                    }}
                />
                <CardView/>
            </View>
        );
    }

    left = () => {
        ToastAndroid.show('ok', ToastAndroid.SHORT);
    };

    clickRight = () => {
        this.setState({
            isShowDialog: true,
        });
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
