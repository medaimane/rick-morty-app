import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CharacterPresentable} from '../screens/CharacterPresentable';
import {Colors} from '../theme/Colors';
import {Fonts, FontSize} from '../theme/Fonts';
import {ArrowForwardSvg} from './svgs/ArrowForwardSvg';
import {TextView} from './TextView';

interface Props {
  character: CharacterPresentable;
  onPress: () => void;
}

export function CharacterCard({character, onPress}: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: character.image}} />
      </View>

      <TextView
        style={styles.name}
        textStyle={styles.text}
        text={character.name}
      />

      <ArrowForwardSvg fill={Colors.PrimarySoft} width={30} height={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  imageContainer: {
    width: 80,
    height: 80,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  name: {
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  text: {
    ...Fonts.Bold(FontSize.Normal),
    color: Colors.PrimaryLight,
  },
});
