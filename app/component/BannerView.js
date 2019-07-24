import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class BannerLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            currentPage: 0,
        }
    }

    render() {
        return (
            <ScrollView horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.container}
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
        );
    }
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

});

export default BannerLayout;
