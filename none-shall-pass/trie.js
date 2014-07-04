/*jslint node: true */
'use strict';

var leetSubstitutions = require('./leet_substitutions');

var lookup = function(head, rest) {
    head = head.toLowerCase();

    if (head in this._trie) {
        if (rest === '') {
            return this._trie[head]._terminates;
        } else {
            return this._trie[head].has(rest);
        }
    } else {
        return false;
    }
};

var Trie = function Trie(){
    this._trie = {};
    this._terminates = false;

    this.add = function(word) {
        var head = word.slice(0,1).toLowerCase(),
            rest = word.slice(1).toLowerCase();

        if (typeof this._trie[head] === 'undefined') {
            this._trie[head] = new this.constructor();
        }

        if (rest.length === 0) {
            this._trie[head]._terminates = true;
            return;
        } else {
            this._trie[head].add(rest);
        }
    };

    this.has = function(word) {
        var head = word.slice(0,1),
            rest = word.slice(1);
        return lookup.call(this, head, rest);
    };

    this.addMany = function(words) {
        for (var i=0; i < words.length; i++) {
            this.add(words[i]);
        }
    };
};

var LeetTrie = function LeetTrie() {
    Trie.call(this);
    this.has = function(word) {
        var head, rest;

        for (var metachar in leetSubstitutions) {
            if (! leetSubstitutions.hasOwnProperty(metachar)) {
                continue;
            }
            if (word.slice(0, metachar.length) === metachar) {
                var heads = leetSubstitutions[metachar];
                rest = word.slice(metachar.length);

                for (var i=0; i < heads.length; i++) {
                    head = heads[i];

                    if (lookup.call(this, head, rest)) {
                        return true;
                    }
                }
            }
        }
        head = word.slice(0,1);
        rest = word.slice(1);

        return lookup.call(this, head, rest);
    };
};

module.exports = {
    'Trie': Trie,
    'LeetTrie': LeetTrie
};
