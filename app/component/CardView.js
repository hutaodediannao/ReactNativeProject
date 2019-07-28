import React from 'react';
import {View, Text, Image, StyleSheet,} from 'react-native';

class CardView extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={styles.cardViewStyle}>
                <Image style={styles.image} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564082493599&di=9cd26582572673a41b378fa6c7b41601&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1401%2F31%2Fc8%2F30970720_1391180640512.jpg'}}/>
                <Text style={styles.text}>这是我的自定义文字</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardViewStyle:{
        width: 200,
        height: 120,
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'red',
    },
    image:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    text: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        color: 'white',
        fontSize: 17,
        alignItems: 'center',
        backgroundColor: 'red',
        textAlign: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default CardView;
