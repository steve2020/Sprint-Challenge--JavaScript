// Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(props) {
//   this.length = props.length;
//   this.width = props.width;
//   this.height = props.height;
// }

// CuboidMaker.prototype.volume = function() {
//   return this.length * this.width * this.height;
// };

// CuboidMaker.prototype.surfaceArea = function() {
//   return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// };

class CuboidMaker {
  constructor(props) {
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/

class CubeMaker extends CuboidMaker {
  constructor(props) {
    super(props);
  }
  surfaceArea() {
    return 6 * (this.length * this.length);
  }
  //volume formula is the same as cuboid
}

const cube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4
});

console.log(cube.surfaceArea());
console.log(cube.volume());