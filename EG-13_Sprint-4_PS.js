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
    return head.reverse();
};

let head1 = [1, 2, 3, 4, 5];

console.log(reverseList(head1));



// 05. Middle of the Linked List
var middleNode = function (head) {
    let slow = 0;
    let fast = 0;

    while (fast < head.length - 1) {
        slow++;
        fast += 2;
    }

    return head.slice(slow);
};

let head = [1, 2, 3, 4, 5];

console.log(middleNode(head));


// 06. Product of Array Except Self

var productExceptSelf = function(nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }

        result.push(product);
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));