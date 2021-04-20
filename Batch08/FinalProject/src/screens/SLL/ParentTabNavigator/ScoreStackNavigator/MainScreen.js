/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import { useTheme, DataTable } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import numeral from 'numeral';

import SLL_Service from '../../../../services/SLL_Service';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  subjectContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  subjectText: { color: colors.PRIMARY_FONT, fontFamily: 'Roboto-Medium', fontSize: 14 },

  column: { flex: 1, flexDirection: 'column', borderWidth: 1, borderColor: colors.PRIMARY_BORDER, borderLeftWidth: 0, borderTopWidth: 0 },

  headerTextContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.PRIMARY_BORDER,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },

  headerText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: colors.PRIMARY_FONT,
  },

  scoreTextContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  scoreText: {
    alignSelf: 'flex-end',
    fontFamily: 'Roboto-Regular',
    marginVertical: 1,
    fontSize: 13,
  },
});

const SubjectName = ({ name }) => {
  return (
    <View style={styles.subjectContainer}>
      <Text style={styles.subjectText}>{name}</Text>
    </View>
  );
};

const HeaderText = ({ text, style }) => {
  return (
    <View style={[styles.headerTextContainer, style]}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

export default function ScheduleScreen() {
  const [loading, setLoading] = React.useState(true);
  const [subjects, setSubjects] = React.useState([]);
  const [refresh, setRefresh] = React.useState(0);

  const { colors: themeColors } = useTheme();

  React.useEffect(() => {
    SLL_Service.getScoresOfStudent('gZbiCYvQ8AYQOS73kL76', '2020-2021')
      .then((result) => {
        setSubjects(result[0].subjects);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [refresh]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 0, backgroundColor: colors.WHITE }}>
        <View style={[styles.column, { flex: 2 }]}>
          {index === 0 && <HeaderText text="Môn học" style={{ alignItems: 'flex-start' }} />}
          <SubjectName name={item.name} />
        </View>

        <View style={styles.column}>
          {index === 0 && <HeaderText text="M" />}
          <View style={styles.scoreTextContainer}>
            {item.score &&
              item.score.interview &&
              item.score.interview.map((s) => {
                return <Text style={styles.scoreText}>{numeral(s.score).format('0.0')}</Text>;
              })}
          </View>
        </View>
        <View style={styles.column}>
          {index === 0 && <HeaderText text="15ph" />}
          <View style={styles.scoreTextContainer}>
            {item.score &&
              item.score.quickTest &&
              item.score.quickTest.map((s) => {
                return <Text style={styles.scoreText}>{numeral(s.score).format('0.0')}</Text>;
              })}
          </View>
        </View>
        <View style={styles.column}>
          {index === 0 && <HeaderText text="1 tiết" />}
          <View style={styles.scoreTextContainer}>
            {item.score &&
              item.score.session &&
              item.score.session.map((s) => {
                return <Text style={styles.scoreText}>{numeral(s.score).format('0.0')}</Text>;
              })}
          </View>
        </View>
        <View style={styles.column}>
          {index === 0 && <HeaderText text="HK I" />}
          <View style={styles.scoreTextContainer}>
            {item.score && item.score.semester1 && <Text style={styles.scoreText}>{numeral(item.score.semester1.score).format('0.0')}</Text>}
          </View>
        </View>
        <View style={styles.column}>
          {index === 0 && <HeaderText text="HK II" />}
          <View style={styles.scoreTextContainer}>
            {item.score && item.score.semester2 && <Text style={styles.scoreText}>{numeral(item.score.semester2.score).format('0.0')}</Text>}
          </View>
        </View>
        <View style={[styles.column, { borderRightWidth: 0 }]}>
          {index === 0 && <HeaderText text="CN" />}
          <View style={styles.scoreTextContainer}>{/* <Text style={styles.scoreText}>{numeral(9).format('0.0')}</Text> */}</View>
        </View>
      </View>
    );
  };

  return (
    <Container showAppbar showBackButton title="BẢNG ĐIỂM (2020 - 2021)" subTitle="Ngô Nhật Bách - Lớp 7 / 5" ready={!loading}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={subjects}
        keyExtractor={(item, index) => 'subject-' + index}
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
