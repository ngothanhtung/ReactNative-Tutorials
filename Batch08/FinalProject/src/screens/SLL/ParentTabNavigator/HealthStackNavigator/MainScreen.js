import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { Icon } from 'react-native-elements';
import Container from '../../../../components/Container';
import colors from '../../../../constants/colors';
import SLL_Service from '../../../../services/SLL_Service';

import styled from 'styled-components/native';
import moment from 'moment';

const Title = styled.Text`
  font-size: 16;
  color: ${colors.PRIMARY_FONT};
  font-family: 'Roboto-Medium';
`;

const ItemContainer = styled.View`
  flex-direction: column;
`;

const Row = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: ${colors.PRIMARY_BORDER};
  border-bottom-width: 1;
  padding: 8px;
  padding-bottom: 8px;
  padding-left: 16;
  padding-right: 16;
`;

const Label = styled.Text`
  color: ${colors.PRIMARY_FONT};
  font-family: 'Roboto-Medium';
`;

const Value = styled.Text`
  color: ${colors.LIGHT_BLACK};
  font-family: 'Roboto-Regular';
`;

const ItemSeperator = styled.View`
  height: 1;
  background-color: ${colors.PRIMARY_BORDER};
`;

export default function MainScreen() {
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [health, setHealth] = React.useState([]);

  React.useEffect(() => {
    SLL_Service.getGeneralHealthOfStudent('gZbiCYvQ8AYQOS73kL76')
      .then((result) => {
        console.log(result);
        setHealth(result);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [refresh]);

  const renderItem = ({ item, index }) => {
    const { general } = item;

    return (
      <React.Fragment>
        <ItemContainer>
          <Row>
            <Title>NGÀY: {moment(item.date).format('DD/MM/yyyy')}</Title>
          </Row>

          <Row>
            <Label>Chiều cao</Label>
            <Value>{general.height}</Value>
          </Row>
          <Row>
            <Label>Cân nặng</Label>
            <Value>{general.weight}</Value>
          </Row>
          <Row>
            <Label>Huyết áp</Label>
            <Value>{general.bloodPressre}</Value>
          </Row>
          <Row>
            <Label>Răng</Label>
            <Value>{general.teeth}</Value>
          </Row>
          <Row>
            <Label>Tai</Label>
            <Value>{general.ears}</Value>
          </Row>
          <Row>
            <Label>Mũi</Label>
            <Value>{general.nose}</Value>
          </Row>
          <Row>
            <Label>Họng</Label>
            <Value>{general.throat}</Value>
          </Row>

          <Row>
            <Label>Da liễu</Label>
            <Value>{general.dermatology}</Value>
          </Row>

          <Row>
            <Label>Thần kinh</Label>
            <Value>{general.nerve}</Value>
          </Row>

          <Row>
            <Label>Cải thiện tình trạng</Label>
            <Value>{general.forgein}</Value>
          </Row>

          <Row>
            <Label>Phẫu thuật</Label>
            <Value>{general.surgery}</Value>
          </Row>
        </ItemContainer>
      </React.Fragment>
    );
  };

  return (
    <Container showAppbar title="SỨC KHỎE - Y TẾ" subTitle="Ngô Nhật Bách - Lớp 7A5" ready={!loading}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={health}
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
