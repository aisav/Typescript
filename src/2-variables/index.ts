let a
a=1
a='4' //will be error in this case let a=1

let x : number | null = 777
x=null

let f : (x:number, y:number)=> number
f = (a,b)=> a+b
//error         f(7, 'jgj')

let o : {size:number} | number = {size: 5,}
let oo : {quantity: number, price:number, getAllPrice(): number}

let numbers : number[]
let numbers2 : Array<number>
