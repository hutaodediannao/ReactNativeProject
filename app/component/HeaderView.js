import React from 'react';
import {
    View, Text, Image, ListView, ScrollView,
    StyleSheet, TouchableOpacity, ToastAndroid,
} from 'react-native';

class HeaderView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <TouchableOpacity onPress={this.props.leftClick}>
                    <Image
                        source={require('../../res/back.png')}
                        style={styles.leftImgStyle}
                    />
                </TouchableOpacity>
                <Text style={styles.centerTextStyle}>{this.props.centerTitle}</Text>
                {this.getRightView(this.props.mode)}
            </View>);
    }

    getRightView = (mode) => {
        if (mode === 0) {
            return (
                <TouchableOpacity onPress={() => {
                    this.props.clickRight();
                }}>
                    <Text style={styles.rightTextStyle}>项目</Text>;
                </TouchableOpacity>);
        } else if (mode === 1) {
            return (<TouchableOpacity onPress={() => {
                this.props.clickRight();
            }}> <Image style={styles.rightImgStyle}
                       source={{uri: 'http://07imgmini.eastday.com/mobile/20190721/2019072113_74877d668291437e8400b6ec16a0fb35_2184_cover_mwpm_03200403.jpg'}}/>
            </TouchableOpacity>);

        } else {
            return (
                (<TouchableOpacity onPress={() => {
                    this.props.clickRight();
                }}>
                    <Text style={styles.rightTextStyle}>菜单</Text>
                </TouchableOpacity>));
        }
    };
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    leftImgStyle: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginLeft: 10,
    },
    centerTextStyle: {
        color: 'black',
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    rightImgStyle: {
        width: 30,
        height: 30,
        borderRadius: 5,
        marginRight: 10,
    },
    rightTextStyle: {
        color: 'black',
        fontSize: 16,
        marginRight: 10,
    },
});

export default HeaderView;
