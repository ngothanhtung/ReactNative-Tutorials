/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SLL_Service from '../../../../services/SLL_Service';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  dayOfWeek: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.SLL_PRIMARY,
  },

  sessionOfDay: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.SLL_PRIMARY_FONT,
  },
});

export default function ScheduleScreen() {
  const [loading, setLoading] = React.useState(true);

  const [schedules, setSchedules] = React.useState([]);

  React.useEffect(() => {
    SLL_Service.getSchedulesOfClass('rlPeLZfhJfZphj5yELDV', '2020-2021')
      .then((result) => {
        console.log('Schedules: ', result);
        setSchedules(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 8 }}>
            <Text style={styles.dayOfWeek}>Monday</Text>
          </View>
          <View>
            <View>
              <Text style={styles.sessionOfDay}>Sáng</Text>
              {item.monday.morning.sessions.map((s) => {
                return (
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 48 }}>
                      {s.fromTime} - {s.toTime}
                    </Text>
                    <Text style={{ marginLeft: 6, fontWeight: '700' }}>{s.subject}</Text>
                  </View>
                );
              })}
            </View>
            <View>
              <Text style={styles.sessionOfDay}>Chiều</Text>
            </View>
            <View>
              <Text style={styles.sessionOfDay}>Tối</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Container showAppbar showBackButton title="THỜI KHÓA BIỂU" subTitle="Lớp 7 / 5" ready={!loading}>
      <FlatList data={schedules} keyExtractor={(item, index) => 'schedule-' + index} renderItem={renderItem} />
    </Container>
  );
}
