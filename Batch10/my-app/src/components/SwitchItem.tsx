import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import COLORS from '@/constants/COLORS';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  icon?: React.ReactNode;
  text?: string;
  selectedValue?: boolean;
  onPress?: (value: boolean) => void;
};

const SwitchItem = ({ selectedValue = false, onPress, icon = <Ionicons name='home' style={{ color: COLORS.light, fontSize: 16 }} />, text = 'No text' }: Props) => {
  const [check, setCheck] = React.useState(false);

  React.useEffect(() => {
    if (selectedValue) {
      setCheck(selectedValue);
    }
  }, [selectedValue]);

  let bgColor = '#262A34';
  let color = '#4D5362';
  if (check === true) {
    color = COLORS.light;
    bgColor = COLORS.primary;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        let c = check;
        c = !c;

        setCheck(c);
        if (onPress && typeof onPress === 'function') {
          onPress(c);
        }
      }}
    >
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <React.Fragment>{icon}</React.Fragment>
          <Text style={styles.text}>{text}</Text>
        </View>

        <View style={[styles.buttonContainer, { backgroundColor: bgColor }]}>
          <View style={[styles.circle, { backgroundColor: color, alignSelf: check ? 'flex-end' : 'flex-start' }]}></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SwitchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
  },

  text: {
    color: COLORS.light,
    fontSize: 16,
    fontWeight: '700',
  },

  buttonContainer: {
    height: 24,
    width: 48,
    borderRadius: 12,
    justifyContent: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
});
