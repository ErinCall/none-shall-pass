var buster = require("buster");
var Trie = require('../none-shall-pass/trie').Trie;
var assert = buster.referee.assert;

buster.testCase("Tries should support lookup", {
    "add and check for a word": function() {
        var trie = new Trie();
        trie.add("poop");
        assert(trie.has("poop"));
    },
    "add several words and check for them": function() {
        var trie = new Trie();

        trie.add("here's");
        trie.add("my");
        trie.add("story");
        trie.add("sad");
        trie.add("but");
        trie.add("true");

        assert(trie.has("here's"));
        assert(trie.has("my"));
        assert(trie.has("story"));
        assert(trie.has("sad"));
        assert(trie.has("but"));
        assert(trie.has("true"));
    },
    "add several words with addMany and check for them": function() {
        var trie = new Trie();

        trie.addMany(["keep", "away", "from", "runaround", "sue"]);
        assert(trie.has("keep"));
        assert(trie.has("away"));
        assert(trie.has("from"));
        assert(trie.has("runaround"));
        assert(trie.has("sue"));
    }
});
