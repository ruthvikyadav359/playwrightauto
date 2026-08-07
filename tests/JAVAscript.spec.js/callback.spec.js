// setTimeout(function(){

//     console.log("ramkrisna")

// },5000)

// setTimeout(function(){

//     console.log("rajesh")

// },2000)

// setTimeout(function(){

//     console.log("vittala")

// },3000)






//setTimeout(function , timeout)


function printNameMadhu(){

    console.log("Madhu")
}

function printNameDibbanna(){
    console.log("Dibbanna")
}
function printNameLaxmi(){
    console.log("laxmi")
}

function GreetMessage(callback){
    console.log("hi gud morning")

    callback()
}

GreetMessage(printNameDibbanna)

