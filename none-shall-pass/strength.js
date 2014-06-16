var Trie = require("./trie").Trie;
var commonPasswords = require("./common_passwords").commonPasswords;

module.exports = (function() {
    var trie = new Trie();

    trie.addMany(commonPasswords);

    var strength = function(word){
        if (trie.has(word)) {
            return "common";
        } else {
            return "strong";
        }
    };

    return {
        'strength': strength
    };
})();
