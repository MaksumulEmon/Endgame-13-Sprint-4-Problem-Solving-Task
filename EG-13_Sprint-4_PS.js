
var isIsomorphic = function(s, t) {
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