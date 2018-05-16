const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur){
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(){
  this.dinosaurs.pop();
};

Park.prototype.findAllBySpecies = function(species){
  const allDinosaurs = [];
  for (const dinosaur of this.dinosaurs){
      if (dinosaur.species === species) allDinosaurs.push(dinosaur);
  };
  return allDinosaurs;
};

Park.prototype.removeSpecificDinosaur = function(species){
  const allDinosaurs = [];
  for (const dinosaur of this.dinosaurs){
      if (dinosaur.species !== species) allDinosaurs.push(dinosaur);
  };
  this.dinosaurs = allDinosaurs;
}

// Park.prototype.mostPopularDinosaur = function(){
//   let sortedDinosaurs = this.sortDinosaurs();
//   return sortedDinosaurs.pop();
// };
//
// Park.prototype.sortDinosaurs = function(){
//   return this.dinosaurs.sort(compareDinosaurs);
// };
//
// Park.prototype.compareDinosaurs = function(a, b){
//   return a.guestsAttractedPerDay - b.guestsAttractedPerDay;
// };


Park.prototype.mostPopularDinosaur = function(){
let dinosaurVisitors = 0;
let mostPopularDinosaur = null;
for (const dinosaur of this.dinosaurs){
  if( dinosaur.guestsAttractedPerDay > dinosaurVisitors )
  mostPopularDinosaur = dinosaur;
  }
return mostPopularDinosaur;
};

Park.prototype.dailyVisitors = function(){
  let dailyVisitors = 0;
  for (const dinosaur of this.dinosaurs){
    dailyVisitors += dinosaur.guestsAttractedPerDay;
  }
  return dailyVisitors;
};

Park.prototype.annualVisitors = function(){
  let dailyVisitors = this.dailyVisitors();
  let annualVisitors = (dailyVisitors * 365);
  return annualVisitors;
};

Park.prototype.annualRevenue = function(){
  let annualVisitors = this.annualVisitors();
  let annualRevenue = (annualVisitors * this.ticketPrice);
  return annualRevenue;
};

Park.prototype.listDietTypes = function(){
  var dietTypes = { 'carnivore':0, 'herbivore':0, 'omnivore':0 };

  for (const dinosaur of this.dinosaurs){
    if( dinosaur.diet === 'carnivore' ){
    dietTypes.carnivore += 1;
  }
    else if ( dinosaur.diet === 'herbivore' ){
      dietTypes.herbivore += 1;
    }
    else {
      dietTypes.omnivore += 1;
    }
  }
  return dietTypes;
};


module.exports = Park;
