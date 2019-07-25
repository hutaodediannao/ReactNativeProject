import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Dimensions, ToastAndroid} from 'react-native';
import TimerMixin from 'react-timer-mixin';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
let index = 0;

class BannerLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
        };
    }

    componentDidMount(): void {
        this.startPageChangeTask();
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    startPageChangeTask() {
        this.timer = setTimeout(() => {
            this.setState({
                currentPage: this.state.currentPage == 4 ? 0 : this.state.currentPage + 1,
            });
            this.refs.scrollView.scrollResponderScrollTo({
                x: this.state.currentPage * screenWidth, y: 0, animated: true,
            });
            index++;
            this.startPageChangeTask();
        }, 3000);
    }

    render() {
        return (
            <View>
                <ScrollView
                    ref={'scrollView'}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.container}
                    onMomentumScrollEnd={() => {

                    }}
                >
                    <Image style={styles.pageStyle}
                           source={{uri: 'http://05imgmini.eastday.com/mobile/20190722/20190722135408_4a72c899903d202995f68f452a1f134e_2.jpeg'}}/>
                    <Image style={styles.pageStyle}
                           source={{uri: 'https://img30.360buyimg.com/da/jfs/t1/73265/24/5250/94356/5d36f1f9Ea527fd3c/a1a60f0c99ded1bd.jpg!q90.webp'}}/>
                    <Image style={styles.pageStyle}
                           source={{uri: 'https://img30.360buyimg.com/da/jfs/t1/57201/34/5799/156489/5d38275aE9a6df568/b59318821f08aacc.jpg!q90.webp'}}/>
                    <Image style={styles.pageStyle}
                           source={{uri: 'https://img11.360buyimg.com/da/jfs/t1/68258/16/5313/117799/5d383e6eE5b17a7a3/28b6d24674b68cb2.jpg!q90.webp'}}/>
                    <Image style={styles.pageStyle}
                           source={{uri: 'https://m.360buyimg.com/mobilecms/s1000x637_jfs/t17737/23/1784067241/194100/c0e47e0d/5ad707e7N39fccafd.jpg!q70.jpg'}}/>
                </ScrollView>
                <View style={styles.circleIndicatorContainerStyle}>
                {this.getSelectIndicator(this.state.currentPage)}
                </View>
            </View>
        );
    }

    getSelectIndicator = (selectedPageIndex) => {
        let views = [];
        for (let i = 0; i < 5; i++) {
            views.push(
                i == selectedPageIndex ?
                    (<View key={i} style={styles.circleIndicatorSelected}/>) :
                    (<View key={i} style={styles.circleIndicatorUnSelected}/>),
            );
        }
        return views;
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 5,
        height: 200,
    },
    pageStyle: {
        width: screenWidth,
    },
    circleIndicatorUnSelected:{
        width: 10,
        height: 10,
        backgroundColor: 'gray',
        marginLeft: 5,
        borderRadius: 5,
    },
    circleIndicatorSelected: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        marginLeft: 5,
        borderRadius: 5,
    },
    circleIndicatorContainerStyle:{
        flexDirection: 'row',
        position: 'absolute',
        left: 5,
        bottom: 5,
    }
});

export default BannerLayout;
