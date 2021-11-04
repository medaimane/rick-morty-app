import React from 'react';
import {Text, View} from 'react-native';
import {CharacterPresentable} from '../screens/CharacterPresentable';

interface Props {
  character: CharacterPresentable;
}

export function CharacterCard({character}: Props) {
  return (
    <View>
      <Text>{'CharacterCard ' + character.name}</Text>
    </View>
  );
}
