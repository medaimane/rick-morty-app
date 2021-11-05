import {ApolloGraphQLClient} from '../services/networking/AppoloGraphQLClient';
import {CharactersGateway} from '../services/api/CharactersGateway';
import {CharactersService} from '../services/api/CharactersService';
import {DevNetworkingConfiguration} from '../services/networking/NetworkingConfiguration';

const graphQLClient = new ApolloGraphQLClient(new DevNetworkingConfiguration());

export interface Dependencies {
  gateway: CharactersGateway;
}

export const dependencies: Dependencies = {
  gateway: new CharactersService(graphQLClient),
};
