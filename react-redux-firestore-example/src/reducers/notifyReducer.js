import { NOTIFY_USER } from '../constants/actionTypes';

const initialState = {
  message: null,
  messageType: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NOTIFY_USER:
      return {
        ...state,
        message: payload.message,
        messageType: payload.messageType,
      };
    default:
      return state;
  }
};
