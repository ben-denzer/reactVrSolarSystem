import React, { Component } from 'react';
import { asset, Model, Pano, View, Box, Sphere } from 'react-vr';

import Jupiter from './Jupiter';
import Planet from './Planet';
import transformHelper from '../utils/transformHelper';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mercury: {
        radius: 2,
        layoutOrigin: [0.1, 0.5],
        image: 'mercurySurface.jpg',
        location: [0, 0, -100]
      },
      venus: {
        radius: 20,
        layoutOrigin: [2, -1],
        image: 'venusSurface.jpg',
        location: [0, 0, -500]
      },
      earth: {
        radius: 25,
        layoutOrigin: [-2, 2],
        image: 'earthSurface.jpg',
        location: [0, 0, -800]
      },
      mars: {
        radius: 22,
        layoutOrigin: [2, -1],
        image: 'marsSurface.jpg',
        location: [0, 0, -1200]
      },
      jupiterLocation: { x: 2, y: -1, z: -85 }
    };

    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const { mercury, venus, earth, mars } = this.state;
    newMercury = transformHelper(mercury, 0.01, -0.02);
    newVenus = transformHelper(venus, -0.2, 0.008);
    newEarth = transformHelper(earth, -0.02, 0.006);
    newMars = transformHelper(mars, -0.02, -0.03);
    this.setState({
      mercury: newMercury,
      venus: newVenus,
      earth: newEarth,
      mars: newMars
    });
    requestAnimationFrame(this.animate);
  }

  render() {
    return (
      <View>
        <Pano source={asset('space.jpg')} />
        <Planet data={this.state.mercury} />
        <Planet data={this.state.venus} />
        <Planet data={this.state.earth} />
        <Planet data={this.state.mars} />
        {/* <Jupiter location={jupiterLocation} /> */}
        {/* <Box
          dimWidth={2}
          dimDepth={2}
          dimHeight={2}
          texture={'../static_assets/moonTexture.jpg'}
          style={{
            layoutOrigin: [-1, 1],
            transform: [{ translate: [x, y, z] }]
          }}
        /> */}
        {/* <Sphere
          radius={0.5}
          widthSegments={500}
          heightSegments={500}
          style={{
            layoutOrigin: [-1, 1],
            transform: [{ translate: [x * -1, y + 0.002, z - 0.002] }]
          }}
          texture={'../static_assets/mercurySurface.jpeg'}
        /> */}
      </View>
    );
  }
}
