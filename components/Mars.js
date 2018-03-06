import React from 'react';
import { asset, Model } from 'react-vr';

const Mars = props => {
  const { location } = props;
  const { x, y, z } = location;
  return (
    <Model
      source={{
        obj: asset('MarsPlanet/MarsPlanet.obj'),
        mtl: asset('MarsPlanet/MarsPlanet.mtl')
      }}
      style={{
        height: '500px',
        width: '500px',
        layoutOrigin: [0.5, 0.5],
        transform: [{ translate: [x, y, z] }, { rotateX: 105 }, { rotateY: 40 }]
      }}
    />
  );
};

export default Mars;
