'use strict'

import React, { Component } from 'react';
import {
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';
import styles from './styles';
import HomeButton from './homeButton';
import Map from './mapES5';
import LogTitleBar from './log/logNav';
import Chart from './chart'

function genNavBarMapper(title) {
  return {
    LeftButton(route, navigator, index, navState) {
      if (index > 0) {
        return (
          <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigator.pop()}>
          <Text style={styles.leftNavButtonText}>Back</Text>
          </TouchableHighlight>
        );
      } else {
        return null;
      }
    },

    RightButton(route, navigator, index, navState) {
      return null;
    },

    Title(route, navigator, index, navState) {
      return <Text style={styles.NavBarTitle}>{title}</Text>;
    },
  }
}

function genNavBar(title) {
  return (
    <Navigator.NavigationBar
    style={styles.navBar}
    routeMapper={genNavBarMapper(title)}/>
  )
}

function renderScene(route, navigator) {
  return (
    <route.component
    navigator={navigator}
    {...route.passProps}
    />
  )
}

class HomeTitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Home',
          component: HomeButton
        }}
        style={styles.banner}
        renderScene={renderScene}
        navigationBar={genNavBar('DownTime')}
      />
    );
  }
}

class MapTitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Map',
          component: Map
        }}
        style={styles.banner}
        renderScene={renderScene}
        navigationBar={genNavBar('Map')}
      />
    );
  }
}

class ChartTitleBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Chart',
          component: Chart
        }}
        style={styles.banner}
        renderScene={renderScene}
        navigationBar={genNavBar('Chart')}
      />
    );
  }
}

module.exports = {
  HomeRender: HomeTitleBar,
  MapRender: MapTitleBar,
  LogRender: LogTitleBar,
  ChartRender: ChartTitleBar
}
