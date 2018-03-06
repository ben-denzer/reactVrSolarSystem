import React from 'react';
import { asset, Model } from 'react-vr';

const Jupiter = props => {
  const { location } = props;
  const { x, y, z } = location;
  return (
    <Model
      source={{
        obj: asset('jupiter/jupiter.obj'),
        mtl: asset('jupiter/jupiter.mtl')
      }}
      style={{
        height: '500px',
        width: '500px',
        layoutOrigin: [-0.2, 0],
        transform: [{ translate: [x, y, z] }, { rotateX: 105 }, { rotateY: 40 }]
      }}
    />
  );
};

export default Jupiter;
