import React from 'react';
import {View, ViewStyle} from 'react-native';
import Svg, {G, Path, Polygon} from 'react-native-svg';

export function ArrowForwardSvg({
  fill,
  width,
  height,
  style,
}: {
  fill: string;
  width?: number;
  height?: number;
  style?: ViewStyle;
}) {
  const defaultSize = 24;
  const viewBox = `0 0 ${width ?? defaultSize} ${height ?? defaultSize}`;

  return (
    <View style={style}>
      <Svg
        viewBox={viewBox}
        height={height ?? defaultSize}
        width={width ?? defaultSize}
        fill={fill}
      >
        <G>
          <Path d="M0,0h24v24H0V0z" fill="none" />
        </G>
        <G>
          <Polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
        </G>
      </Svg>
    </View>
  );
}
