//static

// class employee{

//     static stuname = "madhu"

//     static printName(){
//         console.log("ramraj")
//     }
// }

// console.log(employee.stuname)

// employee.printName()


//both static and non-static

// class ABC {

//     x = 20
//     static y = 40

//     m1(){
//         console.log("this is non=static method")
//     }

//     static m2(){

//         console.log("this is static method")
//     }
// }

// const abc1=new ABC

// abc1.m1()

// ABC.m2()

// this keyword- use only for non static method
// static keyword to be used only within static only
// class XYZ{        

//     x = 20

//     y = 40

//    static numm = "sumaan" 

//     m1(){
//         console.log("this is non=static method")
//         console.log(this.x)
     
//     }

//     m2(){

//          console.log("this is non- static method")
//     }

//     static m3(){

//          console.log("this is static method m3")
//     }

//     static m4(){

//         this.m3()

//          console.log("this is static method m4")

//          console.log(this.numm)
//     }


// }

// const xy = new XYZ()
// xy.m1()

// XYZ.m4()

// Encapsulation

// class A{

//     name;

//     printname(value){
        
//         this.name = value     // this method is called a setter method
        
//     }

//     printmessage(){

//         console.log("hi gud morning : "+ this.name)
//     }
// }

// const a1 = new A()

// a1.printname("maachi")
// a1.printmessage()

//Multi-level inheritance

// class A{


//     m1(){
//         console.log("This is M1")
//     }

//     m2(){
//         console.log("This is M2")
//     }
// }

// class B extends A{


//     m3(){
//         console.log("This is M3")
//     }

//     m4(){
//         console.log("This is M4")
//     }
// }

// class C extends B{


//     m5(){
//         console.log("This is M5")
//     }

//     m6(){
//         console.log("This is M6")
//     }
// }

// const b1 =  new C()
// b1.m1()//parent
// b1.m4() //child

// b1.m5()

// polymorphism
// class A{


//     m1(){
//         console.log("This is M1 from parent")
//     }

//     m2(){
//         console.log("This is M2")
//     }

//     add(n1,n2){

//         console.log(n1+n2)
//     }
// }

// class B extends A{


//     m1(){
//         console.log("This is M1 from child")
//     }

//     m2(){
//         console.log("This is M4")
//     }

//     add(n1,n2,n3){

//         console.log(n1+n2+n3)
//     }
// }

// const b1 = new B()
// b1.m1()// this is called as method overriding

// b1.add(6,9,5)// method overriding

// const a1 = new A()
// a1.add(3,5,5)// this is method overloading


//prototyping

class A{
 
    v1 = 30
    v2 = 40

    m1(){
        console.log("This is M1 from parent")
    }

    m2(){
        console.log("This is M2")
    }

    
}

 A.prototype.m3=function(){
         console.log("This is M3")
     }

A.prototype.v3 = 67
const a1  = new A



console.log(a1.v3)

a1.m3()

const a2  = new A
console.log(a1.v3)

a2.v3