import React from 'react';
import { AppRegistry } from 'react-vr';

import App from './components/App';

global.DEV = process.env.NODE_ENV === 'development';
const second_vr = props => <App {...props} />;

AppRegistry.registerComponent('second_vr', () => second_vr);
