'use strict';

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    return this.step;
  },
};
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
console.log(ladder.up().up().down().showStep());
