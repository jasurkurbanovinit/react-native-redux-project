import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {name as appName} from './app.json';

const RootApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => RootApp);
