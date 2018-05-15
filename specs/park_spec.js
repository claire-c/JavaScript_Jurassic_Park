const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let velociraptor;
  let trex;
  let stegosaurus;
  let dinosaurs;

  beforeEach(function () {
    trex = new Dinosaur('t-rex', 'carnivore', 50);
    velociraptor = new Dinosaur('velociraptor', 'carnivore', 100);
    stegosaurus = new Dinosaur('stegosaurus', 'herbivore', 25);
    dinosaurs = [trex, velociraptor];
    park = new Park("Jurassic Park", 5, dinosaurs);
  })

    it('should have a name', function () {
      const actual = park.name;
      assert.strictEqual(actual, "Jurassic Park");
    });

    it('should have a ticket price', function () {
      const actual = park.ticketPrice;
      assert.strictEqual(actual, 5);
    });

    it('should have a collection of dinosaurs', function () {
      const actual = park.dinosaurs.length;
      assert.strictEqual(actual, 2);
    });

    it('should be able to add a dinosaur to its collection', function () {
      park.addDinosaur(stegosaurus);
      const actual = park.dinosaurs.length;
      assert.strictEqual(actual, 3);
    });

    it('should be able to remove any dinosaur from its collection', function () {
      park.removeDinosaur();
      const actual = park.dinosaurs.length;
      assert.strictEqual(actual, 1);
    });

    it('should be able to find all dinosaurs of a particular species', function () {
      let tyrannosaur = new Dinosaur('t-rex', 'carnivore', 50);
      park.addDinosaur(tyrannosaur);
      const actual = park.findAllBySpecies('t-rex').length;
      assert.strictEqual(actual, 2);
    });

    it('should be able to remove all dinosaurs of a particular species', function () {
      let tyrannosaur = new Dinosaur('t-rex', 'carnivore', 50);
      park.addDinosaur(tyrannosaur);
      park.removeSpecificDinosaur('t-rex');
      const actual = park.dinosaurs.length;
      assert.strictEqual(actual, 1);
    });

    it('should be able to find the dinosaur that attracts the most visitors', function () {
      const actual = park.mostPopularDinosaur();
      assert.deepStrictEqual(actual, velociraptor);
    });

    it('should be able to get total daily visitors', function(){
      const actual = park.dailyVisitors();
      assert.strictEqual(actual, 150);
    });

    it('should be able to get total annual visitors', function(){
      const actual = park.annualVisitors();
      assert.strictEqual(actual, 54750);
    });

    it('should be able to get annual revenue', function(){
      const actual = park.annualRevenue();
      assert.strictEqual(actual, 273750);
    });

    it('should be able to list diet types with number of dinosaurs', function(){
      park.addDinosaur(stegosaurus);
      const actual = park.listDietTypes();
      assert.deepStrictEqual(actual, { 'carnivore': 2, 'herbivore': 1, 'omnivore': 0 })
    })

});
