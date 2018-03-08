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
  const imageUrl = DEV ? `../static_assets/${image}` : `static_assets/${image}`;

  return (
    <Sphere
      radius={radius}
      widthSegments={500}
      heightSegments={500}
      texture={imageUrl}
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
