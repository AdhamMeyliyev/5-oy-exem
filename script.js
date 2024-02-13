// function isPalindrome(str) {
//     // Suzlarni kichik harflarga o'tkazish
//     const lowerCaseStr = str.toLowerCase();
    
//     // Suzlardan faqat alifbodagi harflarni olib tashlash
//     const lettersOnly = lowerCaseStr.replace(/[^a-z]/g, '');
    
//     // Suzning ortidan boshlab va so'ngidan o'qiqlarni solishtirish
//     const reversed = lettersOnly.split('').reverse().join('');
    
//     // Palendromlikni tekshirish
//     return lettersOnly === reversed;
//   }
  
//   // Test qilish
//   console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
//   console.log(isPalindrome("Hello, World!")); // false
  

// function isPalindrome(str) {
//     // Suzlarni kichik harflarga o'tkazish
//     const lowerCaseStr = str.toLowerCase();
    
//     // Suzlardan faqat alifbodagi harflarni olib tashlash
//     const lettersOnly = lowerCaseStr.replace(/[^a-z]/g, '');
    
//     // Suzning ortidan boshlab va so'ngidan o'qiqlarni solishtirish
//     const reversed = lettersOnly.split('').reverse().join('');
    
//     // Palendromlikni tekshirish
//     return lettersOnly === reversed;
//   }
  
//   // Test qilish
//   console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
//   console.log(isPalindrome("Hello, World!")); // false

const isPalindrome = str =>
  (cleanStr => cleanStr === cleanStr.split('').reverse().join(''))(
    str.toLowerCase().replace(/[^a-z]/g, '')
  );

// Test qilish
console.log(isPalindrome("kiyik")); // true
console.log(isPalindrome("Hello, World!")); // false

  