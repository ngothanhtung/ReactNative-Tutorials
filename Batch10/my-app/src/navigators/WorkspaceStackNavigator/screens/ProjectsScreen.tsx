import _ from 'lodash';
import React from 'react';
import { FlatList, RefreshControl, SafeAreaView, StyleSheet, View } from 'react-native';

import Container from '@/components/Container';
import ProjectItem from '@/components/ProjectItem';
import { getProjects } from '@/firebase/ProjectServices';
import { Project } from '@/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { WorkspaceStackParamList } from '../WorkspaceStackParamList';

type Props = {
  navigation: NativeStackNavigationProp<WorkspaceStackParamList>;
};

const ProjectsScreen = ({ navigation }: Props) => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [refresh, setRefresh] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    try {
      // Fetch tasks
      setLoading(true);
      getProjects({
        uid: 'pXw0ILgTDyafkKlvLaE4apSBA5o2',
      }).then((projects) => {
        console.log('projects', projects);
        setProjects(projects);

        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [refresh]);

  const records = _.sortBy(projects, ['name'], ['asc']);

  return (
    <Container>
      <SafeAreaView style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          refreshing={loading}
          refreshControl={
            <RefreshControl
              tintColor='white'
              colors={['white']}
              refreshing={loading}
              onRefresh={() => {
                setRefresh(refresh + 1);
              }}
            />
          }
          data={records}
          renderItem={({ item, index }) => {
            return (
              <ProjectItem
                project={item}
                onPress={() => {
                  navigation.navigate('Tasks', {
                    project: item,
                  });
                }}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </SafeAreaView>
    </Container>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  text: {
    color: 'white',
  },
});
