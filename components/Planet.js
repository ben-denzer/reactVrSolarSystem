import React from 'react';
import { Sphere } from 'react-vr';

const Planet = props => {
  const {
    layoutOrigin,
    location,
    image,
    radius,
    rotateX,
    rotateY,
    rotateZ
  } = props.data;

  return (
    <Sphere
      radius={radius}
      widthSegments={500}
      heightSegments={500}
      texture={`../static_assets/${image}`}
      style={{
        layoutOrigin,
        transform: [
          { translate: location },
          { rotateX: rotateX || 0 },
          { rotateY: rotateY || 0 },
          { rotateZ: rotateZ || 0 }
        ]
      }}
    />
  );
};

export default Planet;
