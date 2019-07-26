import React from 'react';
import {View, Modal, TouchableHighlight, Dimensions, Text, StyleSheet} from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width;//宽
let SCREEN_HEIGHT = Dimensions.get('window').height;//高
class BaseDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            _dialogTitle: '温馨提示',
            _dialogContent: '是否退出',
            _dialogLeftBtnTitle: '取消',
            _dialogRightBtnTitle: '确定',
            _dialogVisible: false,
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <Modal
                visible={this.props._dialogVisible}
                transparent={true}
                onRequestClose={() => {
                }} //如果是Android设备 必须有此方法
            >
                <View style={styles.bg}>
                    <View style={styles.dialog}>
                        <View style={styles.dialogTitleView}>
                            <Text style={styles.dialogTitle}>
                                {this.props._dialogTitle}
                            </Text>
                        </View>
                        <View style={styles.dialogContentView}>
                            <Text style={styles.dialogContent}>
                                {this.props._dialogContent}
                            </Text>
                        </View>

                        <View style={styles.dialogBtnView}>
                            <TouchableHighlight style={styles.dialogBtnViewItem}
                                                onPress={this.props._dialogLeftBtnAction}>
                                <Text style={styles.leftButton}>
                                    {this.props._dialogLeftBtnTitle}
                                </Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.dialogBtnViewItem}
                                                onPress={this.props._dialogRightBtnAction}>
                                <Text style={styles.rightButton}>
                                    {this.props._dialogRightBtnTitle}
                                </Text>
                            </TouchableHighlight>
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    bg: {  //全屏显示 半透明 可以看到之前的控件但是不能操作了
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        backgroundColor: 'rgba(52,52,52,0.5)',  //rgba  a0-1  其余都是16进制数
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.28,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    dialogTitleView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        color: 'black',
    },
    dialogTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#000000',
    },
    dialogContentView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContent: {
        textAlign: 'center',
        fontSize: 16,
        color: '#4A4A4A',
    },
    dialogBtnView: {
        width: SCREEN_WIDTH * 0.8,
        height: SCREEN_HEIGHT * 0.08,
        flexDirection: 'row',
    },
    dialogBtnViewItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5F2FF',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    leftButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomLeftRadius: 8,
    },
    rightButton: {
        fontSize: 18,
        color: '#007AFF',
        borderBottomRightRadius: 8,
    }
});

export default BaseDialog;
