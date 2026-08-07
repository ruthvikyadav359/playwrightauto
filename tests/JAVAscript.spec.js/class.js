// class student{

// import console = require("node:console")

//     x = 20
//     studentname = "Raavana"

//     printname(){

//         console.log("shivanna")
//     }

//     add(n1=5,n2=9){

//         console.log(n1)
//         console.log(n2)
//         console.log(n1+n2)
//     }
//     subtract(v1,v2){
//         return v1-v2

//     }

// }

// const stu1 = new student()  ///objects

// console.log(stu1.studentname)

// stu1.add()
// let result = stu1.subtract(55,87)

// console.log(result)

// stu1.printname()


// const stu2 = new student()

// stu2.add(22,5)


//declare constructor in a class
// class student{

//     x = 20
//     studentname = "Raavana"

//     constructor(){

//         console.log("this is constructor")
//     }

//     add(n1=5,n2=9){

//         console.log(n1)
//         console.log(n2)
//         console.log(n1+n2)
//     }
//     subtract(v1,v2){
//         return v1-v2

//     }

// }

// const stu1 = new student()  ///objects
// const stu2 = new student()  

//constructor with parameter

class student{

    x = 20
    studename = "Raavana"

    constructor(name,n1,n2){

        console.log("this is constructor")
        console.log(name)

        console.log(n1*n2)
        console.log(this.studename)
    }

    add(n1=5,n2=9){

        console.log(n1)
        console.log(n2)
        console.log(n1+n2)
    }
    subtract(v1,v2){
        return v1-v2

    }

}

const stu1 = new student("madhu",4,9)  ///objects
const stu2 = new student("chota bheem",25,5)  

