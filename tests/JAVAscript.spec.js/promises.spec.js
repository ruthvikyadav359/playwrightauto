const result = new Promise((resolve,reject) => {

    const marks = 20
    if (marks>=35) {

        resolve("congrats u have passed")
    } else{
        reject("u have failed")
    }
});

//console.log(result)

result.then(message => console.log(message))
    .catch(message => console.log(message))


    const p2 = Promise.resolve({username:"Admin" , password: "admin123"})
    p2.then(obj => console.log(obj.password))

    const p3 = Promise.reject([1,2,3,4,5,6])
    p3.catch(arr => console.log(arr[4]))