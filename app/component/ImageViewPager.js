import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import {ImageViewer} from 'react-native-image-zoom-viewer';

const images = [
    {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },
    {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },
    {
        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },
];

class ImageViewPager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
                <ImageViewer
                    imageUrls={images}
                    failImageSource={{
                        url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').width,
                    }}
                />
            </View>
        );
    }
}

export default ImageViewPager;
