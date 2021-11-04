import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {local} from '../localization/Localization';
import {ViewState} from '../store/ViewState';
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
        return <TextView text={local.noDataFound} />;
      }

      case ViewState.Error: {
        return <TextView text={local.somethingWentWrong} />;
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
  loading: {
    flex: 1,
    paddingTop: 16,
    alignItems: 'center',
  },
});
