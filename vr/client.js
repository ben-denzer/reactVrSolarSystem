import { VRInstance } from 'react-vr-web';
const DEV = process.env.NODE_ENV === 'development';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'second_vr', parent, {
    // Add custom options here
    enableHotReload: DEV,
    ...options
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = { init };
