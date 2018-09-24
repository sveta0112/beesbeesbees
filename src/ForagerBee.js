var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};
ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(foundTreasure){
  if(this.age === 40){
  	return 'I am too old, let me play cards instead';
  }	
  this.treasureChest.push(foundTreasure);
};


