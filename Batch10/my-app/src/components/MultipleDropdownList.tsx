import { View, Text, StyleSheet, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { Button, Checkbox } from 'react-native-paper';

const HEIGHT = Dimensions.get('window').height;

type DropdownListItem = {
  value: string;
  label?: string;
};

type Props = {
  label: string;
  selectedValues: string[];
  onSelectedValues?: (values: string[]) => void;
  icon?: React.ReactNode;
  items?: DropdownListItem[];
};

const MultipleDropdownList = ({ label = 'New label', items, selectedValues, onSelectedValues, icon }: Props) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const [values, setValues] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (selectedValues) {
      setValues(selectedValues);
    }
  }, [selectedValues]);

  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.label}>{label}</Text>
        <View style={styles.container}>
          <Text style={styles.text}>{values?.length > 0 ? values.join(', ') : 'Chọn giá trị'}</Text>
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
                      <Checkbox
                        status={values.includes(item.value) ? 'checked' : 'unchecked'}
                        onPress={() => {
                          if (values.includes(item.value)) {
                            setValues(values.filter((value) => value !== item.value));
                          } else {
                            setValues([...values, item.value]);
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
                    if (onSelectedValues && typeof onSelectedValues === 'function') {
                      onSelectedValues(values);
                    }
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

export default MultipleDropdownList;

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
