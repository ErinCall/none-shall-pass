/*jslint node: true */
'use strict';

var buster = require("buster");
var trielib = require('../none-shall-pass/trie'),
    Trie = trielib.Trie,
    LeetTrie = trielib.LeetTrie;
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
    },
    "subwords are not members of a trie": function() {
        var trie = new Trie();

        trie.add("bolt");
        assert(! trie.has("b"));
        assert(! trie.has("bo"));
        assert(! trie.has("bol"));
        assert(trie.has("bolt"));
    }
});

buster.testCase("LeetTries should support leet lookup", {
    "look up a leet version of a word": function() {
        var trie = new LeetTrie();

        trie.add("house");
        assert(trie.has("h0use"));
        assert(trie.has("|-|()|_|53"));
    },
    "leet characters can still be found in their literal form": function() {
        var trie = new LeetTrie();

        trie.add('take1pill');
        assert(trie.has('take1pill'));
    }
});
