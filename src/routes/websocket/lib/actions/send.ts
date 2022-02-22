type ConnectedAction = {
  type: 'connected';
  id: string;
  token: string;
};

type GetIdSuccess = {
  type: 'getIdSuccess';
  id: string;
};

type ReuseIdSuccessAction = {
  type: 'reuseIdSuccess';
};

export type SendAction = ConnectedAction | ReuseIdSuccessAction | GetIdSuccess;

export const actionCreator = {
  connected: (id: string, token: string): ConnectedAction => ({
    type: 'connected',
    id,
    token,
  }),
  reuseIdSuccess: (): ReuseIdSuccessAction => ({ type: 'reuseIdSuccess' }),
  getIdSuccess: (id: string): GetIdSuccess => ({
    type: 'getIdSuccess',
    id,
  }),
};
