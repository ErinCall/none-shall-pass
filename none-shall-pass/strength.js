var Trie = require("./trie").Trie;
var commonPasswords = require("./common_passwords").commonPasswords;
var englishWords = require("./english_words").englishWords;

module.exports = (function() {
    var common = new Trie(),
        english = new Trie();

    common.addMany(commonPasswords);
    english.addMany(englishWords);

    var strength = function(word){
        if (common.has(word)) {
            return "common";
        } else if (english.has(word)) {
            return "english";
        } else {
            return "strong";
        }
    };

    return {
        'strength': strength
    };
})();
