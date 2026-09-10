// 01. Isomorphic Strings

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let mapST = {};
    let mapTS = {};

    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];

        if (mapST[a] && mapST[a] !== b) {
            return false;
        }

        if (mapTS[b] && mapTS[b] !== a) {
            return false;
        }

        mapST[a] = b;
        mapTS[b] = a;
    }

    return true;
};

console.log(isIsomorphic("egg", "add"));




// 02. Word Pattern
var wordPattern = function (pattern, s) {
    let words = s.split(" ");
    if (pattern.length !== words.length) return false;

    let map = {};

    for (let i = 0; i < pattern.length; i++) {
        if (map[pattern[i]] && map[pattern[i]] !== words[i]) {
            return false;
        }
        map[pattern[i]] = words[i];
    }

    return new Set(Object.values(map)).size === Object.keys(map).length;
};

console.log(wordPattern("abba", "dog cat cat dog"));