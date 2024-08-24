import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Button, RadioButton } from 'react-native-paper';

const HEIGHT = Dimensions.get('window').height;

type DropdownListItem = {
  value: string;
  label?: string;
};

type Props = {
  label: string;
  selectedValue: string;
  onSelectedValue?: (value: string) => void;
  icon?: React.ReactNode;
  items?: DropdownListItem[];
};

const DropdownList = ({ label = 'New label', items, selectedValue, onSelectedValue, icon }: Props) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const [value, setValue] = React.useState<string>(items?.[0].value ?? '');

  React.useEffect(() => {
    if (selectedValue) {
      setValue(selectedValue);
    }
  }, [selectedValue]);

  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.label}>{label}</Text>
        <View style={styles.container}>
          <Text style={styles.text}>{items?.find((item) => item.value === value)?.label}</Text>
          {icon}
        </View>
      </TouchableOpacity>
      <Modal
        useNativeDriver
        useNativeDriverForBackdrop
        style={{ margin: 0 }}
        isVisible={modalVisible}
        animationOutTiming={600}
        onBackButtonPress={() => {
          // setModalVisible(false);
        }}
        onBackdropPress={() => {
          // setModalVisible(false);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ height: HEIGHT * 0.5, backgroundColor: 'white' }}>
            <SafeAreaView style={{ flex: 1 }}>
              <ScrollView style={styles.content}>
                {items?.map((item, index) => {
                  return (
                    <View key={'item-' + index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <RadioButton.Android
                        value={item.value}
                        status={item.value === value ? 'checked' : 'unchecked'}
                        onPress={() => {
                          setValue(item.value);
                          if (onSelectedValue && typeof onSelectedValue === 'function') {
                            onSelectedValue(item.value);
                          }
                        }}
                      />
                      <Text>{item.label}</Text>
                    </View>
                  );
                })}
              </ScrollView>
              <View style={styles.footer}>
                <Button
                  mode='contained'
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Chọn
                </Button>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default DropdownList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  label: {
    color: 'white',
  },

  text: {
    color: 'white',
    fontWeight: '600',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    padding: 24,
  },

  footer: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
