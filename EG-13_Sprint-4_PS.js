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



// 03.Find the Difference

var findTheDifference = function (s, t) {
    let count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return char;
        count[char]--;
    }
};

console.log(findTheDifference("abcd", "abcde"));



// 04. Reverse Linked List

var reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
};

// Create Linked List
let head = { val: 1, next: null };
head.next = { val: 2, next: null };
head.next.next = { val: 3, next: null };
head.next.next.next = { val: 4, next: null };
head.next.next.next.next = { val: 5, next: null };

let result = reverseList(head);

// Print result
let output = [];
while (result) {
    output.push(result.val);
    result = result.next;
}

console.log(output);