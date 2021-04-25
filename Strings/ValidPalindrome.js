const string = "A man, a plan, a canal: Panama"

const isValidPalindrome = function (s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // initialize left/right pointers at start and end of string respectively
    let left = 0; right = s.length - 1;

    // loop through string characters while comparing them, then move the pointers closer to the center
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }

        left++;
        right--;
    }

    return true;
};

console.log(isValidPalindrome(string));

var validPalindrome = function (s) {
    let start = 0; let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
        }
        start++;
        end--;
    }
    return true;
};

var validSubPalindrome = function (s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};
