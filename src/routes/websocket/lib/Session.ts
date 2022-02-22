import { v4 } from 'uuid';
import { WebSocket } from 'ws';
import { ReceiveAction } from './actions/receive';
import { actionCreator } from './actions/send';

export default class Session {
  private id: string;
  private socket: WebSocket;

  constructor(socket: WebSocket) {
    this.id = v4();
    this.socket = socket;
  }

  getId() {
    return this.id;
  }

  handle(action: ReceiveAction) {
    switch (action.type) {
      case 'getId': {
        break;
      }
      case 'reuseId': {
        break;
      }
    }
  }

  sendJSOM(data: any) {
    this.socket.send(JSON.stringify(data));
  }

  informConnected() {
    // actionCreator.connected(this.id);
  }

  handleGetId() {}
}
