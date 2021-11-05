import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CharacterPresentable} from '../screens/CharacterPresentable';
import {Colors} from '../theme/Colors';
import {Fonts, FontSize} from '../theme/Fonts';
import {TextView} from './TextView';

interface Props {
  character: CharacterPresentable;
  onPress: () => void;
}

export function CharacterCard({character, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <TextView textStyle={styles.name} text={character.name} />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: character.image}} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  name: {
    ...Fonts.SemiBold(FontSize.Header2),
    color: Colors.PrimarySoft,
  },
});
