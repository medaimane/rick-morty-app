import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Colors} from '../theme/Colors';
import {Fonts, FontSize} from '../theme/Fonts';
import {CharacterPresentable} from '../screens/HomeScreen/CharacterPresentable';

interface Props {
  character: CharacterPresentable;
}

export function CharacterDetails({character}: Props) {
  const {name, gender, image, status} = character;

  return (
    <View style={styles.container}>
      <Image fadeDuration={3000} style={styles.image} source={{uri: image}} />

      <View style={styles.details}>
        <View style={styles.title}>
          <Text style={styles.text}>{name}</Text>
          {gender && <Text style={styles.gender}>{gender}</Text>}
        </View>

        {status && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{status}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    paddingRight: 16,
  },
  text: {
    ...Fonts.Bold(FontSize.Header1),
    color: Colors.PrimaryLight,
  },
  gender: {
    ...Fonts.SemiBold(FontSize.Normal),
    color: Colors.Secondary,
  },
  badge: {
    width: 80,
    height: 36,
    borderRadius: 20,
    backgroundColor: Colors.PrimaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    ...Fonts.Bold(FontSize.Header2),
    color: Colors.White,
  },
});
