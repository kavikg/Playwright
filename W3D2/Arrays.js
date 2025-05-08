let browsername=['chrome','webkit','firefox','opera','msedge']
//length of the array
console.log(browsername.length)
console.log(browsername[4])
console.log(browsername[5])
//Add Value to Array
browsername[6]='safari'
console.log(browsername)
console.log(browsername.length)
browsername[5]=7
browsername[7]=true
console.log(browsername)
console.log(browsername.length)
console.log(typeof(browsername))
//Add First Value to Array
browsername.unshift('KG');
console.log(browsername)
//Add Last value to Array
browsername.push(285035)
console.log(browsername)
//Remove first value from the Array
browsername.shift();
console.log(browsername)
//Remove Last value from the Array
browsername.pop();
console.log(browsername)


// Mixed Arrays
// Add 2 Arrays --> ..a1
let a1=[1,true,'playwright','json',8]
let a2=['chrome','msedge',...a1]
console.log(a2.length)

//Nested array or Multiple Arrays
let d = ['ab',false,170,['KG','JS']]
console.log(d.length)
console.log(d[3])