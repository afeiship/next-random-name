(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxRandom = nx.random || require('next-random');
  var NX_CONST_FAMILY_NAME = nx.constFamilyName || require('next-const-family-name');
  var NX_CONST_GIVEN_NAME = nx.constGivenName || require('next-const-given-name');
  var len1 = NX_CONST_FAMILY_NAME.length;
  var lenBoy_1 = NX_CONST_GIVEN_NAME.boys.single.length;
  var lenBoy_2 = NX_CONST_GIVEN_NAME.boys.double.length;
  var lenGirl_1 = NX_CONST_GIVEN_NAME.girls.single.length;
  var lenGirl_2 = NX_CONST_GIVEN_NAME.girls.double.length;

  var NxRandomName = nx.declare('nx.RandomName', {
    statics: {
      'boys,girls': function(inName) {
        return function(inFamilyName) {
          var sLen = NX_CONST_GIVEN_NAME[inName].single.length;
          var dLen = NX_CONST_GIVEN_NAME[inName].double.length;
          var fName = inFamilyName || NX_CONST_FAMILY_NAME[nx.random(0, len1)];
          var givenName = NX_CONST_GIVEN_NAME[inName].single[nx.random(0, sLen)];
          var givenName2 = NX_CONST_GIVEN_NAME[inName].double[nx.random(0, dLen)];
          return [fName + givenName, fName + givenName2];
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRandomName;
  }
})();
