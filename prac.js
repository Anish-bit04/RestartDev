// Callback-------------------------------------------
// function callname(fn){
//     fn()
// }

// function hello(){console.log("hello")}

// callname(hello)




//Promise (.then)-------------------------------------------------

// function promiseFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('hiiii from setTime')
//             resolve('Successfully resolved')
//         },4000)
//     })
// }

//  promiseFunc().then((value)=>{
//      console.log(value)  
//     console.log('HIIII from then') 
// })

// Promise  (async/await)------------------------------------------

// function normalFun(){
//           return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log('hi there settime')
//                 resolve('Success')
//             },1000)
           
//     })
// }

// async function wrapperFunc() {
//     const value = await normalFun()
//     console.log(value) // Success --  as promise is reloved here
//     console.log('wrapper func')
// }
// wrapperFunc()

