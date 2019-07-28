import React from 'react';
import {View, Text} from 'react-native';
import ImageViewPager from '../component/ImageViewPager';

class DetailPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (<View>
            <ImageViewPager/>
        </View>);
    }
}

export default DetailPage;


