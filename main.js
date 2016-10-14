import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import Main from "./utils/pageNav";
import CinemaNav from "./utils/cinemaNav";
import User from "./utils/user";
import TabBarItem from "./utils/TabBarItem";

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

var routeIndex = 0;

export default class film extends Component {
    constructor(props, params) {
        super(props);
        this.state = {
            tabIndex: 0
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
    renderScene(route, navigator){       
        var pages =[
            <Main {...route.params} />,
            <CinemaNav {...route.params}  />,
            <User {...route.params}  />,
        ]
       return (
           pages[routeIndex]
       )
       
    }
    TabBar() {
        return (
            <View style={styles.tabs }>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("./img/icon_menu_homeon.png") }
                    title="发现"
                    onPress={() => {
                        this.onTabIndex(0);
                         this.setState({tabIndex:0});
                         image = require("./img/icon_menu_home.png")
                    } }>
                    ></TabBarItem>
                <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("./img/icon_menu_film.png") }
                    title="电影"
                    fengle="疯了"
                    onPress={() => {
                        this.onTabIndex(1);
                         this.setState({tabIndex:1});
                         image = require("./img/icon_menu_filmon.png")
                    } }>
                    ></TabBarItem>
                 <TabBarItem
                    underlayColor="#B5B5B5"
                    image={require("./img/icon_menu_activity.png") }
                    title="演出"
                    onPress={() => {
                        this.onTabIndex(2);
                        this.setState({tabIndex:2})
                        image = require("./img/icon_menu_activityon.png")
                    } }>
                    ></TabBarItem>
            </View>
        )
    }
    onTabIndex(_index){        
        routeIndex = _index;
        // this._navigator.jumpTo(ROUTE_STACK[routeIndex]);
    }
}

const styles = StyleSheet.create({
    tabs:{
        flexDirection:"row"
    }
});