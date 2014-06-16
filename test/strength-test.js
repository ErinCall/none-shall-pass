var buster = require("buster");
var assert = buster.referee.assert;
var strength = require('../none-shall-pass/strength').strength;

buster.testCase("Test password strength", {
    "very common password": function() {
        assert.equals(strength("password"), "common");
    },
    "very strong password": function() {
        assert.equals(
            strength("Goi_lee4el1Xei/poug4Roo^eeM3derbei0Cae(aeQu5pu#"),
           "strong"
        );
    }
});
