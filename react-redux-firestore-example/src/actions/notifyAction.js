import { NOTIFY_USER } from '../constants/actionTypes';

export const notifyUser = (message, messageType) => ({
  type: NOTIFY_USER,
  payload: { message, messageType },
});
