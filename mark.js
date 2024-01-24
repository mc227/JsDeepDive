// // const PI = 3.14
// // // PI = 99.5
// // const obj = {
// //     propA:1,
// //     propB:2
// // }
// // // obj = {prop:2}
// // let n = 'John'
// // let a = 21

// // let html = `<b>${n}</b> will be ${a+1} soon`
// // // console.log(html)
// //  let p = {
// //     name:'Jane',
// //     age:21
// // }

// // const personalHtml = `
// //     <dl>
// //         <dt>Person info</dt>
// //         <dd>Name: ${p.name}</dd>
// //         <dd>Age next birthday: ${p.age + 1}</dd>
// //     </dl>
// // `
// // // console.log(personalHtml)
// // function totalSal(base, bonus1 = 0.0, bonus2 = 0.0){
// //     return base + bonus1 + bonus2
// // }

// // // console.log(totalSal(100))
// // // console.log(totalSal(100,20))
// // // console.log(totalSal(100, undefined, 30))

// // // function calcRectArea(width, height=width){
// // //     return width * height
// // // }

// // let defHeight = 5
// // function calcRectArea(width, height=defHeight){
// //     return width * height
// // }

// // // console.log(calcRectArea(5))
// // function calTriangleArea(width, height=defHeight){
// //     return 0.5 * width * height
// // }

// // // console.log(calTriangleArea(100))

// // let result = list("Mark","Luna","Zeke","Tala")

// // function list(heading, ...items){
// //     let str = `<h3>${heading}</h3>`
// //     for (let item of items){
// //         str += `${item}<br>`
// //     }
// //     return str
// // }
// // // console.log(result)

// // let nums = [100, 200, 300]
// // // console.log(...nums)
// // // console.log(nums[0], nums[1], nums[2])
// // // let getFullName = (fn,ln) => `${ln}, ${fn}`
// // let getFullName = function(fn,ln) {
// //     return `${ln}, ${fn}`
// // }
// // // console.log(getFullName('John','Smith'))

// // function Person(name){
// //     this.name = name
// //     setInterval(()=>{
// //         console.log("hello " + this.name)
// //     }, 1000)
// // }

// // var p1 = new Person('Janet')
// // let arr = [1,2,3]

// // let [a,b,c,d] = arr

// // // let a = arr[0]
// // // let b = arr[1]
// // // let c = arr[2]

// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(d)

// // let [a,b] = [1,2,3]
// // console.log(a)
// // console.log(b)

// let [elem0, elem1, ...others] = [10,20,30,40]
// console.log(elem0)
// console.log(elem1)
// console.log(others.length)
// console.log(others[0])
// console.log(others[1])

// let {x, y, z} = {x:10, y:20, z:30}
// console.log(x, y, z)

// let {x:h, y:w, z:d} = {x:10, y:20, z:30}
// console.log(h, w, d)

// function f1(obj) {
//     let {x,y} = obj
//     console.log(x,y)
// }

// f1({
//     x:100,
//     y:200,
//     z:300,
//     forColor: 'red'
// })

// let [http='80', https='443'] = []
// console.log(http, https)

// let {x=0, y=0, z=0} = {x: 100, y:200}
// console.log(x,y,z)

// function displayPoint({x,y,z}){
//     console.log(x,y,z)
// }

// displayPoint({x:10,y:20,z:30})

// function displayPoint(obj) {
//     let x = obj.x
//     let y = obj.y
//     let z = obj.z
    
//     console.log(x, y, z)
// }

// displayPoint({x:10,y:20,z:30})

// function displayPoint({x=0, y=0,z=0}) {
//     console.log(x,y,z)
// }

// displayPoint({x:10, z:30})

// function displayPoint({x:h=0, y:w=0,z:d=0}) {
//     console.log(h,w,d)
// }

// displayPoint({x:10, z:30})

// function displayPoint({x=0,y=0,z=0}={x:1,y:2,z:3}){
//     console.log(x,y,z)
// }

// displayPoint({x:10,z:30})
// displayPoint({})
// displayPoint()

// function convertEuros(euroAmount) {
//     return {
//         usd: euroAmount * 1.17,
//         gbp: euroAmount * 0.89,
//         nok: euroAmount * 9.27
//     }
// }

// let allAmounts = convertEuros(100)
// let {usd, gbp, nok} = convertEuros(100)

// console.log(usd)

let num1 = 0o74
// console.log(num1)
let num2 = 0b111100
// console.log(num2)
let num3 = 0x3C
// console.log(num3)
// console.log(Number.isInteger(1234))
// console.log(Number.isInteger(3.14))
// console.log(Number.isNaN(0/0))
// console.log(Number.isNaN('wibble'))
// console.log(Number.isNaN(1234))
let n = Math.pow(2,53)
// console.log(Number.isSafeInteger(n))
// console.log(Number.isSafeInteger(n-1))
// const s = 'dog'
// for (const c of s) {
//     console.log(c)
// }

// const s = "Llanfairpwll"

// console.log(s.includes('lan'))
let s = 'The cat sat on the mat'

let r1 = s.search(/.at/)
console.log(r1)