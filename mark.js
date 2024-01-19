const PI = 3.14
// PI = 99.5
const obj = {
    propA:1,
    propB:2
}
// obj = {prop:2}
let n = 'John'
let a = 21

let html = `<b>${n}</b> will be ${a+1} soon`
// console.log(html)
 let p = {
    name:'Jane',
    age:21
}

const personalHtml = `
    <dl>
        <dt>Person info</dt>
        <dd>Name: ${p.name}</dd>
        <dd>Age next birthday: ${p.age + 1}</dd>
    </dl>
`
// console.log(personalHtml)
function totalSal(base, bonus1 = 0.0, bonus2 = 0.0){
    return base + bonus1 + bonus2
}

// console.log(totalSal(100))
// console.log(totalSal(100,20))
// console.log(totalSal(100, undefined, 30))

// function calcRectArea(width, height=width){
//     return width * height
// }

let defHeight = 5
function calcRectArea(width, height=defHeight){
    return width * height
}

// console.log(calcRectArea(5))
function calTriangleArea(width, height=defHeight){
    return 0.5 * width * height
}

// console.log(calTriangleArea(100))

let result = list("Mark","Luna","Zeke","Tala")

function list(heading, ...items){
    let str = `<h3>${heading}</h3>`
    for (let item of items){
        str += `${item}<br>`
    }
    return str
}
// console.log(result)

let nums = [100, 200, 300]
// console.log(...nums)
// console.log(nums[0], nums[1], nums[2])
// let getFullName = (fn,ln) => `${ln}, ${fn}`
let getFullName = function(fn,ln) {
    return `${ln}, ${fn}`
}
// console.log(getFullName('John','Smith'))

function Person(name){
    this.name = name
    setInterval(()=>{
        console.log("hello " + this.name)
    }, 1000)
}

var p1 = new Person('Janet')
