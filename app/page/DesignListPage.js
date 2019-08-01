import React from 'react';
import {View, Text, Image, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import HeaderView from '../component/HeaderView';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

class DesignListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        };
        this.fetchData = this.fetchData.bind(this);
    }

    render() {
        if (!this.state.isLoading) {
            return (<View style={styles.body}>
                <HeaderView centerTitle={'自定义数据列表'}
                            clickRight={() => {
                            }}
                            leftClick={() => {
                                this.props.navigation.goBack();
                            }}/>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderMovie}
                    style={styles.list}
                    keyExtractor={item => item.id}
                />
            </View>);
        } else {
            return (<View style={styles.body}>
                <HeaderView centerTitle={'自定义数据列表'}
                            clickRight={() => {
                            }}
                            leftClick={() => {
                                this.props.navigation.goBack();
                            }}/>
                <View style={styles.body2}>
                    <ActivityIndicator/>
                    <Text style={styles.loadContent}>加载数据中...</Text>
                </View>
            </View>);
        }
    }

    componentDidMount(): void {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    isLoading: false,
                });
            });
    }

    renderMovie = ({item}) => {
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
    };
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    body2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadContent: {
        marginTop: 0,
    },
    thumbnail: {
        width: 120,
        height: 90,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    list: {
        paddingTop: 0,
        backgroundColor: '#F5F5F5',
    },
    container:{
        backgroundColor: 'white',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 5,
        borderRadius: 8,
    }
});

export default DesignListPage;
