/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useTheme } from 'react-native-paper';
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
    fontSize: 15,
    color: colors.PRIMARY_FONT,
  },
});

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
      { id: 'evening', text: 'Tối' },
    ],
    color: colors.WHITE,
  },
];

export default function ScheduleScreen() {
  const [loading, setLoading] = React.useState(true);
  const [schedules, setSchedules] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);

  const { colors: themeColors } = useTheme();

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
  }, [refresh]);

  const renderItem = ({ item }) => {
    return (
      <View>
        {dayOfWeeks.map((dw) => {
          return (
            //  DAYS OF WEEK
            <View key={dw.id} style={{ flex: 1, flexDirection: 'row', marginBottom: 6, backgroundColor: colors.WHITE }}>
              <View
                style={{
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: colors.PRIMARY_BORDER,
                  borderLeftWidth: 0,
                }}>
                <View
                  style={{
                    backgroundColor: themeColors.primary,
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
                    <View
                      key={sod.id}
                      style={{
                        borderWidth: 0,
                        borderTopWidth: sod.id !== 'evening' ? 1 : 0,
                        borderBottomWidth: sod.id !== 'morning' ? 1 : 0,
                        borderColor: colors.PRIMARY_BORDER,
                      }}>
                      <Text style={styles.sessionOfDay}>{sod.text}</Text>
                      {item[dw.id] &&
                        item[dw.id][sod.id] &&
                        item[dw.id][sod.id].sessions &&
                        item[dw.id][sod.id].sessions.map((s, index) => {
                          return (
                            <View key={'session-' + index} style={{ flexDirection: 'row', marginLeft: 16, marginBottom: 3 }}>
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={schedules}
        keyExtractor={(item, index) => 'schedule-' + index}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => {
              setRefresh(refresh + 1);
            }}
          />
        }
      />
    </Container>
  );
}
