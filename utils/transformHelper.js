const transformHelper = planet => {
  const { animate, location } = planet;
  const newLocation = [
    location[0] + animate[0],
    location[1] + animate[1],
    location[2] + 0.2
  ];
  return Object.assign({}, planet, { location: newLocation });
};

export default transformHelper;
