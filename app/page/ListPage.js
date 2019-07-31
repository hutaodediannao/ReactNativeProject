// import React from 'react';
// import {
//     View, Text, Image, StyleSheet, SectionList, ToastAndroid,
//     ActivityIndicator, FlatList,
// } from 'react-native';
// import HeaderView from '../component/HeaderView';
//
// class ListPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             personList: '',
//         };
//
//         // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
//         // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
//         this.fetchData = this.fetchData.bind(this);
//     }
//
//     render() {
//         if (this.state.isLoading) {
//             return (
//                 <View style={styles.bodyContent}>
//                     <HeaderView centerTitle={'请求数据列表'} leftClick={() => {
//                         this.props.navigation.goBack();
//                     }}/>
//                     <View style={styles.bodyLoading}>
//                         <ActivityIndicator size="large" color="red"/>
//                         <Text>数据加载中...</Text>
//                     </View>
//                 </View>);
//         } else {
//             return (<View style={styles.bodyContent}>
//                 <HeaderView centerTitle={'请求数据列表'} leftClick={() => {
//                     this.props.navigation.goBack();
//                 }}/>
//                 <FlatList
//                     data={this.state.personList}
//                     // keyExtractor={(item, index) => {
//                     //     return item.name;
//                     // }}
//                     renderItem={(item) => {
//                         return <View style={styles.item}>
//                             {/*<Image*/}
//                             {/*    style={styles.image}*/}
//                             {/*    source={{uri: item.imgUrl}}*/}
//                             {/*/>*/}
//                             <Text style={styles.text}>{item.name}</Text>
//                         </View>;
//                     }}
//                 />
//             </View>);
//         }
//     }
//
//     componentDidMount() {
//         this.fetchData();
//     }
//
//     fetchData(){
//         fetch('https://easy-mock.com/mock/5d406cc34d428874577b82b5/example/getPersonData')
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 this.setState({
//                     isLoading: false,
//                     personList: this.state.personList.concat(responseJson.data.persons),
//                 });
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
// }
//
// const styles = StyleSheet.create({
//     bodyContent: {
//         flex: 1,
//     },
//     bodyLoading: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#CCCCCC',
//     },
//     item: {
//         backgroundColor: 'white',
//         height: 100,
//         width: '100%',
//         flexDirection: 'row',
//         marginTop: 10,
//         justifyContent: 'flex-start',
//     },
//     image: {
//         width: 80,
//         height: 80,
//     },
//     text: {
//         fontSize: 17,
//         color: 'red',
//     },
// });
//
// export default ListPage;


import React, {Component} from 'react';

import {Image, FlatList, StyleSheet, Text, View} from 'react-native';
import HeaderView from '../component/HeaderView';

const REQUEST_URL =
    'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export default class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true,
                });
            });
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View>
                <HeaderView centerTitle={'请求数据列表'} leftClick={() => {
                    this.props.navigation.goBack();
                }}/>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderMovie}
                    style={styles.list}
                    keyExtractor={item => item.id}
                />
            </View>

        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <HeaderView centerTitle={'请求数据列表'} leftClick={() => {
                    this.props.navigation.goBack();
                }}/>
                <Text>Loading movies...</Text>
            </View>
        );
    }

    renderMovie({item}) {
        // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
        // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: item.posters.thumbnail}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.year}>{item.year}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
