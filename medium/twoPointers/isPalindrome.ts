function isPalindrome(s: string): boolean {
    const n = s.length;
    let left = 0;
    let right = n-1;
    while (left < right) {
        while (left < right && !isAlnum(s[left])) {
            left++;
        }
        while (left < right && !isAlnum(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }
    return true;
};

function isAlnum(char) {
  return /^[a-zA-Z0-9]$/.test(char);
}
