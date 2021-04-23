import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Icon } from 'react-native-elements';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';
import SLL_Service from '../../../../services/SLL_Service';

import styled from 'styled-components/native';
import moment from 'moment';

const ItemContainer = styled.View`
  padding: 20px;
  flex-direction: row;
`;

const IconContainer = styled.View`
  height: 40;
  width: 40;
  background-color: #d8f9ea;
  border-radius: 20;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  font-size: 16;
  color: ${colors.PRIMARY_FONT};
  font-family: 'Roboto-Medium';
`;

const SubTitle = styled.Text`
  color: ${colors.LIGHT_BLACK};
  font-family: 'Roboto-Regular';
  font-size: 14;
`;

const DateTimeText = styled.Text`
  color: ${colors.LIGHT_BLACK};
  font-family: 'Roboto-Regular';
  font-size: 12;
`;

const Dot = styled.View`
  height: 6;
  width: 6;
  background-color: ${colors.DARK_RED};
  border-radius: 3;
  align-self: center;
`;

const ItemSeperator = styled.View`
  height: 1;
  background-color: ${colors.PRIMARY_BORDER};
`;

export default function MainScreen() {
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [announcements, setAnnouncements] = React.useState([]);

  React.useEffect(() => {
    SLL_Service.getNotifications()
      .then((result) => {
        setAnnouncements(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [refresh]);

  const renderItem = ({ item, index }) => {
    return (
      <ItemContainer>
        <IconContainer>
          <Icon
            name={item.icon && item.icon.name ? item.icon.name : 'bell-outline'}
            type={item.icon && item.icon.type ? item.icon.type : 'material-community'}
            size={24}
            color={colors.PRIMARY_ICON}
          />
        </IconContainer>
        <ContentContainer>
          <Title>{item.title}</Title>
          <SubTitle>{item.body}</SubTitle>
          <DateTimeText>
            {moment(item.createdTime.toDate()).format('DD/MM/yyyy HH:mm')} ({moment(item.createdTime.toDate()).fromNow()})
          </DateTimeText>
        </ContentContainer>
        <Dot />
      </ItemContainer>
    );
  };

  return (
    <Container showAppbar title="THÔNG BÁO" subTitle="Thông báo chung từ nhà trường" ready={!loading}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={announcements}
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
        ItemSeparatorComponent={() => <ItemSeperator />}
      />
    </Container>
  );
}
