// Use of double quotes:
//"I was born in Virginia"
//"I've lived in 4 states"
//"I like Indiana"

// Use of single quotes:
//'Single quotes are better in my humble opinion'
//'They require less keystrokes'
//'Example text.'

// Nesting single inside double:
//"This is 'super' awesome"


// Nesting double inside single:
//'Jay said, "I am so excited for lunch!"'
//"The use of \"\""

let tweet = 'Kanye is broke. No joke!'

console.log(tweet.length)
let upperTweet = tweet.toUpperCase()
console.log(upperTweet)

let lowerTweet = tweet.toLowerCase()
console.log(lowerTweet)
let name = 'Andrew Gunst'
let art = 'EMINEM'
console.log(name.toUpperCase(), art.toLowerCase())

//Targeting specific characters in a string using indexing:

let first = 'quincy'
let last = 'williams'
let upperFirst = first[0].toUpperCase() + first.substring(1)
let upper = first[0].toUpperCase().concat(first.slice(1))

console.log(upperFirst)
console.log(upper)
console.log(first[0].toUpperCase())
console.log(last)