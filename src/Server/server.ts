export class Server {
  store: DataStore = {
    timestamp: 0,
    data: ""
  }

  getData(clientTimestamp: number): (DataStore|undefined) {
    if (clientTimestamp < this.store.timestamp) {
      return this.store;
    } else {
      return undefined;
    }
  }
}


export interface DataStore {
  timestamp: number;
  data: string | undefined;
}