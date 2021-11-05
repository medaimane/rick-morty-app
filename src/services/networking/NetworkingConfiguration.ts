export interface NetworkingConfiguration {
  readonly baseUrl: string;
}

export class DevNetworkingConfiguration implements NetworkingConfiguration {
  readonly baseUrl = 'https://rickandmortyapi.com';
}
