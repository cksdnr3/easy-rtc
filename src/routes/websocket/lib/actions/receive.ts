type GetIdAction = {
  type: 'getId';
};

type ReuseAction = {
  type: 'reuseId';
  id: string;
  token: string;
};

export type ReceiveAction = ReuseAction | GetIdAction;

const actionTypes = ['getId', 'reuseId'];

export function isReceiveAction(obj: any): obj is ReceiveAction {
  if (!obj?.type) return false;
  return actionTypes.includes(obj.type);
}
