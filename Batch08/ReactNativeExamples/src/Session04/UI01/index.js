import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const ICON_SIZE = 26;

const HeaderBlock = () => (
  <View>
    <LinearGradient
      colors={['#f48fb1', '#ff4081']}
      style={styles.headerBlock}
    />
  </View>
);

const Item = ({ text, icon, color1, color2 }) => {
  return (
    <View style={styles.itemContainer}>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.75]}
        colors={[color1, color2]}
        style={styles.iconContainer}>
        {icon}
      </LinearGradient>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: color2 }]}>{text}</Text>
      </View>
    </View>
  );
};

// class Item extends Component {
//   render() {
//     return (
//       <View style={styles.itemContainer}>
//         <LinearGradient
//           start={{ x: 0.0, y: 0.25 }}
//           end={{ x: 0.5, y: 1.0 }}
//           locations={[0, 0.75]}
//           colors={[this.props.color1, this.props.color2]}
//           style={styles.iconContainer}>
//           {this.props.icon}
//         </LinearGradient>
//         <View style={styles.textContainer}>
//           <Text style={[styles.text, { color: this.props.color2 }]}>
//             {this.props.text}
//           </Text>
//         </View>
//       </View>
//     );
//   }
// }

const index = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <HeaderBlock />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Classify transaction</Text>
          <View height={12} />
          <Text style={styles.subHeaderText}>
            Classify this transaction into a
          </Text>
          <Text style={styles.subHeaderText}>particular category</Text>
        </View>

        <View style={styles.block}>
          <View style={styles.row}>
            <Item
              color1="#81d4fa"
              color2="#039be5"
              text="General"
              icon={
                <AntDesignIcon
                  name="appstore1"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
            <Item
              color1="#b39ddb"
              color2="#651fff"
              text="Transport"
              icon={
                <FontAwesome5Icon
                  name="bus"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
          </View>
          <View style={styles.row}>
            <Item
              color1="#f48fb1"
              color2="#ff4081"
              text="Shopping"
              icon={
                <FontAwesome5Icon
                  name="shopping-bag"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
            <Item
              color1="#ffcc80"
              color2="#ff6d00"
              text="Bills"
              icon={
                <FontAwesomeIcon
                  name="file-text"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
          </View>
          <View style={styles.row}>
            <Item
              color1="#90caf9"
              color2="#2962ff"
              text="Entertainment"
              icon={
                <FontAwesomeIcon
                  name="youtube-play"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
            <Item
              color1="#a5d6a7"
              color2="#00c853"
              text="Grocery"
              icon={
                // <SvgIcon color="white" size={ICON_SIZE} data={groceryData} />
                <FontAwesomeIcon
                  name="shopping-basket"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerIcon}>
          <FontAwesomeIcon
            name="shopping-cart"
            size={22}
            style={{ color: '#ff4081' }}
          />
        </View>
        <View style={styles.footerIcon}>
          <Ionicon name="md-stats-chart" size={22} style={styles.icon} />
        </View>
        <View style={styles.footerIcon}>
          <FontistoIcon name="person" size={22} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B2E',
  },

  headerBlock: {
    position: 'absolute',
    marginLeft: -85,
    marginTop: -240,
    width: W * 0.9,
    height: H * 0.6,
    backgroundColor: '#ff4081',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    transform: [{ rotateX: '0deg' }, { rotateZ: '-40deg' }],
  },

  headerTextContainer: { position: 'absolute', top: 54, paddingHorizontal: 30 },
  headerText: { color: 'white', fontSize: 24, fontWeight: '700' },
  subHeaderText: { color: 'white', fontSize: 16, fontWeight: '400' },

  block: {
    flex: 2,
    justifyContent: 'flex-end',
  },

  row: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconContainer: {
    marginTop: 16,
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: '#ffffff',
  },

  itemContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: W / 2 - 40,
    height: W / 2 - 30,
    backgroundColor: '#282B47',
    opacity: 0.97,

    borderRadius: 24,
  },

  textContainer: {
    paddingVertical: 12,
  },

  text: { fontWeight: '700' },

  footer: {
    flexDirection: 'row',
    // height: 60,
    backgroundColor: '#282B47',
    paddingBottom: 20,
  },

  footerIcon: {
    padding: 16,
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
