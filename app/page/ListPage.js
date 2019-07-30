import React from 'react';
import {View, Text, Image, StyleSheet, SectionList, ToastAndroid} from 'react-native';

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personList: '',
        };
    }

    render() {
        return (<View>
            <Text>{this.state.personList}</Text>
        </View>);
    }

    componentDidMount(){
        return fetch('https://easy-mock.com/mock/5d406cc34d428874577b82b5/example/getPersonData')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    personList: responseJson.data.city,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });
    }
}

const styles = StyleSheet.create({
    body: {},
});

export default ListPage;
