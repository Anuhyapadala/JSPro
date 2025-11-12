let str="learn javascript in 30 days";
let s1=str.split(" ");
let s2=s1.map(word => word.charAt(0).toUpperCase() + word.slice(1))
console.log(s2)

let result = s2.join(" ");
console.log(result); // "Learn Javascript In 30 Days"
