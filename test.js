function isPalindrome(word) {
    if(typeof word !== "string") return console.log("Input harus String")
    let reverseWord = word.split("").reverse().join("");

    if (reverseWord === word) {
        return console.log("Palindrom")
    }
    return console.log("Bukan Palindrom")

}

let word1 = "malam";
let word2 = "haloo";
let word3=123

isPalindrome(word1);
isPalindrome(word2);
isPalindrome(word3);
