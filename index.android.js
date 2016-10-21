import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Image,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

import MyScene from './MyScene';
import Main from "./utils/pageNav";
import CinemaNav from "./utils/cinemaNav";
import User from "./utils/user";
import TabBarItem from "./utils/TabBarItem";
import ImageButton from "./utils/imageButton";

export default class film extends Component {
  constructor(props, params) {
        super(props);
        this.state = {
            tabIndex: 0,
            selected: false,
            imgDiscover: false,
            imgMovie: false,
            imgShow: false,
        }
    }
  render() {
      return (
          <ImageButton
            selectedImage = {require('./img/icon_menu_homeon.png')}
            normalImage = {require('./img/icon_menu_home.png')}
          >
          </ImageButton>
      );
    // var image = this.state.selected ? require('./img/icon_menu_homeon.png') : require('./img/icon_menu_home.png');
    // return (
    //     <TouchableOpacity
    //         onPressIn={() => {
    //             this.setState( {
    //                 selected: true,
    //             });
    //         }}
    //         onPressOut={() => {
    //             this.setState( {
    //                 selected: false,
    //             });
    //         }}
    //        >
    //         <Image  
    //             style={styles.image} source={image}>
    //         </Image>
    //       </TouchableOpacity>
    // );
  }
  
  renderScene(route, navigator) {
    var pages = [
        <Main {...route.params} />,
        <CinemaNav {...route.params}  />,
        <User {...route.params}  />,
    ]
    return (
      pages[routeIndex]
    );
  }

  TabBar() {
      var discover = this.state.imgDiscover ? require('./img/icon_menu_homeon.png') : require('./img/icon_menu_home.png');
    return (
      <View style = {styles.tabs}>
        <TabBarItem
                    underlayColor="#B5B5B5"
                    image={discover}
                    title="发现"
                    onPress={() => {
                        this.onTabIndex(0);
                         this.setState({tabIndex:0, 
                             imgDiscover: !imgDiscover
                            });
                    } }>
                    ></TabBarItem>
                
      </View>
    );
  }

  renderButton() {
      return (
          <TouchableOpacity
            onPressIn={() => {
                this.setState( {
                    selected: true,
                });
            }}
            onPressOut={() => {
                this.setState( {
                    selected: false,
                });
            }}
           >
          </TouchableOpacity >
      );
  }

  onTabIndex(_index){        
        routeIndex = _index;
        // this._navigator.jumpTo(ROUTE_STACK[routeIndex]);
    }


}


var routeIndex = 0;

var _getRandomRoute = function (str) {
    return {
        randNumber: str,
    };
} 

var ROUTE_STACK = [
    _getRandomRoute('Main'),
    _getRandomRoute('CinemaNav'),
    _getRandomRoute('User'),
];

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

AppRegistry.registerComponent('AwesomeProject', () => film);
