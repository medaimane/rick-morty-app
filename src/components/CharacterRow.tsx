import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CharacterPresentable} from '../screens/HomeScreen/CharacterPresentable';
import {Colors} from '../theme/Colors';
import {Fonts, FontSize} from '../theme/Fonts';
import {ArrowForwardSvg} from './svgs/ArrowForwardSvg';
import {TextView} from './TextView';

interface Props {
  character: CharacterPresentable;
  onPress: () => void;
}

export function CharacterRow({character, onPress}: Props) {
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
    width: 60,
    height: 60,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    resizeMode: 'contain',
  },
  name: {
    flexGrow: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  text: {
    ...Fonts.Bold(FontSize.Header3),
    color: Colors.PrimaryLight,
  },
});
