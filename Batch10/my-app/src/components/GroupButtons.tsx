import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import COLORS from '@/constants/COLORS';

type SmallButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  onPress?: () => void;
};

const SmallButton = ({ children, active = true, onPress }: SmallButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.smallButtonContainer, { backgroundColor: active ? COLORS.primary : 'transparent' }]}>
      <Text style={[styles.smallButtonText, { color: active ? COLORS.light : COLORS.deactive }]}>{children}</Text>
    </Pressable>
  );
};

type Props = {
  buttons?: string[];
  selectedButton?: string;
  onPress?: (button: string) => void;
};

const GroupButtons = ({ buttons = ['Button1', 'Button2'], selectedButton, onPress }: Props) => {
  const [value, setValue] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (selectedButton) {
      setValue(selectedButton);
    }
  }, [selectedButton]);

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => {
        return (
          <SmallButton
            key={'button-' + index}
            active={button === value}
            onPress={() => {
              setValue(button);
              if (onPress && typeof onPress === 'function') {
                onPress(button);
              }
            }}
          >
            {button}
          </SmallButton>
        );
      })}
    </View>
  );
};

export default GroupButtons;

const styles = StyleSheet.create({
  smallButtonContainer: {
    height: 32,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 16,
  },

  smallButtonText: {
    fontWeight: '600',
    fontSize: 14,
  },

  container: {
    flexDirection: 'row',
  },
});
