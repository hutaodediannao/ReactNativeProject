import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

class StepView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
        };
    }

    render() {
        return (<View style={styles.bg}>
            <TouchableOpacity onPress={() => {
                if (this.state.total == 0) {
                    return;
                }
                this.setState({
                    total: this.state.total - 1,
                });
            }}>
                <Image style={styles.img} source={require('../res/jian.png')}/>
            </TouchableOpacity>
            <Text style={styles.line}>{this.state.total}</Text>
            <TouchableOpacity onPress={() => {
                if (this.state.total == 99) {
                    return;
                }
                this.setState({
                    total: this.state.total + 1,
                });
            }}>
                <Image style={styles.img} source={require('../res/add.png')}/>
            </TouchableOpacity>
        </View>);
    }

}

const styles = StyleSheet.create({
        bg: {
            width: 150,
            height: 30,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: 15,
            margin: 10,
        },
        img: {
            width: 20,
            height: 20,
            padding: 10,
        },
        line: {
            borderRightWidth: 1,
            borderColor: 'black',
            borderLeftWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
        },
    })
;

export default StepView;
