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

// console.log(isIsomorphic("egg", "add"));




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

// console.log(wordPattern("abba", "dog cat cat dog"));



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

// console.log(findTheDifference("abcd", "abcde"));


// 04. Reverse Linked List

var reverseList = function (head) {
    return head.reverse();
};

let head1 = [1, 2, 3, 4, 5];

// console.log(reverseList(head1));



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

// let head = [1, 2, 3, 4, 5];

// console.log(middleNode(head));


// 06. Product of Array Except Self

var productExceptSelf = function (nums) {
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

// console.log(productExceptSelf([1, 2, 3, 4]));



// 07. Remove Nth Node From End of List

var removeNthFromEnd = function (head, n) {
    let length = head.length;
    let index = length - n;

    head.splice(index, 1);

    return head;
};

// console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));



// 08. Find First and Last Position of Element in Sorted Array

var searchRange = function (nums, target) {
    let start = -1;
    let end = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (start === -1) {
                start = i;
            }

            end = i;
        }
    }

    return [start, end];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));



// 09. Permutation in String 

var checkInclusion = function (s1, s2) {
    for (let i = 0; i <= s2.length - s1.length; i++) {
        let part = s2.substring(i, i + s1.length);

        if (part.split('').sort().join('') === s1.split('').sort().join('')) {
            return true;
        }
    }

    return false;
};

// console.log(checkInclusion("ab", "eidbaooo"));



// 10. Find All Anagrams in a String 

var findAnagrams = function(s, p) {
    let result = [];
    let sortedP = p.split('').sort().join('');

    for (let i = 0; i <= s.length - p.length; i++) {
        let part = s.substring(i, i + p.length);

        if (part.split('').sort().join('') === sortedP) {
            result.push(i);
        }
    }

    return result;
};

// console.log(findAnagrams("cbaebabacd", "abc"));