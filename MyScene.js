import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MyScene extends Component {
  getDefaultProps() {
    return {
      title: 'MyScene'
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
      </View>
    )
  }
}