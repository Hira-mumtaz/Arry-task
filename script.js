// const arry = ["a", "b" ,"c"];
// console.log(arry[0]);

// const arry = ["a", "b", "c"];
// console.log(arry);
// const arry = ["a", "b", "c"];
// console.log(arry.join(" "));

// let myarry = ["hira" , "islamabad", "BSCS"]
// console.log(myarry.join(" , "));

// myarry.push(6)
// console.log(myarry.join(" , "));


// let arry2 = [1,2,3,4,5];
// console.log("A",arry2);
// let myarry2 = arry2.slice(1,3);
// console.log("B" , myarry2)
// let str = ["sh1" , "sh2" , "sh3" , "sh4"]
// let strs = str.slice(0,4);
// console.log(strs)

// let arry3 = [1,2,3,4,5];
// console.log("A",arry3);
// let myarry3 = arry3.splice(1,3);
// console.log("B" , myarry3)


let result= document.getElementById("result")
let click=document.getElementById("click")
const arry = ["a", "b" ,"c"];
console.log(arry[0]);
click.onclick=() => {
   result.innerText = arry; 
}

let p2= document.getElementById("p2")
let b2=document.getElementById("b2")
let arry2 = ["a", "b" ,"c"];
arry2.push(4)

console.log(arry2[0]);
b2.onclick=() => {
   p2.innerText = arry2; 
}


let poparry= document.getElementById("poparry")
let b3=document.getElementById("b3")
let arry3 = ["a", "b" ,"c"];
arry3.pop()

console.log(arry2[0]);
b3.onclick=() => {
   poparry.innerText = arry3; 
}