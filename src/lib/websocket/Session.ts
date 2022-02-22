import { v4 } from 'uuid';
import { WebSocket } from 'ws';
import { ReceiveAction } from './actions/receive';
import { createHmac } from 'crypto';
import { actionCreator } from './actions/send';

const { SESSION_SECRET_KEY } = process.env;

if (!SESSION_SECRET_KEY) {
  console.warn('SESSION_SECRET_KEY is not defined');
}

export default class Session {
  id: string;
  private socket: WebSocket;
  private token: string;

  constructor(socket: WebSocket) {
    this.id = v4();
    this.socket = socket;
    this.token = createHmac('sha256', SESSION_SECRET_KEY!)
      .update(this.id)
      .digest('hex');

    this.informConnected();
  }

  sendJSON(data: any) {
    this.socket.send(JSON.stringify(data));
  }

  private informConnected() {
    const action = actionCreator.connected(this.id, this.token);
    this.sendJSON(action);
  }

  handle(action: ReceiveAction) {
    switch (action.type) {
      case 'getId': {
        this.handleGetId();
        break;
      }
      case 'reuseId': {
        break;
      }
      case 'subscribe': {
        break;
      }
      case 'unsubscribe': {
        break;
      }
    }
  }

  handleGetId() {
    const action = actionCreator.getIdSuccess(this.id);
    this.sendJSON(action);
  }
}
