function kyawLMark(m1,m2,m3){
var kyawResult=(m1+m2+m3)/3
return kyawResult
//console.log(`Kyaw Kyaw\'s Score ${kyawResult}`)
}



function mgLMark(m1,m2,m3){
    var mgResult=(m1+m2+m3)/3
return mgResult
   //console.log(`Mg Mg\'s Score ${mgResult}`)
    }


var kyaw=kyawLMark(96,108,89)
var mg=mgLMark(88,91,110)
console.log("Kyaw Kyaw's Final Score| " + kyaw)
console.log("Mg Mg's Final Score| "+ mg)

var finalResult=mg>kyaw? "Winner is Mg Mg" : "Winner is Kyaw Kyaw"
console.log(finalResult)
