import React, {useLayoutEffect, useRef} from 'react';
import {Container} from '../../components/Container';
import {TextView} from '../../components/TextView';
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/RootStackParamList';
import {Screens} from '../../navigation/Screens';
import {Image, StyleSheet} from 'react-native';
import {Colors} from '../../theme/Colors';
import {CharacterDetails} from '../../components/Details';

type Props = NativeStackScreenProps<RootStackParamList, Screens.Details>;

export function DetailsScreen({route, navigation}: Props) {
  const character = useRef(route.params?.item);
  const screenName = character.current.name ?? Screens.Details;

  useNavigationOption(navigation, screenName);

  return (
    <Container style={styles.container}>
      <CharacterDetails character={character.current} />
    </Container>
  );
}

function useNavigationOption(
  navigation: NativeStackNavigationProp<RootStackParamList, Screens>,
  screenName: string
) {
  useLayoutEffect(() => {
    const options: NativeStackNavigationOptions = {
      title: screenName,
      headerBackTitleVisible: false,
      headerTintColor: Colors.PrimarySoft,
      headerTitleStyle: {
        color: Colors.Primary,
      },
    };

    navigation.setOptions(options);
  }, [navigation, screenName]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {},
});
