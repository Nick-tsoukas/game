var assert = require("assert"); // core module
var S = require('../cash.js'); // our module

describe('Module S', function() {
  describe('S.sum', function() {
    it('should return the sum of two nubers', function() {
      assert.equal(S.sum(20, 10), 30);
    })
  })
  describe('S data type of', function() {
    it('should be an Object', function() {
    assert.equal(typeof S, 'object');
    })
  })
});
// describe('Cash Register', function(){
//   describe('Module C', function(){
//     it('should have a getChange Method', function(){
//       assert.equal(typeof C, 'object');
//       assert.equal(typeof C.getChange, 'function');
//     })
//     it('getChange(486,1000) should equal [...]', function() {
//       assert.deepEqual(C.getChange(486,1000), [500,10,2,2]);
//     })
//   })
// });
//
//
// it('getChange(486,1000) should equal [500, 10, 2, 2]', function(){
//     assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
// })
// var assert = require('assert');
//
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     })
//   })
// })
