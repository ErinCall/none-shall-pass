/*jslint node: true */
'use strict';

var trielib = require("./trie"),
    Trie = trielib.Trie,
    LeetTrie = trielib.LeetTrie;
var commonPasswords = require("./common_passwords").commonPasswords;
var englishWords = require("./english_words").englishWords;

module.exports = (function() {
    var common = new Trie(),
        english = new Trie(),
        leet = new LeetTrie(),
        checks;

    common.addMany(commonPasswords);
    english.addMany(englishWords);
    leet.addMany(englishWords);
    leet.addMany(commonPasswords);

    checks = [
        ["short", function(word) {
            return word.length <= 7;
        }],
        ["common", function(word) {
            return common.has(word);
        }],
        ["english", function(word) {
            return english.has(word);
        }],
        ["leet",    function(word) {
            return leet.has(word);
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
