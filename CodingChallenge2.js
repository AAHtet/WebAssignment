
let aAungMass=20
let aAungHeight=7
let mMaungMass=25
let mMaungHeight=6
let aAungBMI=aAungMass/aAungHeight**2
let mMaungBMI=mMaungMass/mMaungHeight**2
//IF STATEMENT
/*
if(aAungBMI>mMaungBMI){
       console.log("true")
}

else
{console.log("false")}
*/

//TERNARY OPERATOR
/*
let terOpe=aAungBMI>mMaungBMI? "true":"false"
console.log(terOpe)
*/

//SWITCH
let comPar=aAungBMI>mMaungBMI
switch(comPar){
    case aAungBMI>mMaungBMI:
    console.log("true")
    break;
    case aAungBMI<mMaungBMI:
    console.log("false")
break;
default:"No Compare"
}
