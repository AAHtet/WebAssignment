//let payment=[1200,1000,1500]
calculateTip = bill=>{
if (bill>=500 && bill<=4000){
    let firstTip=bill*0.15
   return firstTip
}
else if(bill>4000){
    let secTip=bill*0.2
    return secTip
}
//payment++
}
var Tip1=calculateTip(1200)
var Tip2=calculateTip(1000)
var Tip3=calculateTip(1500)
var Total=Tip1+Tip2+Tip3
console.log(`Total Tip ${Total}`)