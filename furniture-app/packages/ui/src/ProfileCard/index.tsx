// Libs
import { memo } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import { Stack, Text } from 'tamagui';

// Components
import { ArrowIcon } from '../icons';

interface IProfileCardProps {
  title: string;
  description?: string;
  onPress?: () => void;
}

const ProfileCard = ({
  title,
  description = '',
  onPress = () => {}
}: IProfileCardProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && {
          opacity: 0.7
        }
      ]}
      onPress={onPress}
    >
      <Stack flexDirection='row'>
        <Stack>
          <Text fontWeight={'700'} color='$secondary' fontSize={18}>
            {title}
          </Text>
          <Text
            mt={5}
            fontWeight={'400'}
            color='$primary'
            fontSize={12}
            lineHeight={15}
          >
            {description}
          </Text>
        </Stack>
        <ArrowIcon />
      </Stack>
    </Pressable>
  );
};

const styles = StyleSheet.create<Record<string, ViewStyle>>({
  container: {
    padding: 18,
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '$light',
    shadowColor: '$shadowPrimary',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 15
  }
});

export default memo(ProfileCard);
