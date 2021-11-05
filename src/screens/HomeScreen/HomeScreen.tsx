import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {returntypeof} from 'typesafe-actions';
import {CharacterCard} from '../../components/CharacterCard';
import {RemoteData} from '../../components/RemoteData';
import {RootState} from '../../store/rootState';
import {Colors} from '../../theme/Colors';
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
    <RemoteData
      viewState={viewState}
      renderData={() => (
        <FlatList
          data={characters}
          renderItem={({item}) => (
            <CharacterCard
              onPress={() => {
                console.log('Pressed', item);

                showDetails(item.id);
              }}
              character={item}
            />
          )}
          keyExtractor={(_, idx) => 'CharacterCard_' + idx}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    />
  );
}

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

const styles = StyleSheet.create({
  separator: {
    borderBottomColor: Colors.Secondary,
    borderBottomWidth: 0.5,
  },
});
