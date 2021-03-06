// Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers),
// which it should save to properties of the same name.
// Give the Vector prototype two methods, "plus" and "minus", that take another vector as a parameter and return a new
// vector that has the sum or difference of the two vectors' (the one in "this" and the parameter) x and y values.
// Add a getter property "length" to the prototype that computes the length of the vector -- that is, the distance of
// the point (x, y) from the origin (0, 0).

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(anotherVector) {
  return new Vector((this.x + anotherVector.x), (this.y + anotherVector.y));
}

Vector.prototype.minus = function(anotherVector) {
  return new Vector ((this.x - anotherVector.x), (this.y - anotherVector.y));
}

Vector.prototype = {
  get length() {
    var a = Math.pow((this.x - 0), 2);
    var b = Math.pow((this.y - 0), 2);
    var distance = Math.sqrt(a + b);
    return distance;
  }
};
