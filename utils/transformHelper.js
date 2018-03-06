const transformHelper = (oldState, x, y) => {
  const newLocation = [
    oldState.location[0] + x,
    oldState.location[1] + y,
    oldState.location[2] + 0.2
  ];
  return Object.assign({}, oldState, { location: newLocation });
};

export default transformHelper;
