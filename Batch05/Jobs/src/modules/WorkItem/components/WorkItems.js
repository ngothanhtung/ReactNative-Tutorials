import React, { Component } from 'react';
import { Text, View, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FAB, Portal } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
//REDUX
import { connect } from 'react-redux';
import * as ActionTypes from '../actions/types';

const styles = StyleSheet.create({
  fab: {
    backgroundColor: 'orange',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

class WorkItems extends Component {
  render() {
    return (
      <React.Fragment>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() => {
                this.props.getWorkItems();
              }}
            />
          }
          data={this.props.workitems}
          keyExtractor={(item, index) => 'workitem-' + index}
          ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
          renderItem={({ item, index }) => {
            return (
              <Card>
                <Card.Title title='Card Title' subtitle='Card Subtitle' left={(props) => <Avatar.Icon {...props} icon='folder' />} />
                <Card.Content>
                  <Title>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                  <Button>Cancel</Button>
                  <Button>Ok</Button>
                </Card.Actions>
              </Card>
            );
          }}
        />
        <FAB
          style={styles.fab}
          small
          icon='add'
          onPress={() => {
            this.props.navigation.navigate('AddWorkItemScreen');
          }}
        />
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.getWorkItems();
  }
}

const mapStateToProps = (state) => ({
  workitems: state.workItemReducer.getWorkItemReducer.workitems,
  loading: state.workItemReducer.getWorkItemReducer.loading,
});

// Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) => ({
  getWorkItems: () => dispatch({ type: ActionTypes.GET_WORKITEMS }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(WorkItems));
