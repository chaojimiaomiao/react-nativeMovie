import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import MyScene from './MyScene';
import Main from "./utils/pageNav";
import CinemaNav from "./utils/cinemaNav";
import User from "./utils/user";
import TabBarItem from "./utils/TabBarItem";

export default class film extends Component {
  constructor(props, params) {
        super(props);
        this.state = {
            tabIndex: 0,
            imgDiscover: false,
            imgMovie: false,
            imgShow: false,
        }
    }
  render() {
    return (
      <Navigator
            initialRoute={ROUTE_STACK[routeIndex]}
            // configureScene={(route) => {
            //     return Navigator.SceneConfigs.FadeAndroid;
            // } }
            renderScene={this.renderScene}
            navigationBar={
                this.TabBar()
            }
            initialRouteStack={ROUTE_STACK}
            ref={(navigator) => {
                this._navigator = navigator;
            }}
      />
    );
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
    }
});

AppRegistry.registerComponent('AwesomeProject', () => film);
