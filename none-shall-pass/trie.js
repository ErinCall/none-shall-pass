module.exports = (function() {
    var Trie = function(){
        this._trie = {};
        this.add = function(word) {
            var head = word.slice(0,1),
                rest = word.slice(1);

            if (typeof this._trie[head] === 'undefined') {
                this._trie[head] = new Trie();
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

            if (rest.length === 0) {
                return true;
            } else if (head in this._trie) {
                return this._trie[head].has(rest);
            } else {
                return false;
            }
        };

        this.addMany = function(words) {
        };

    };

    return {
        'Trie': Trie
    };
})();
