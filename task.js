// let firsObj ={name : 'hello'};
// let secobj = firsObj;
// firsObj ={name:'bye'};
// console.log(secobj.name)

let lala = (str) =>{
    return str[0].toUpperCase() + str.substring(1)
}

console.log(lala('lalal'))

let obj = {
    sayHi(){
        return 'hello'
    }
}

let o = obj.sayHi.call(obj)
console.log(o)

const arr = [1,'',null]
 const arr2 = arr.filter((element)=>element !== null && element !== '' )
 console.log(arr2)

 let la =(str)=>{
 let a = str.split('')
 let b = a.reverse().join('')
 if(str === b){
     return ' success'
 }else{
     return ' error'
 }
 }

 console.log(la('12321'))

 const arry = ['Alex','Yan','ALex','Vlad','Zina']
 const unique = [...new Set(arry)]
 console.log(unique)

 let user ={
     name:'Vasya',
     surName: 'Lol',
     sayHello(){
         return  this.name + this.surName
     }
 }

 let petya = {
     name:'Petya',
     surName:'Titovich'

 }


 let f = user.sayHello.call(petya)
 console.log(f)


 const arrOfNumbers = [11,22,68,23,79,143]

 let findMin =(arr)=>{
    if(arr.lenght === 0){
        return undefined
    }
    let min = arr[0]
    arr.forEach((element)=>{
        if(element < min) // max (element > min) 
        min = element
    })

    return min
 }

 console.log(findMin(arrOfNumbers))


let l = [12,56,78,34]

let y=(number)=>{
    if(number.lenght === 0){
        return undefined;
    }
    let min = number[0]
    number.filter((elem)=>{
        if(elem <min){
            min = elem
        }
    })
    return min
}
console.log(y(l),'12312')


const maxim = [45,12,89,78,15,90,1]

let m = maxim.sort((a,b) => a-b)
console.log(m)

const apg = [1,25,55,77,-5,108]

// let b = apg.sort((a,b)=>;a-b)
// console.log(b)

let popla = [1,2,3,4,5,6]

let lip = popla.map((el)=>{
    return el + 1
})
console.log(lip,'123')

let obj1 ={name:'privet'};
let obj2 = obj1;
obj1.name ='vasya';
console.log(obj2)


class Animal {
    constructor(option){
        this.name = option.name,
        this.age = option.age,
        this.hasTail=option.hasTail
    }
}

const animal = new Animal ({
    name:'Валера',
    age:32,
    hasTail:true
})

console.log(animal)

try{
    console.log('i am not pidor')
    
}catch{
    console.log('ты пидор')
}


async function lla(){
    await fetch(url)
    const repsonse = await fetch(url)
    const data = await repsonse.json()
    console.log('data', data)
}

const someArr = [
    {name: 'Valera' , age:20, budget: 5000},
    {name: 'Dima' , age:45, budget: 8000},
    {name: 'Lora' , age:32, budget: 3000},
    {name: 'Saha' , age:12, budget: 1000},
]

let retro = someArr.reduce((total,person)=>{
    return total + person.age
}, 0)

console.log(retro,'reduce')

const budget = someArr.find(person => person.budget === 1000)
console.log(budget)

const market = someArr.filter(elem => {
    if(elem.age >=21 && elem.budget >=5000){
        return true
    }
})

console.log(market)


const maxMin = [9,2,56,89,32,12]

let lastOne = function(arr){
    if(arr.length===0){
        return false
    }

    let min = arr[0]
    maxMin.forEach((elem)=>{
        if(elem >min){
            min = elem
        }
    })
    return min
}

console.log(lastOne(maxMin))


const loArr =[1,4,8,34,89,2341,2]

const someRed = loArr.reduce((a,i)=> a+i,0)
console.log(someRed,'reducee')

console.log(Math.min(...loArr))

function fn(){
    return this
}

const objjj = {name:'valera'}

const cont = fn.call(objjj)
console.log(cont)

let prapada = function (a){
    return function(b){
        return a + b
    }
}
l
let someIgnat = prapada(3)
console.log(someIgnat(5))

const andrey ={
    name:'andrey',
    age:30
}

andrey.job = 'it'

console.log(andrey)

const kirill = Object.create(andrey)
kirill.name = 'kirill'
console.log(kirill,'kirill')

// 0 == false //true
// 0 === false//   false
// 1 =='1'// true
// 1 === '1'//false
// null == undefined// true
// null === undefined//false
// '0' == false// true
// '0'=== false//false
// [] == []//false
// [] ==[]//false
// {}== {}//false
// {}==={}//false
console.log(0 === false)

let sobes = [56,43,78,12,1,45,1,3,65,2]

