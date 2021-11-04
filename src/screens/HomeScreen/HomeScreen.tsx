import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {returntypeof} from 'typesafe-actions';
import {CharacterCard} from '../../components/CharacterCard';
import {RemoteData} from '../../components/RemoteData';
import {RootState} from '../../store/rootState';
import {HomeViewActions} from './HomeActions';
import {getHomeViewState} from './homeSelectors';

const mapStateToProps = (state: RootState) => getHomeViewState(state.home);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(HomeViewActions, dispatch);

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);

type Props = typeof dispatchProps & typeof stateProps;

export function HomeComponent({characters, viewState, start}: Props) {
  useEffect(() => {
    start();
  }, [start]);

  console.log(characters);

  return (
    <RemoteData
      viewState={viewState}
      renderData={() => (
        <FlatList
          data={characters}
          renderItem={({item}) => <CharacterCard character={item} />}
          keyExtractor={(_, idx) => 'CharacterCard' + idx}
        />
      )}
    />
  );
}

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
