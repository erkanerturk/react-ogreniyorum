import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

import { firebaseConfig } from './config/env';
import { defaultSettings } from './constants/defaultSettings';

import notifyReducer from './reducers/notifyReducer';
import settingsReducer from './reducers/settingsReducer';

import { getItemInLocalStorage, setItemInLocalStorage } from './helpers/utils';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize firestore instance
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase),
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer,
});

// Check for settings in localStorage
if (getItemInLocalStorage('settings') == null) {
  setItemInLocalStorage('settings', defaultSettings);
}

// Create initial state
const initialState = { settings: getItemInLocalStorage('settings') };

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeWithDevTools(reactReduxFirebase(firebase)),
);

export default store;
