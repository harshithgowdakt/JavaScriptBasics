var TrieNode = function () {
    this.children = {};
    this.isWord = false;
}

var Trie = function () {
    this.root = new TrieNode();
}

Trie.prototype.insert = function (word) {
    let curr = this.root;
    for (let char of word) {
        if (!curr.children[char]) {
            curr.children[char] = new TrieNode();
        }
        curr = curr.children[char];
    }
    curr.isWord = true;
}

Trie.prototype.search = function (word) {
    let curr = this.root;
    for (let char of word) {
        if (!curr.children[char]) return false;
        curr = curr.children[char];
    }
    return curr.isWord;
}

Trie.prototype.startsWith = function (prefix) {
    let curr = this.root;

    for (let char of prefix) {
        if (!curr.children[char]) return false;
        curr = curr.children[char]
    }
    return true;
}