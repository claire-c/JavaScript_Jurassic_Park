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

    xit('should be able to remove any named dinosaur from its collection', function (){

    });

    xit('should be able to find all dinosaurs of a particular species', function () {

    });

    xit('should be able to remove all dinosaurs of a particular species', function () {

    });

    xit('should be able to find the dinosaur that attracts the most visitors', function () {

    });

});