let soberSort = sobes.sort((a,b)=> b-a)
console.log(soberSort)
soberSort = new Set([...sobes])
console.log(soberSort)


class Bike{
    constructor(model,color){
        this.model = model,
        this.color = color
    }

    getDet(){
        return this.model + 'bike has' + this.color + ' color'
    }
}

let bike = new Bike ('GT','red')

console.log(bike.getDet())

const lera = {
    name:'kera',
    age:12
}

console.log(Object.keys(lera))

function vanda(str){
    let someStr = str.split('')
    someStr[0] = someStr[0].toUpperCase()
    return someStr.join('')
}

console.log(vanda('pravda'))

const seri = [1,2,3,4,5,6,7,8]


const klop = seri.filter((elem)=>{
    return elem % 2
})

console.log(klop,'smtmttm')

function min(arr){
    if(arr.lenght <0){
        return undefined
    }

    let ele = arr[0]
    arr.forEach((elem)=>{
        if(elem < ele){
            ele = elem
        }
    })
    return ele
}

console.log(min(seri))


const alina = seri.forEach((elem)=>{
    return elem +3;
} )

console.log(alina,'foreach')

let b ={}
let c ;

b.b = 1
c = b
c.b =2
console.log(b.b)
console.log(c.b)

function fuc1(a,b){
    console.log(a,b)
}

let func2 = fuc1.bind(null, 6)

console.log(func2(7,8))

const word = [1,2,1,2,1,2,1,3,3,3,3,4,4,4,4,4,5,5]

console.log(...new Set(word))


let someValue = 10;
const promise = new Promise((resolve)=>{
    value =20;
    resolve(30)
});
const snieda = value;
console.log(snieda)

console.log(null == undefined)

let name = 'rabit' 

function go(){
    let name = 'foreast'
    console.log(`Run,${name}`)
}
 name = 'alice';
 

let marina = {}

let sava;
 marina

console.log([1, 2, 3, 4, 5].shift())
const arr_a = [1, 2, 3];
const result_a = arr_a.reduce((b, c) => b + c, 1);

console.log(result_a );
const arr3 = [1, 2];
const result2 = arr3.map(b => b + '1');

console.log(result2);
function test() {
    console.log(1); 
    setTimeout(()=>{console.log(2)}, 0); 
    setTimeout(()=>{console.log(3)}, 0); 
    console.log(4)
}
console.log(test)

const g = [1, 2, 3];
const p = [1, 2, 3];
const result = g === p
console.log(result)

const lapa ={}
const kesha = {}
console.log(lapa==kesha)

let i = [1, 2, 3];
let z = i;
z[0] = 4;
const ress = i === z;
console.log(ress)

var testtt = [1,2,3,4,5];
testtt[10] = 99;

console.log(testtt.length);

switch (1) {
    case 2:
        console.log(2);
        break;
    default:
        console.log(4);
    case 3:
        console.log(3)        
}

const lox = [1,2,3,4,4,4,3,2,1]
function papa (a,b){
    return a+b
}

let pidorasina = lox.splice(1,0,200)
console.log(lox)

let kol = lox.splice(2,3)
console.log(lox,'splice')


console.log(papa())

const ziko ={
    name:'Oleg'
}

let pitrila = ziko;
pitrila.name = 'gana'
console.log(ziko)
console.log()
const dick = [1,2,3]
let pripor = (str)=>{
    return str[0].toUpperCase() + str.substring(1)
}

console.log(pripor('allaalla'))
let polindrom = function(str){
 let someSTR = str.split('')
 let gala = someSTR.reverse().join("")
 if(gala ==str){
     return 'success'
 }else{
     return 'false'
 }
}

console.log(polindrom('1232131'))

const klone = [2,6,1,5,8,9]
let gtogori = klone.sort((a,b)=>a-b)
console.log(gtogori)
let prapra = function(arr){
    if(arr.length === 0){
        return false
    }
    let min = arr[0]
    arr.forEach((elem)=>{
        if(elem < min){
            min = elem;
        }
    })
    return min
}

console.log(prapra(klone))
console.log("a,b,c".split(',').slice(-1))



var person = { name: "lydia" };
const members = [person];
person = null;
console.log(members);

console.log(Boolean(10>9))
const numbersss = [1, 2, 3, 4, 5];
const [lop] = numbersss;
console.log(lop);

console.log('' ===false)


let mth = function(arr){
    if(arr.lenght === 0)
    return false

    let min = arr[0]
    arr.forEach((elem)=>{
        if(elem < min){
            min = elem
        }
    })
    return min
}
const oabj = {
    myName: "myName",
    sayName() {
      console.log(this.myName);
    }
  };
  
 const pirog = {
     myName:'valera'
 }
  
  let lenaaa = oabj.sayName.call(pirog);
  console.log();
  console.log(pirog)