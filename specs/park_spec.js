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

    xit('should have a ticket price', function () {

    });

    xit('should have a collection of dinosaurs', function () {

    });

    xit('should be able to add a dinosaur to its collection', function () {

    });

    xit('should be able to remove a dinosaur from its collection', function () {

    });

    xit('should be able to find all dinosaurs of a particular species', function () {

    });

    xit('should be able to remove all dinosaurs of a particular species', function () {

    });

    xit('should be able to find the dinosaur that attracts the most visitors', function () {

    });

});
