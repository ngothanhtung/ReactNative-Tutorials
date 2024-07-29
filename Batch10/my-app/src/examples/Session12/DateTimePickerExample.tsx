import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button, SafeAreaView, Text } from 'react-native';

export default function DateTimePickerExample() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView style={{ padding: 24 }}>
      <Button onPress={showDatepicker} title='Show date picker!' />
      <Button onPress={showTimepicker} title='Show time picker!' />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && <DateTimePicker testID='dateTimePicker' value={date} mode={mode} onChange={onChange} />}
    </SafeAreaView>
  );
}
