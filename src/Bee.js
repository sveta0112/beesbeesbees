var Bee = function() {
  Grub.call(this);//this--> Bee
  //before: {age: 0, color: "pink", food: "jelly"}
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  //after:{age: 5, color: "yellow", food: "jelly", job: "keep on growing"}
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;


