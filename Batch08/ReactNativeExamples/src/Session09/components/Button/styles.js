import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defaultStyle: {
    flexDirection: 'row',
    height: 48,
    backgroundColor: '#0984e3',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  defaultDisabledStyle: {
    backgroundColor: '#b2bec3',
  },

  defaultTitleStyle: {
    color: 'white',
  },

  defaultIconStyle: {
    color: 'white',
    marginRight: 8,
  },
});

export default styles;
