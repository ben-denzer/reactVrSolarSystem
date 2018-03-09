import React from 'react';
import { AppRegistry } from 'react-vr';

import App from './components/App';

const second_vr = props => <App {...props} />;

AppRegistry.registerComponent('second_vr', () => second_vr);
