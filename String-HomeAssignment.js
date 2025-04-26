let str="   fly me   to   the moon  "
let a=str.trim().split(' ').pop()
console.log(a)
console.log("length of the string is " +a.length)


function isanagram(str1,str2){
let cstr1= str1.replace(/\s+/g,'').toLowerCase()
let cstr2= str2.replace(/\s+/g,'').toLowerCase()

return cstr1.split('').sort().join('')==cstr2.split('').sort().join('')

}

console.log(isanagram("Below","Hello world"))
console.log(isanagram("Below","ElBow"))
console.log(isanagram("conversation","voices rant on"))