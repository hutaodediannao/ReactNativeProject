import React from 'react';
// eslint-disable-next-line no-unused-vars
import {
    View, ScrollView,
    ToastAndroid,
} from 'react-native';
import HeaderView from '../component/HeaderView.js';
import TabLayout from '../component/TabLayout';
import BannerLayout from '../component/BannerView.js';
import CardView from '../component/CardView';
import BaseDialog from '../component/BaseDialog';
import StepView from '../component/StepView';
import MyButton from '../component/Button';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import DesignListPage from './DesignListPage';

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
                <ScrollView>
                    <BannerLayout/>
                    <TabLayout datas={data}/>
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
                    <StepView/>
                    <MyButton
                        name={'图片浏览'}
                        color={'blue'}
                        click={() => {
                            this.props.navigation.navigate('Detail');
                        }}/>
                    <MyButton
                        name={'请求网络'}
                        color={'red'}
                        click={() => {
                            this.props.navigation.navigate('FetchList');
                        }}
                    />
                    <MyButton
                        name={'自定义网络数据列表'}
                        color={'red'}
                        click={() => {
                            this.props.navigation.navigate('DesignPage');
                        }}
                    />
                </ScrollView>
            </View>
        );
    }

    left = () => {
        this.props.navigation.goBack();
    };

    clickRight = () => {
        this.setState({
            isShowDialog: true,
        });
    };
}

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: MainPage,
        },
        Detail: {
            screen: DetailPage,
        },
        FetchList: {
            screen: ListPage,
        },
        DesignPage: {
            screen: DesignListPage,
        },
    },
    {
        initialRouteName: 'Main',
        headerMode: 'none',
    },
);

export default createAppContainer(AppNavigator);
