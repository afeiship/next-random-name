(function() {
  var nx = require('next-js-core2');
  var NxRandomName = require('../src/next-random-name');

  describe('NxRandomName.methods', function() {
    test('init', function() {
      console.log('boys:', NxRandomName.boys('陈'));
      console.log('girls:', NxRandomName.girls('陈'));
    });

    test('init-random', function() {
      console.log('boys:', NxRandomName.boys());
      console.log('girls:', NxRandomName.girls());
    });
  });
})();
