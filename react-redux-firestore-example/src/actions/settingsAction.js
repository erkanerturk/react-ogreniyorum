import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION,
} from '../constants/actionTypes';

import { getItemInLocalStorage, setItemInLocalStorage } from '../helpers/utils';

const settings = getItemInLocalStorage('settings');

export const setDisableBalanceOnAdd = () => {
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
  setItemInLocalStorage('settings', settings);

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd,
  };
};

export const setDisableBalanceOnEdit = () => {
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
  setItemInLocalStorage('settings', settings);

  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit,
  };
};

export const setAllowRegistration = () => {
  settings.allowRegistration = !settings.allowRegistration;
  setItemInLocalStorage('settings', settings);

  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration,
  };
};
