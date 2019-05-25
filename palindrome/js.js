


let palindrom = (str) => (str == str.split("").reverse().join("") ? "Yes, it's palindrome" : "no, it's not palindrome")


console.log(palindrom("1233210"));