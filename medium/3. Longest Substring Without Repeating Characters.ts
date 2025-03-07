function lengthOfLongestSubstring(s: string): number {
    const charSet = new Set();
    let max = 0;
    // For sliding window approach
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]); // Remove leftmost character
            left++; // Move left pointer forward
        }
        charSet.add(s[right]);
        max = Math.max(max, right - left + 1);
    }

    return max;
}
