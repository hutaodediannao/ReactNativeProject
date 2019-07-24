import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native';

const indicatorHeight = 2;
class TabLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            selectPosition: 0,
        });
    }

    render() {
        return (
            <View
                style={styles.tabStyle}
            >
                {this.getTabItems()}
            </View>
        );
    }

    getTabItems = () => {
        let array = this.props.datas;
        let tabItems = [];
        for (let i = 0; i < array.length; i++) {
            tabItems.push(
                <TouchableOpacity onPress={() => {
                    this.onChange(i);
                }} key={i}>
                    <Text style={this.state.selectPosition == i ?
                        styles.checkTextStyle : styles.unCheckTextStyle}
                    >{array[i]}</Text>
                </TouchableOpacity>,
            );
        }
        return tabItems;
    };

    onChange = (position) => {
        // ToastAndroid.show('' + position, ToastAndroid.SHORT);
        this.setState({
            selectPosition: position,
        });
    };
}

const styles = StyleSheet.create({
    checkTextStyle: {
        color: 'red',
        width: '100%',
        paddingLeft:20,
        paddingRight: 20,
        paddingTop:5,
        paddingBottom: 5,
        borderBottomColor: 'red',
        borderBottomWidth: indicatorHeight,
    },

    unCheckTextStyle: {
        color: 'black',
        width: '100%',
        paddingLeft:20,
        paddingRight: 20,
        paddingTop:5,
        paddingBottom: 5,
        borderBottomWidth: indicatorHeight,
        borderBottomColor: 'white',
    },

    tabStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 40,
    },
});

export default TabLayout;
