import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {local} from '../localization/Localization';
import {ViewState} from '../store/ViewState';
import {Colors} from '../theme/Colors';
import {Fonts, FontSize} from '../theme/Fonts';
import {LoadingView} from './LoadingView';
import {TextView} from './TextView';

interface Props {
  viewState: ViewState;
  renderData: () => ReactNode;
}

export function RemoteData(props: Props) {
  const content = () => {
    switch (props.viewState) {
      case ViewState.Data: {
        return props.renderData();
      }

      case ViewState.Empty: {
        return (
          <TextView
            style={styles.view}
            textStyle={styles.empty}
            text={local.noDataFound}
          />
        );
      }

      case ViewState.Error: {
        return (
          <TextView
            style={styles.view}
            textStyle={styles.error}
            text={local.somethingWentWrong}
          />
        );
      }

      case ViewState.Loading: {
        return <LoadingView />;
      }
    }
  };

  return <View style={styles.container}>{content()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  error: {
    ...Fonts.Regular(FontSize.Header2),
    color: Colors.Error,
  },
  empty: {
    ...Fonts.Regular(FontSize.Header2),
    color: Colors.DarkText,
  },
});
