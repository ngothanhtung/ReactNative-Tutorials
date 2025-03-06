import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import Modal from 'react-native-modal';

import Container from '@/components/Container';
import PrimaryButton from '@/navigators/OnboardingStackNavigator/components/PrimaryButton';
import DropdownList from '@/components/DropdownList';
import { Ionicons } from '@expo/vector-icons';
import MultipleDropdownList from '@/components/MultipleDropdownList';
import { auth } from '../../../firebase/initializeApp';

const HEIGHT = Dimensions.get('window').height;

type Props = {};

const CreateWorkspaceScreen = (props: Props) => {
  // Get current user of firebase
  const user = auth.currentUser;
  console.log('currentUser', user);

  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <React.Fragment>
      <Container style={styles.container}>
        <Text style={styles.text}>CreateWorkspaceScreen</Text>
        <PrimaryButton
          text='Create workspace'
          onPress={() => {
            setModalVisible(true);
          }}
        />

        <DropdownList
          label='HOW MANY PEOPLE IN YOUR TEAM?'
          items={[
            { label: '11 - 25', value: '11 - 25' },
            { label: '26 - 50', value: '26 - 50' },
            { label: '51 - 100', value: '51 - 100' },
            { label: '101 - 200', value: '101 - 200' },
            { label: '201 - 500', value: '201 - 500' },
            { label: '501 - 1000', value: '501 - 1000' },
            { label: '1000 - 2000', value: '1000 - 2000' },
            { label: '2000 - 3000', value: '2000 - 3000' },
            { label: '3000 - 5000', value: '3000 - 5000' },
            { label: '5000 - 10000', value: '5000 - 10000' },
            { label: '10000 - 20000', value: '10000 - 20000' },
            { label: '20000 - 50000', value: '20000 - 50000' },
            { label: '50000 - 100000', value: '50000 - 100000' },
            { label: '100000+', value: '100000+' },
          ]}
          selectedValue='101 - 200'
          icon={<Ionicons name='home' size={20} color='white' />}
          onSelectedValue={(value) => {
            console.log(value);
          }}
        />
        <DropdownList
          label='YOUR CITY?'
          items={[
            { label: 'Đà Nẵng', value: 'danang' },
            { label: 'Hà Nội', value: 'hanoi' },
            { label: 'TP. Hồ Chí Minh', value: 'hcm' },
          ]}
          selectedValue='danang'
          icon={<Ionicons name='home' size={20} color='white' />}
          onSelectedValue={(value) => {
            console.log(value);
          }}
        />
        <MultipleDropdownList
          label='MEMBER'
          items={[
            { label: 'Ngô Thanh Tùng', value: 'tungnt' },
            { label: 'Vũ Phan Huấn', value: 'huanvp' },
            { label: 'Lê Đình Phụng', value: 'phungld' },
          ]}
          selectedValues={['tungnt', 'huanvp']}
          icon={<Ionicons name='home' size={20} color='white' />}
          onSelectedValues={(values) => {
            console.log(values);
          }}
        />
      </Container>

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
          <View style={{ height: HEIGHT * 0.75, backgroundColor: 'white' }}>
            <View>
              <PrimaryButton
                text='Close'
                onPress={() => {
                  setModalVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default CreateWorkspaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  text: {
    color: 'white',
  },
});
