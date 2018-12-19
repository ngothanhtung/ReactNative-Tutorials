import React from 'react';
import { StyleSheet, Text, Button, View, ScrollView, TouchableNativeFeedback } from 'react-native';
import { createDrawerNavigator, SafeAreaView, DrawerItems, DrawerActions } from 'react-navigation';

class DrawerItemScreen1 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Drawer Item 1',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
        <Button
          title="Go to DrawerItemScreen2"
          onPress={() => {
            this.props.navigation.navigate('DrawerItemScreen2')
          }}
        />
      </View>
    );
  }
}

class DrawerItemScreen2 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Drawer Item 2',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Button
          title="Go to DrawerItemScreen1"
          onPress={() => {
            this.props.navigation.navigate('DrawerItemScreen1')
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const routeConfigs = {
  DrawerItemScreen1: {
    screen: DrawerItemScreen1,
  },
  DrawerItemScreen2: {
    screen: DrawerItemScreen2,
  },
}


const CustomDrawerContentComponent = (props) => {
  console.log(props);
  return (
    <ScrollView>
      {/* <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}> */}
        {/* <DrawerItems {...props} /> */}
        {/* <Text>HELLOOOOOO</Text> */}
        <TouchableNativeFeedback style={{ paddingVertical: 10, backgroundColor: 'pink' }} onPress={e => {
          props.navigation.dispatch(DrawerActions.closeDrawer());
          props.navigation.navigate("DrawerClose");
        }}>
          <Text>Drawer Item 1</Text>
        </TouchableNativeFeedback>
        {/* <TouchableNativeFeedback onPress={closeDrawer.bind(this, props)}>
          <Text>Drawer Item 2</Text>
        </TouchableNativeFeedback> */}
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};

var closeDrawer = (props, e) => {
  // ()=>props.navigation.dispatch(DrawerActions.closeDrawer())
  console.log(e);
  console.log(props);
  props.navigation.dispatch(DrawerActions.closeDrawer());
}

const drawerNavigatorConfigs = {
  // drawerBackgroundColor: '#2d3436',
  // contentComponent: CustomDrawerContentComponent,//(props) => <DrawerItems {...{ ...props, onItemPress: onItemPress.bind(this, props) }} />,
  contentOptions: {
    activeTintColor: '#dfe6e9',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1
    },
    labelStyle: { color: '#2d3436' },
    // onItemPress: (route) => {
    //   console.log('OK')
    // },
  },

}

const onItemPress = (props, route) => {
  console.log(props);
  console.log(DrawerActions);
  props.navigation.dispatch(DrawerActions.closeDrawer());
  // props.navigation.navigate('DrawerClose');
  console.log(route);
}

const DrawerNavigator = createDrawerNavigator(routeConfigs, drawerNavigatorConfigs);

export default DrawerNavigator;