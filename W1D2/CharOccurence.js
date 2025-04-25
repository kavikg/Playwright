let browserName ="Chrome browser"
let targetCharacter ='m'
let strLen=browserName.length
let counter=0;
console.log(browserName.charAt(3))
console.log(browserName[2])
console.log(browserName.indexOf('w'))
console.log(browserName.lastIndexOf('e'))
for(let i=0;i<strLen;i++){
  if(browserName.charAt(i)==targetCharacter){
     //counter=counter+1
    counter++
  }

}
console.log(`The occurence of Character ${targetCharacter} is ${counter}`)