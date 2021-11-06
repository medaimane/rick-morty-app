import React, {useEffect} from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {returntypeof} from 'typesafe-actions';
import {CharacterCard} from '../../components/CharacterCard';
import {Header} from '../../components/Header';
import {RemoteData} from '../../components/RemoteData';
import {Separator} from '../../components/Separator';
import {TextView} from '../../components/TextView';
import {local} from '../../localization/Localization';
import {RootState} from '../../store/rootState';
import {Colors} from '../../theme/Colors';
import {Fonts, FontSize} from '../../theme/Fonts';
import {HomeViewActions} from './HomeActions';
import {getHomeViewState} from './homeSelectors';

const mapStateToProps = (state: RootState) => getHomeViewState(state.home);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(HomeViewActions, dispatch);

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);

type Props = typeof dispatchProps & typeof stateProps;

export function HomeComponent({
  characters,
  viewState,
  start,
  showDetails,
}: Props) {
  useEffect(() => {
    start();
  }, [start]);

  return (
    <View style={styles.container}>
      <Header />

      <RemoteData
        viewState={viewState}
        renderData={() => (
          <FlatList
            data={characters}
            renderItem={({item}) => (
              <CharacterCard
                character={item}
                onPress={() => showDetails(item.id)}
              />
            )}
            keyExtractor={(_, idx) => 'CharacterCard_' + idx}
            ItemSeparatorComponent={Separator}
            showsVerticalScrollIndicator={false}
          />
        )}
      />
    </View>
  );
}

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
