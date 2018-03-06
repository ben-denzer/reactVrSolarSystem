import React from 'react';
import { Sphere } from 'react-vr';

const Planet = props => {
  const { radius, layoutOrigin, location, image } = props.data;
  return (
    <Sphere
      radius={radius}
      widthSegments={500}
      heightSegments={500}
      texture={`../static_assets/${image}`}
      style={{
        layoutOrigin,
        transform: [{ translate: location }]
      }}
    />
  );
};

export default Planet;
