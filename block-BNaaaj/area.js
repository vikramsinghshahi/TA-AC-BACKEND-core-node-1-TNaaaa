function squareArea(s) {
  return s * s;
}

function rectangleArea(l, b) {
  return l * b;
}

function circleArea(r) {
  return 2 * 3.14 * r;
}

module.exports = {
  square: squareArea,
  rectangle: rectangleArea,
  circle: circleArea,
};
