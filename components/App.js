import React, { Component } from 'react';
import { asset, Text, Pano, View, Plane, Sphere } from 'react-vr';

import Planet from './Planet';
import transformHelper from '../utils/transformHelper';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [
        {
          id: 'mercury',
          radius: 8,
          layoutOrigin: [2, 0.5],
          image: 'mercurySurface.jpg',
          location: [0, 0, -150],
          animate: [-0.3, -0.02]
        },
        {
          id: 'venus',
          radius: 15,
          layoutOrigin: [2, -1],
          image: 'venusSurface.jpg',
          location: [0, 0, -250],
          animate: [-0.2, 0.008]
        },
        {
          id: 'earth',
          radius: 20,
          layoutOrigin: [-2, 2],
          image: 'earthSurface.jpg',
          location: [0, 0, -400],
          animate: [-0.02, 0.006],
          rotateX: 45
        },
        {
          id: 'moon',
          radius: 7,
          layoutOrigin: [-2, 2],
          image: 'moonSurface.jpg',
          location: [-35, -10, -390],
          animate: [-0.02, 0.006]
        },
        {
          id: 'mars',
          radius: 17,
          layoutOrigin: [2, -1],
          image: 'marsSurface.jpg',
          location: [0, 0, -600],
          animate: [-0.02, -0.03]
        },
        {
          id: 'asteroid1',
          radius: 7,
          layoutOrigin: [0.5, 0.5],
          image: 'mercurySurface.jpg',
          location: [40000, 0, -750],
          animate: [-20, 0]
        },
        {
          id: 'asteroid2',
          radius: 5,
          layoutOrigin: [0.5, 1],
          image: 'mercurySurface.jpg',
          location: [50000, 0, -775],
          animate: [-20, 0.001]
        },
        {
          id: 'asteroid3',
          radius: 9,
          layoutOrigin: [0.5, -1],
          image: 'mercurySurface.jpg',
          location: [55000, 0, -825],
          animate: [-20, 0]
        },
        {
          id: 'asteroid4',
          radius: 4,
          layoutOrigin: [0.5, -2],
          image: 'mercurySurface.jpg',
          location: [57000, 0, -840],
          animate: [-20, 0]
        },
        {
          id: 'jupiter',
          radius: 70,
          layoutOrigin: [0.5, 1],
          image: 'jupiterSurface.jpg',
          location: [2, -1, -900],
          animate: [-0.01, -0.02]
        },
        {
          id: 'saturn',
          radius: 60,
          layoutOrigin: [0.5, -1],
          image: 'saturnSurface.jpg',
          location: [2, -1, -1280],
          animate: [-0.01, -0.02],
          hasRings: true,
          ringSize: 240,
          ringRotateX: -30,
          ringRotateY: 80
        },
        {
          id: 'uranus',
          radius: 30,
          layoutOrigin: [-0.5, 1],
          image: 'uranusSurface.jpg',
          location: [2, -1, -1510],
          animate: [-0.02, 0.02]
        }
      ]
    };

    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const { planets } = this.state;
    const nextState = planets.map(transformHelper);
    this.setState({ planets: nextState });
    requestAnimationFrame(this.animate);
  }

  render() {
    const planets = this.state.planets.map(a => <Planet key={a.id} data={a} />);
    const ringSize = 240;
    return (
      <View>
        <Pano source={asset('space.jpg')} />
        {planets}
      </View>
    );
  }
}
