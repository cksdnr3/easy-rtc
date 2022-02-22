type ConnectedAction = {
  type: 'connected';
  id: string;
  token: string;
};

type GetIdSuccessAction = {
  type: 'getIdSuccess';
  id: string;
};

type ReuseIdSuccessAction = {
  type: 'reuseIdSuccess';
};

type SubscriptionMessageAction = {
  type: 'subscriptionMessage';
  message: any;
};

export type SendAction =
  | ConnectedAction
  | ReuseIdSuccessAction
  | GetIdSuccessAction
  | SubscriptionMessageAction;

export const actionCreator = {
  connected: (id: string, token: string): ConnectedAction => ({
    type: 'connected',
    id,
    token,
  }),
  reuseIdSuccess: (): ReuseIdSuccessAction => ({ type: 'reuseIdSuccess' }),
  getIdSuccess: (id: string): GetIdSuccessAction => ({
    type: 'getIdSuccess',
    id,
  }),
  subscriptionMessage: (message: any): SubscriptionMessageAction => ({
    type: 'subscriptionMessage',
    message,
  }),
};
