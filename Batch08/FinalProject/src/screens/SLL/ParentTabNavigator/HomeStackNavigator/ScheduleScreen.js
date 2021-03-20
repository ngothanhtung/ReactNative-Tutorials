/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import SLL_Service from '../../../../services/SLL_Service';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  dayOfWeek: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.PRIMARY_FONT,
  },

  sessionOfDay: {
    margin: 8,
    fontWeight: '700',
    fontSize: 16,
    color: colors.PRIMARY_FONT,
  },
});

export default function ScheduleScreen() {
  const [loading, setLoading] = React.useState(true);

  const [schedules, setSchedules] = React.useState([]);

  const dayOfWeeks = ['THỨ 2', 'THỨ 3', 'THỨ 4', 'THỨ 5', 'THỨ 6', 'THỨ 7', 'CN'];

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
        {dayOfWeeks.map((dw) => {
          return (
            //  DAY OF WEEK
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 8, backgroundColor: colors.WHITE }}>
              {/* DAY OF WEEK */}
              <View style={{ padding: 8, minWidth: 80, justifyContent: 'center', borderRightWidth: 1, borderRightColor: colors.PRIMARY_BORDER }}>
                <Text style={styles.dayOfWeek}>{dw}</Text>
              </View>
              <View style={{ flex: 1 }}>
                {/* MORNING */}
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.PRIMARY_BORDER }}>
                  <Text style={styles.sessionOfDay}>Sáng</Text>
                  {item.monday &&
                    item.monday.morning &&
                    item.monday.morning.sessions &&
                    item.monday.morning.sessions.map((s) => {
                      return (
                        <View style={{ flexDirection: 'row', marginLeft: 24, marginVertical: 2 }}>
                          <Icon name="chevron-right" type="material-community" size={16} color={colors.PRIMARY_ICON} />
                          <Text style={{ marginLeft: 6, color: colors.PRIMARY_ICON }}>
                            {s.fromTime} - {s.toTime}
                          </Text>
                          <Text style={{ marginLeft: 6, fontWeight: '700', color: colors.PRIMARY_ICON }}>{s.subject}</Text>
                        </View>
                      );
                    })}
                </View>
                {/* AFTERNOON */}
                <View style={{ borderBottomWidth: 1, borderBottomColor: colors.PRIMARY_BORDER }}>
                  <Text style={styles.sessionOfDay}>Chiều</Text>
                  {item.monday &&
                    item.monday.afternoon &&
                    item.monday.afternoon.sessions &&
                    item.monday.afternoon.sessions.map((s) => {
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
                {/* EVENING */}
                <View>
                  <Text style={styles.sessionOfDay}>Tối</Text>
                  {item.monday &&
                    item.monday.evening &&
                    item.monday.evening.sessions &&
                    item.monday.evening.sessions.map((s) => {
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
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <Container showAppbar showBackButton title="THỜI KHÓA BIỂU" subTitle="Lớp 7 / 5" ready={!loading}>
      <FlatList data={schedules} keyExtractor={(item, index) => 'schedule-' + index} renderItem={renderItem} />
    </Container>
  );
}
