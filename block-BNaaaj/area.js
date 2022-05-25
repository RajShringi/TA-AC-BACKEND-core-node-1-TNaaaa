function areaOfSquare(n) {
  return n * n;
}

function areaOfTriangle(h, b) {
  return (1 / 2) * h * b;
}

function areaOfCircle(r) {
  return 3.14 * r * r;
}

module.exports = { areaOfSquare, areaOfTriangle, areaOfCircle };
