import moment from 'moment';
import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Project, Task } from '@/types';

type Props = {
  project: Project;
  onPress: () => void;
};

const ProjectItem = ({ project, onPress }: Props) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.iconContainer}>
          <Image source={require('@/components/assets/icons/project.png')} style={styles.icon} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{project.name}</Text>
        <Text style={styles.date}>{project.description}</Text>
      </View>
      <View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>5/20</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProjectItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    padding: 20,
    minHeight: 80,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#5E6272',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#A06AF9',
  },

  icon: {
    width: 24,
    height: 24,
  },

  title: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  date: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A5F59C',
  },

  labelContainer: {
    height: 24,
    width: 62,
    borderRadius: 12,
    backgroundColor: '#A06AF9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
