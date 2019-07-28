import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

class MyButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.buttonStyle}>
                <Button
                    title={'图片浏览'}
                    color={'red'}
                    onPress={this.props.click}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 200,
        backgroundColor: 'orange',
        borderRadius: 10,
        margin: 10,
    },

});

export default MyButton;
