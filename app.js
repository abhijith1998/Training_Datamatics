//functions
//1)function assigned to variable 
const ShowMyName=function(){
    console.log("Abhijith Shetty")
}
ShowMyName()

//2)function expression
const printMyArray=(arr)=>{
     arr.forEach(ele=>{
         console.log(ele)
     })
}
printMyArray([1,2,3,4,5,6,7])

//3)function Declration
function showFruitNames(args){
   args.map(f=>{
       console.log(f)
   })
}
showFruitNames(['apple','orange','banana'])

// 4)callback function
async function getFruit(authId,callback){
    const Ids=['1245','4575','7745','8774']
    let res=await Ids.includes(authId);
    if(res){
        return callback('',['apple','bannana','orange'])
    }
    else{
        return callback('invalid id',[])
    }
}

getFruit('4575',(err,data)=>{
    if(!err){
        console.log(data)
    }
    else{
        console.log(err)
    }
})

//5)Anonymous Functions
let loading=true
console.log(loading)
setTimeout(async()=>{
   loading=await false
   console.log(loading)
},5000)

//function parameter and return keyword
function simpleCal(operation,x,y){
    switch(operation){
        case 'add':return x+y;
        case 'sub':return x-y;
        case 'mul': return x*y;
        case 'div':{if(y)return x/y;return "not possible.."};
        default:return "invalid choice";
    }
}

let result=simpleCal('div',10,10)
console.log(result)


//Array Methods
//map
const names=['virat','rahul','dawan','rohith','hardhik']
const numbers=[10,20,30,40,50,60]

//1)forEach
names.forEach(name=>{
    console.log(name)
})

//2)map
names.map((name,index)=>{
    console.log(`name ${name} from index ${index}`)
})

//3)filter
let filtered_list=names.filter(name=>{
    if(name.startsWith('r')){
        return name;
    }
})
console.log(filtered_list)

//reduce
let reduced_value=numbers.reduce((a,b)=>{return a+b})
console.log(reduced_value)

//sort 
let sorted_arr=numbers.sort((a,b)=>{return b-a;})
console.log(sorted_arr)

//for loops 
//1)
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

//2)
for(let index in names){
    console.log(names[index])
}
 //3)
 for(let name of names){
     console.log(name)
 }

 //while loop
 let i=0;
 while(i<names.length){
     console.log(names[i])
     i++;
 }
 i=0;
 //do-while
 do{
     console.log(names[i])
     i++;
 }while(i<names.length);

//break;
//print till value 30
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===30){
        console.log(numbers[i]);
        break;
    }
    else{
        console.log(numbers[i])
    }
}

//continue 
//skip value 30
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===30){
      continue;
    }
    console.log(numbers[i])
}

//diffrenece between == and ===
if('10'==10){
    console.log(`'10' is equal to 10 in ==`);
}

if('10'===10){
    console.log("it will not run")
}
else{
    console.log(`'10' is not equal to 10 in ===`);
}

//if else and else if
let a=10
let b=20
if(a>b){
    console.log(`${a} is greater than ${b}`)
}
else if(b>a){
    console.log(`${b} is greater than ${a}`)
}
else{
    console.log(`${a} is equal to ${b}`)
}

//Ternary operator
10%2==0?console.log("10 is not a prime number "):console.log("10 is a prime number")

//objects
let obj={
    name:"Mango",
    price:'10rs',
    from:'udupi',
    weight:'80g'
}
for(let prop in obj){
    console.log(`${prop}=>${obj[prop]}`)
}
console.log(obj.price)
console.log(obj['from'])
console.log(Object.keys(obj))
console.log(Object.values(obj))