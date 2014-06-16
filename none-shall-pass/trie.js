module.exports = (function() {
    var lookup = function(head, rest) {
        if (rest.length === 0) {
            return true;
        } else if (head in this._trie) {
            return this._trie[head].has(rest);
        } else {
            return false;
        }
    };


    var Trie = function Trie(){
        this._trie = {};

        this.add = function(word) {
            var head = word.slice(0,1),
                rest = word.slice(1);

            if (typeof this._trie[head] === 'undefined') {
                this._trie[head] = new this.constructor();
            }

            if (rest.length === 0) {
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
            var head = word.slice(0,1),
                rest = word.slice(1);

            if (head === '0') {
                head = 'o';
            }

            return lookup.call(this, head, rest);
        };
    };

    return {
        'Trie': Trie,
        'LeetTrie': LeetTrie
    };
})();
