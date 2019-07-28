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
            backgroundColor: '#00FF33',
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
            borderColor: 'gray',
            borderLeftWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
            height: '80%',
            textAlign: 'center',
            marginTop: 5,
            marginBottom: 5,
            textAlignVertical: 'center',
        },
    })
;

export default StepView;
