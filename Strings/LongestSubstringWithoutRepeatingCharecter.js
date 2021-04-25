const string = "abccabb"

// Time: O(N^2);
// Space: O(N)

const lengthOfLongestSubstring = function (s) {
    if (s.length <= 1) return s.length;

    let longest = 0;

    for (let left = 0; left < s.length; left++) {
        let seenChars = {}, currentLength = 0;

        for (let right = left; right < s.length; right++) {
            const currentChar = s[right];

            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength);
            } else {
                break;
            }
        }
    }

    return longest;
};

const string = "au"

const lengthOfLongestSubstring2 = function (s) {
    if (s.length <= 1) return s.length;

    const seen = {};
    let left = 0, longest = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const previouslySeenChar = seen[currentChar];

        if (previouslySeenChar >= left) {
            left = previouslySeenChar + 1;
        }

        seen[currentChar] = right;

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
};

console.log(lengthOfLongestSubstring2(string));

