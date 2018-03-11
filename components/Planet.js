import React from 'react';
import { asset, Sphere, View, Image } from 'react-vr';

const Planet = props => {
  const {
    hasRings,
    layoutOrigin,
    location,
    image,
    radius,
    ringSize,
    ringRotateX,
    ringRotateY,
    rotateX,
    rotateY,
    rotateZ
  } = props.data;

  return (
    <View>
      {hasRings && (
        <Image
          source={asset('saturnRings.png')}
          style={{
            position: 'relative',
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translate: location },
              { rotateY: ringRotateY },
              { rotateX: ringRotateX }
            ],
            height: ringSize,
            width: ringSize,
            backgroundColor: 'blue',
            borderRadius: ringSize / 2
          }}
        />
      )}
      <Sphere
        radius={radius}
        widthSegments={500}
        heightSegments={500}
        texture={asset(image)}
        style={{
          position: 'absolute',
          layoutOrigin,
          transform: [
            { translate: location },
            { rotateX: rotateX || 0 },
            { rotateY: rotateY || 0 },
            { rotateZ: rotateZ || 0 }
          ]
        }}
      />
    </View>
  );
};

export default Planet;
