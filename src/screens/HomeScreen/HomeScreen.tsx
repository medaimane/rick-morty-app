import React, {useEffect} from 'react';
import {FlatList, Platform, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {returntypeof} from 'typesafe-actions';
import {CharacterRow} from '../../components/CharacterRow';
import {RemoteData} from '../../components/RemoteData';
import {Separator} from '../../components/Separator';
import {Screens} from '../../navigation/Screens';
import {RootState} from '../../store/rootState';
import {HomeViewActions} from './HomeActions';
import {getHomeViewState} from './homeSelectors';
import {Colors} from '../../theme/Colors';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/routers';

const mapStateToProps = (state: RootState) => getHomeViewState(state.home);
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(HomeViewActions, dispatch);

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);

type Props = NativeStackScreenProps<ParamListBase> &
  typeof dispatchProps &
  typeof stateProps;

const isIOS = Platform.OS === 'ios';

export function HomeComponent({
  navigation,
  characters,
  viewState,
  fetchCharacters,
}: Props) {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <RemoteData
      viewState={viewState}
      renderData={() => (
        <FlatList
          data={characters}
          renderItem={({item}) => (
            <CharacterRow
              character={item}
              onPress={() => navigation.navigate(Screens.Details, {item})}
            />
          )}
          keyExtractor={(_, idx) => 'CharacterCard_' + idx}
          ItemSeparatorComponent={() => (isIOS ? <Separator /> : null)}
          showsVerticalScrollIndicator={false}
          style={styles.container}
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
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 16,
  },
});
