/*jslint node: true */
'use strict';

var Trie = require("./trie").Trie;
var commonPasswords = require("./common_passwords").commonPasswords;
var englishWords = require("./english_words").englishWords;

module.exports = (function() {
    var common = new Trie(),
        english = new Trie(),
        checks;

    common.addMany(commonPasswords);
    english.addMany(englishWords);

    checks = [
        ["common", function(word) {
            return common.has(word);
        }],
        ["english", function(word) {
            return english.has(word);
        }]
    ];

    var strength = function(word) {
        for (var i=0; i < checks.length; i++) {
            if (checks[i][1](word)) {
                return checks[i][0];
            }
        }
        return "strong";
    };

    return {
        'strength': strength
    };
})();
