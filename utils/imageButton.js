import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native'

export default class ImageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
    }
    render() {
        //解构，一次解析多个属性
        const { selectedImage, normalImage } = this.props;
        var image = this.state.selected ? selectedImage : normalImage;
        return (
            <TouchableOpacity
                onPressIn={() => {
                    this.setState({
                        selected: true,
                    });
                } }
                onPressOut={() => {
                    this.setState({
                        selected: false,
                    });
                } }
                >
                <Image
                    style={styles.image} source={image}>
                </Image>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    tabs:{
        flexDirection:"row"
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
        resizeMode: Image.resizeMode.stretch,
    },
});