type GetIdAction = {
  type: 'getId';
};

type ReuseAction = {
  type: 'reuseId';
  id: string;
  token: string;
};

type SubscribeAction = {
  type: 'subscribe';
  key: string;
};

type UnsubscribeAction = {
  type: 'unsubscribe';
  key: string;
};

export type ReceiveAction =
  | ReuseAction
  | GetIdAction
  | SubscribeAction
  | UnsubscribeAction;

const actionTypes = ['getId', 'reuseId', 'subscribe', 'unsubscribe'];

export function isReceiveAction(obj: any): obj is ReceiveAction {
  if (!obj?.type) return false;
  return actionTypes.includes(obj.type);
}
