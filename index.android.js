import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import MyScene from './MyScene';

class YoDawgApp extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => YoDawgApp);
