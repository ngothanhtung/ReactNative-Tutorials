/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import SLL_Service from '../../../../services/SLL_Service';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  dayOfWeek: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    color: colors.PRIMARY_FONT,
  },

  sessionOfDay: {
    margin: 8,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: colors.PRIMARY_FONT,
  },
});

export default function ScheduleScreen() {
  const [loading, setLoading] = React.useState(true);

  const [schedules, setSchedules] = React.useState([]);

  const dayOfWeeks = [
    {
      id: 'monday',
      text: '2',
      sessions: [
        { id: 'morning', text: 'Sáng' },
        { id: 'afternoon', text: 'Chiều' },
        { id: 'evening', text: 'Tối' },
      ],
      color: colors.WHITE,
    },
    {
      id: 'tuesday',
      text: '3',
      sessions: [
        { id: 'morning', text: 'Sáng' },
        { id: 'afternoon', text: 'Chiều' },
        { id: 'evening', text: 'Tối' },
      ],
      color: colors.WHITE,
    },
    {
      id: 'wednesday',
      text: '4',
      sessions: [
        { id: 'morning', text: 'Sáng' },
        { id: 'afternoon', text: 'Chiều' },
        { id: 'evening', text: 'Tối' },
      ],
      color: colors.WHITE,
    },
    {
      id: 'thursday',
      text: '5',
      sessions: [
        { id: 'morning', text: 'Sáng' },
        { id: 'afternoon', text: 'Chiều' },
        { id: 'evening', text: 'Tối' },
      ],
      color: colors.WHITE,
    },
    {
      id: 'friday',
      text: '6',
      sessions: [
        { id: 'morning', text: 'Sáng' },
        { id: 'afternoon', text: 'Chiều' },
        { id: 'evening', text: 'Tối' },
      ],
      color: colors.WHITE,
    },
    {
      id: 'saturday',
      text: '7',
      sessions: [
        { id: 'morning', text: 'Sáng' },
        { id: 'afternoon', text: 'Chiều' },
        { id: 'evening', text: 'Tối' },
      ],
      color: colors.WHITE,
    },
    {
      id: 'sunday',
      text: 'CN',
      sessions: [
        { id: 'morning', text: 'Sáng' },
        { id: 'afternoon', text: 'Chiều' },
        // { id: 'evening', text: 'Tối' },
      ],
      color: colors.WHITE,
    },
  ];

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
            //  DAYS OF WEEK
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 8, backgroundColor: colors.WHITE }}>
              <View
                style={{
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 1,
                  borderRightColor: colors.PRIMARY_BORDER,
                }}>
                <View
                  style={{
                    backgroundColor: colors.SLL_PRIMARY,
                    height: 44,
                    width: 44,
                    borderRadius: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.dayOfWeek, { color: dw.color }]}>{dw.text}</Text>
                </View>
              </View>
              {/* SESSIONS OF DAY */}
              <View style={{ flex: 1 }}>
                {dw.sessions.map((sod) => {
                  return (
                    <View style={{ borderBottomWidth: sod.id === 'evening' ? 0 : 1, borderBottomColor: colors.PRIMARY_BORDER }}>
                      <Text style={styles.sessionOfDay}>{sod.text}</Text>
                      {item[dw.id] &&
                        item[dw.id][sod.id] &&
                        item[dw.id][sod.id].sessions &&
                        item[dw.id][sod.id].sessions.map((s) => {
                          return (
                            <View style={{ flexDirection: 'row', marginLeft: 16, marginBottom: 3 }}>
                              <Icon name="chevron-right" type="material-community" size={16} color={colors.PRIMARY_ICON} />
                              <Text style={{ marginLeft: 2, color: colors.PRIMARY_FONT, fontFamily: 'Roboto-Regular' }}>
                                {s.fromTime} - {s.toTime}
                              </Text>
                              <Text style={{ marginLeft: 6, color: colors.PRIMARY_FONT, fontFamily: 'Roboto-Bold' }}>{s.subject}</Text>
                            </View>
                          );
                        })}
                    </View>
                  );
                })}
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
