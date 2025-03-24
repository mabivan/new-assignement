/*

function greet(){
    console.log("hello")
}

function goodbye(){
    console.log("Good Bye")
}
greet();
goodbye();

function greet(){
    setTimeout(function () {
    console.log("hello");}, 3000)
}
function bye(){
    console.log("Good Bye")
}
greet();
bye();

function greet(){
    setTimeout(function(){
        console.log("hello");
    }, 3000)
}
function bye(){
    console.log("Good Bye")
}
greet();
bye();
function greet(callback){
    console.log("Hello")
    callback()
}
function bye(){
    console.log("Good bye")
}
greet(bye);


function sum(callback,x,y){
let result = x+y;
callback(result);
}
function results(m){
    console.log(m);
}

sum(results,2,2)

function mulitply(callback,a,b){
    let result = a * b ;
    callback(result)
}
function results(result){
    document.getElementById("myH1").textContent = result;
    console.log(result)
}
mulitply(results,2,3);

function name(name, callback){
    console.log("hello,"+name)
    callback();
}
function bye(){
console.log("Are you the husband to mercy?");
}
name("john",bye)

function numbers(misingNo,callback){
    console.log("The missing Number is:"+ misingNo+ ".");
    callback();
}
function even(){
    console.log("its an even Number");
}
numbers(8,even);
function add(...add){
    return add.reduce((a,d) => a+d,0)
}
console.log(add(1,2,3,4,5))
const nums = [1,2,3];
const newNums = [...nums,4,5]


function nums1(...newNums){
    return reduce((b,...newNums) => 2+nums1,0;)
}
console.log()
function snums(nums,add){
    return snums.reduce((nums,add)=>nums+add)
    console.log(nums);
}
const numbers =[1,2,3,4,5];
snums(numbers);
function num(a,b,c){
    return a*b*c
}
const num1 = [1,2,3]
console.log(num(...num1));

const user = {name: "mabonga", gae:23,sex:"male",Nationality:"Ugandan"};
const details {name,...others} = user;
console.log(name);
console.log(others);

const user = { name: "Alice", age: 25, city: "New York" };

const { name, ...rest } = user;
console.log(name);  // Output: Alice
console.log(rest);  // Output: { age: 25, city: "New York" }

document.getElementById("myButton").addEventListener("click", function click(){

    console.log("Button Clicked")
})




    const buttons = document.querySelectorAll(".btn");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            console.log(`Button ${index + 1} clicked`);
        });
    });


 const numbers=[1,2,3,4,5];
 numbers.forEach(double)
 numbers.forEach(nums)


function double(element,index,array){
    array[index]= element *2;
}

 function nums(number){
    console.log(number);
 }

    let numbers = [1,2,3,4,5]
    numbers.forEach(cube)
    numbers.forEach(nums)
    
    function cube(element,index,array){
        array[index] = Math.pow(element, 3);
    }
    function nums(element){
        console.log(element);
    }


fruits.forEach(uppercase)


function uppercase(element,index,array){
    array[index]= element.uppercase();
}


fruits.forEach(capitalise)

function capitalise(element,index,array){
    array[index] = element.charAt(0).upperCase() + element.slice(1);
}

}
let fruits = ["Mango" ,"Lemon","Orange"];
fruits.forEach(capitalise);
fruits.forEach(display);
function capitalise(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element){
    console.log(element)};

 
    numbers.forEach(square)
    numbers.forEach(display)
    function square(element,index,array){
        array[index] = Math.pow(element , 2);
    }
function display(element){
      console.log(element)
    }

      
      const number = numbers.map(nums)
      console.log(number)
      function nums(element){
        return Math.pow(element,2);
      }
        let numbers = [1,2,3,4,5];
        const newNumber = numbers.map(nums)
        console.log(newNumber)
        function nums(element){
            return (element);
        }
let students = ["ivan","dan","derrick"];
let studentUpper = students.map(uppercase)
console.log(studentUpper)
function uppercase(element){
    return element.toUpperCase();

}
 let dates = ["2024/1/10", "2024/2/11","2024/3/12"];
 const formatedDate = dates.map(changeDate);
 console.log(formatedDate)
 function changeDate(element){
    const parts = element.split("/");
    return `${parts[1]}-${parts[2]}-${parts[0]}`;
 }

    let names  = ["ivan-mabonga", "harrie-yangi-","bella-siko"];
    const newArr = names.map(change);
    console.log(newArr)
    function change(elements){
        const newNames = elements.split("-");
        return `${newNames[1]} ${newNames[0]}`
    }

       // let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
       let alphabet = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]
        const newArr = alphabet.map(vise)
        console.log(newArr)
        function vise(element){
            const alchange= element.split(",")
            return ` ${alchange[25]} ${alchange[24]} ${alchange[23]} ${alchange[22]} ${alchange[21]} ${alchange[20]} ${alchange[19]} ${alchange[18]} ${alchange[17]} ${alchange[16]} ${alchange[15]} ${alchange[14]} ${alchange[13]} ${alchange[12]} ${alchange[11]} ${alchange[10]} ${alchange[9]} ${alchange[8]} ${alchange[7]} ${alchange[6]} ${alchange[5]} ${alchange[4]} ${alchange[3]} ${alchange[2]} ${alchange[1]} ${alchange[0]}`
       
       
        }

            let filteredArr = numbers.filter(evenNo)
            console.log(filteredArr)
            function evenNo(element){
                return element % 2 === 0;
            }
           

                let numbers = [1,2,3,4,5,6,7,8,9,10];
                let  filteredArr = numbers.filter(oddNo);
                console.log(filteredArr);
                function oddNo(element){
                    return element % 2 != 0;
                }
               let studentsAge = [16,17,18,19,12,30,14];
               const goodYrsForSch = studentsAge.filter(betterAge);
               console.log(goodYrsForSch)
               function betterAge(element){
                return element <= 18;
               }
              let words =["lovind","elephant","camel","wathorg"]
              let newArr = words.filter(shortWords);
              console.log(newArr)
              function shortWords(elements){
                return elements.length <= 6; 
              }
             let numbers = [1,2,3,4,5,6,7,8,9,10];
             let reducedArr = numbers.reduce(price);
             console.log(`Total of prices = $${reducedArr.toFixed(3)}`)
             function price(accumulator,element){
                return accumulator + element;
             }
            let grades = [50,60,70,80,95];
            const newArr = grades.reduce(min);
            console.log(newArr)
            function min(accumulator,element){
                return Math.min(accumulator,element);
            }
           const greet = function(){
            console.log("Gud morning love")
           }
           greet()
           greet();
           function greet(){
            console.log("Good morning dear")
           }
          const greet = function(){
            console.log("hello")
          }
          greet()

          function greet(){
            console.log("I love u")
          }
           setTimeout(greet,2000);
           setTimeout(function(){
            console.log("hello"),3000
           })

            setTimeout (function(){
                console.log("Hello"), 3000
            })
           const numbers = [1,2,3,4,5];
        const newArr = numbers.map( function square(element){
            return Math.pow(element,2);
           });
        console.log(newArr)
        const numbers = [1,2,3,4,5];
        const cubedNumbers = numbers.map(function(element){return Math.pow(element,3)})
        console.log(cubedNumbers)
         const numbers = [1,2,3,4,5];
         const evenNoArr = numbers.filter(function(element){
            return element % 2 ===0;
         })
         console.log(evenNoArr)
          
         const numbers = [1,2,3,4,5];
         
         const reducedArr = numbers.reduce(function(accumulator,element){
    return accumulator + element;
         })
         console.log(reducedArr)
         // different ways of concisely writing funtions

        
         function greet(){
            console.log("hello")
         }
         greet();
         const greet = function(){
            console.log("hello")
         }
         const greet =function(){
            console.log("hello")
         }
         greet()
         const arrow = (greet) => console.log("hello")
         arrow() const greet = (name,age) => {console.log(`hello ${name}`);
                                                console.log(`hello ${age}`)}
         greet("Mabonga",23)
         setTimeout(greet,3000);
         function greet(){
            console.log("hello");
         }

         
    setTimeout(function(){
        console.log("hello")
    },3000)
    
   setTimeout(() => console.log("hello"),7000)
   const numbers = [1,2,3,4,5];
   const newArr = numbers.map((element) =>  Math.pow(element,2))
   console.log(newArr)
   const numbers = [1,2,3,4,5];
   const newArr = numbers.filter((element) => element %2 == 0)
   console.log(newArr
   setTimeout(() =>{
    let numbers =[1,2,3];
    let newArr = numbers.map(element=> element*2);
    console.log(newArr);},2000);
     let numbers = [1,2,3,4,5];
     let arrowfunc = numbers.Map()=> Math.pow(element,2);
     console.log(arrowfunc)
     const numbers = [1,2,3,4,5]
     const newArr = numbers.map(element =>Math.sqrt(element,2) )
     console.log(newArr)
     let numbers = [1,2,3,4,5];
     let newArr = numbers.filter((element)=> element % 2===0)
  
     console.log(newArr)
     let numbers = [1,2,3,4,5];
     let newArr = numbers.reduce( (accumulator,elements) => accumulator + elements);
     console.log(newArr)
     const person ={
        firstName: "mabonga",
        secondName: "ivan",
        age: 23,
        stillStudent: true,
        eat: function(){console.log(`i am eating ${this.firstName}`)} 
     }
     console.log(person.firstName)
     console.log(person.secondName)
     console.log(person.age)
     console.log(person.stillStudent)
     person.eat()
     const person = {
        name:"mabonga",
        age: 23,
        food: "milk",
        preferance: function(){console.log(`i prefer eggs to ${person.food}`)}
     }
     console.log(person.name);
     console.log(person.age);
     person.preferance()
      function data(name,age, sex){
        data.name =name,
        data.age =age,
        data.sex =sex
      }
      const newData = data("mabonga",23,"male");
      console.log(data.name)

      const car1 ={
        type:"Mustanga",
        speed:20,
        color:"black",
        demand:function(){
            console.log(`all people desire a${this.type} that is of ${this.speed} speed limit`)
        }
      }
      console.log(car1.type);
      console.log(car1.speed);
      console.log(car1.color);
car1.demand();

let person ={
    name:"mabonga",
    job: "Lawyer",
    Age: 23,
    lastName: "Ivan",
    hobbie:function(){console.log(`i love being a ${this.job} cox i love it`)}
}
console.log(person.name);
console.log(person.lastName);
console.log(person.Age);
console.log(person.job);

function details(names,age,sex,Nationality){
this.names=names,
this.age = age,
this.sex = sex,
this.Nationality = Nationality
}
const details1 = new details("Mabonga Ivan",23,"male","Ugandan")
const details2 = new details("marvin",23,"male","sudan");
console.log(details1.names)
console.log(details1.age)
console.log(details1.sex)
console.log(details1.Nationality)
console.log(details1)
person.hobbie();

const parent2 = new parents("Netembeya Christopher", 50, "Male");
const parent3 = new parents("Yangi Harreit", 23, "Female");

console.log(parent2.name)
console.log(parent2.age)
console.log(parent2.sex)

console.log(parent3.name)
console.log(parent3.age)
console.log(parent3.sex)

function parents(name,age,sex,nationality){
    this.name = name,
    this.age =age,
    this.sex = sex
}
parents.nationality 
const parent1 = new parents("Walyamboga Alice",48,"Female", "Ugandan");
console.log(parent1.name)
console.log(parent1.age)
console.log(parent1.sex)
console.log(parent1.nationality)

const person={
    name:"Walyamboga",
    Age: 23,
    sex:" female"
}


console.log(person.name);
console.log(person.Age);
console.log(person.sex);
person.nationality="ugandan"
console.log(person.nationality)
delete person.Age
function num1(){
    console.log("I am one(1)")
}
function num2(){
    console.log("I am two(2)")

}function num3(){
    console.log("I am Three(3)")

}function num4(){
    console.log("I am four(4)")
}
num1();
num2();
num3();
num4();

console.log("All of the functions counted in line")
function num1(callback){
    setTimeout(()=>{
        console.log("Iam one");
        callback();},3000);
       
}
function num2(callback){
    setTimeout(()=>{
        console.log("i am Two");
        callback();
    },2000);
    }
    function num3(callback){
        setTimeout(()=> {
            console.log("I am Three");
            callback();
        },500);
    }
    function num4(callback){
        setTimeout(()=>{
            console.log("I am four");
            callback();
        },6000);
    }

num1(()=>{
    num2(()=>{
        num3(()=>{
            num4(()=>{
                console.log("I am done")
            })
        })
    })
})



function walkTheDog(callback){
  setTimeout(()=>{console.log("Walk the dog"); callback();},5000);
  
}

function washUtencils(callback){
   setTimeout(()=>{console.log("Wash Utencils");callback();},3000) ;
    
}

function CleanKitchen(callback){
   setTimeout(()=>{console.log("Clean the kitchen");callback();},400);
    
}
walkTheDog(()=>{
    washUtencils(()=>{
        CleanKitchen (()=>{
            console.log("You will have accomplised your tasks")
        })
    })
})

function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Walk the dog");
        });
    }, 5000);
}
function washUtencils(){
    return new Promise((resolve, reject)=>{
        resolve("Wash the Utencils");
    },2000);
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        resolve("clean the kitchen");
    },200)
}
walkDog(()=>{

})

function walkDog(){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("walk the dog");
    },500);
})
}
walkDog().then(value => console.log(value));
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    resolve("walk the dog")
},5000);
        
    })
}

function washUtencils(){

}
walkDog().then(value=>console.log(value))
function walkDog(){

//walk the dog
// wash untencils
//clean the kitchen
//return new Promise(resolve,reject){}
 
function walkDog(){
    return new Promise(resolve,reject){
        setTimeout()=>{
            console.log("walk the dog");
        },5000);
        }
    }



function washUtencils(){
    setTimeout(()=>{
        console.log("washing utencils");
        callback();
    },3000);
}
function cleanKitchen(){
    setTimeout(()=>{
        console.log("Cleaning the kitchen");
        callback();
    },2000);
} 


function walkDog() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("walk the dog") 
        },3000);
    })   
}
function washUtensils(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Washing utensils.")
        },2000)
    })
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Cleaning the kitchen!")
        },1000)
    })
}
walkDog().then(value => {console.log(value);return washUtensils()})
         .then(value =>{console.log(value);return cleanKitchen()})
         .then(value=> {console.log(value); console.log("work is done")})
         


walkDog().then(value =>{console.log(value);return washUtencils()})
         .then(value =>{console.log(value);return cleanKitchen()})
         .then(value =>{console.log(value); console.log("I have finished my work")})



         function walkDog(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const walkDog = true;
            if(walkDog ){
        resolve("Walk the dog");   
            }
            else{
                reject("you have not walk the dog yet")
            }
          
        },5000);
    })
}
function washUtencils(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const washUtencils = true;
            if(washUtencils){  
                resolve("washing utencils");
            }else{
                reject("You didnt wash utencils yet")
            }
          
        },4000);
    })
}




function cleanKitchen(){
    return new Promise((resolve,reject)=>{ 
setTimeout(()=>{
    const cleankitchen = false;
    if(cleankitchen){
        resolve("cleaning the kitchen");
    }
    else{
        reject("You dint clean the kitchen")
    }
    
},1000)
    })
}
async function dochores(){
const walkDogResults = await walkDog();
console.log(walkDogResults);
const washUtencilsResults = await washUtencils();
console.log(washUtencilsResults);
}
dochores();



function walkDog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const walkDog = true;
            if(walkDog){
                resolve("You walk the dog");
            } 
            else{
                reject("You dint walk the dog");
            }
           
        },5000)
    })
}
function washUtensils(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const washUtensils = true;
        if(washUtensils){
            resolve("You washed utencils");
        }
        else{
            reject("You dint wash Utencils");
        }
       
    },4000)
})
}
function cleanKitchen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cleanKitchen= false;
            if(cleanKitchen){
                resolve("You cleaned the kitchen");
            }
            else{
                reject("You didnt clean the kitchen")
            }
        },2000)
    })
}
async function homeWork(){
    try{
    const walkDogResults = await walkDog();
    console.log(walkDogResults);

    const washUtensilsResults = await washUtensils();
    console.log(washUtensilsResults);

    const cleanKitchenResults = await cleanKitchen();
    console.log(cleanKitchenResults);
}
catch(error){console.error(error)}
}
homeWork();

setTimeout(()=>{console.log("task 1")});
console.log("task 2")
console.log("task 3")
console.log("task 4")
function task1(callback){
    setTimeout(()=>{console.log("task 1");
    callback()
    },3000)
}
function tasks(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
    
}
task1(tasks)
//walk the dog
// wash Utensils
// clean the kitchen

    function walkDog(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const walkDog = true;
                if (walkDog){
                    resolve("You walk the dog")  
                }
                else{
                    reject("You dint walk the dog.")
                }
    
            },5000)
        })
       
    }
    function washUtensils(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const washUtensils = true;
                if(washUtensils){
                    resolve("You wash the utensils")
                }
                else{
                    reject("You dint wash the utencils")
                }
    
            },2000);
        })
       
    }
    function cleanKitchen(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const cleanKitchen = false;
                if(cleanKitchen){
                    resolve("You clean the kitchen")
                }
                else{
                    reject("You dint clean the Kitchen")
                }
            },1000);
        })
    } 
    async function houseWork(){    
try{
   
        const walkDogResults = await walkDog();
        console.log(walkDogResults);
    
    
        const washUtencilsResults = await washUtensils();
      console.log(washUtencilsResults);
     
    
     const cleanKitchenResults = await cleanKitchen();
     console.log(cleanKitchenResults);   
    }
    catch(error){console.error(error)}
}


houseWork();



walkDog().then((value)=>{console.log(value);return washUtensils()})
         .then((value)=>{console.log(value);return cleanKitchen()})
         .then((value)=>{console.log(value);console.log("You have finished all your tasks")})
         .catch((error)=>(console.log(error)));
        
        function hello(){
            window.alert("I am a child of God");
        }
        setTimeout(hello,7000);

setTimeout(function(){window.alert("hello")},3000)

setTimeout(()=>{window.alert("hello")},5000)

const timeoutId = setTimeout(()=>{window.alert("hello")},5000);
clearTimeout(timeoutId)

//const timeoutId;
function starter(){
   timeoutId = setTimeout(()=>{window.alert("Hello")},3000)
   console.log("started");
}
function ender(){
    clearTimeout(timeoutId);
    console.log("ended")
}
try{
console.lag("hello");
}
catch(error){
    console.log(error)
}
finally{
    console.log("goodBye")
}
console.log("code is finalised")

const jsonString =`{"name": "mabonga ivan", "age":"25"}` ;
const obj = JSON.parse(jsonString)
console.log(obj.name);
console.log(obj.age);

const person = ["Mabonga","male","lemel"];
const Tostring = JSON.stringify(person);
console.log(Tostring);
//console.dir(document)
document.title = "Bro~Code";
document.body.style.backgroundColor =  "black";
const userName = "";
const message = document.getElementById("h1").textContent += userName === ""? "You dint put anything": userName

const userName = "Mabonga Harriet";
const greet = document.getElementById("h1").textContent += userName ===""? "You have not yet directed the message to any one": userName;
const change = document.getElementById("h1")
change.style.backgroundColor="black";
change.style.color="white"
change.style.textAlign ="center"
const foods = document.getElementsByClassName("foods")
foods[0].style.backgroundColor="black";

const foods =document.getElementsByClassName("foods");
for(let i =0;i < foods.length;i++){
    foods[i].style.backgroundColor="orangered"
}

const foods1 = document.getElementsByClassName("foods");
Array.from(foods1).forEach(foods =>{
    foods.style.backgroundColor="yellow"
});
const foods = document.getElementsByClassName("food");
Array.from(foods).forEach(food=>{
    food.style.backgroundColor = "red";
    food.style.color = "white";
})
const headings = document.getElementsByTagName("h1");
for(heading of headings){
    heading.style.backgroundColor = "yellow"
}
const headings = document.getElementsByTagName("h1");
Array.from(headings).forEach(h1=>{
    h1.style.backgroundColor = "yellow";
})
const numbers = [1,2,3,4,5];
function numb(element){
numbers.forEach(element=>{});
}
let numbers = [1,2,3,4,5];
function numbs(element){
    return forEach((element)=>{numbers.math.})
}
function girls(black,age,education,height){
    this.
}
const person1= {
    name:"ivan",
    age:23,
    sex:"male"
}
const person2= {
    name:"Davis",
    age:22,
    sex:"male"
}
console.log(person1.name)
console.log(person1.age)
console.log(person1.sex)
console.log(person2.name)
console.log(person2.age)
console.log(person2.sex)

function person(name,sex,age){
    this.a=name,
    this.b=sex,
    this.c=age
}
const person1 = new person("Mabonga",23,"Male");
console.log(person1)
const person2 = new person("Davis",24,"Male");
console.log(person2)
const numbers = [1,2,3,4,5];
numbers.forEach(double)
numbers.forEach(nums)
function nums(element){
    console.log(element);
}
function double(element,index,array){
    array[index]=element *2
}
class person{
    constructor(name,sex){
        this.name = "Mabonga",
        this.sex = "Male"
    }
    display(){
        
    }
}
function person(name, sex){
    this.name = "ivan",
    this.sex ="male"
}
const person1 = new person ("Mabonga ivan", "Male");
console.log(person1);

class person{
    constructor(name,sex){
        this.name=name
        this.sex=sex
    }
}
const person1 = new person("IVO",23);
console.log(person1)
class person{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    display(){
        console.log(`My name is ${this.name}`);
        console.log(`I am a ${this.sex}`);
    }
}
const person1 = new person("IVO","Male");
person1.display();

https://docs.google.com/document/d/1sgPqA4ZN6dOneF7GUbLU0mjT9iUJvzsz2PihQ3Do_uo/edit?tab=t.0#heading=h.294t0fwgau8n
const person1 ={
    name:"Mabonga",
    sex:"Male",
    age:24,
    marital: false
}
console.log(person1)

const person2 ={
    name:"Daniel",
    sex:"Male",
    age:22,
    marital: true
}
console.log(person2)
https://docs.google.com/document/d/1sgPqA4ZN6dOneF7GUbLU0mjT9iUJvzsz2PihQ3Do_uo/edit?tab=t.0#heading=h.294t0fwgau8n

class products{
    constructor(product,price){
        this.product=product,
        this.price=price
    }
 display(){
        return `I bought ${this.product} At ${this.price} shs`
    }
}
const product1 = new products("MAize flour", 2000 )
console.log(product1.display());
    


class product{
    constructor (name,price){
        this.name = name,
        this.price = price
    }
    display(){
        return `Product:${this.name}  I sell it at $${this.price}`
    }
}
const product1 = new product("Maize flour",100)
console.log(product1.display())
class product{
    constructor(name,price){
       this.name = name,
       this.price = price
    }
    display(){
        console.log(`Product: ${this.pricename}`),
        console.log(`Its price is, $${this.price}`)
    }
}
const product1 =new product("Beans",100);
product1.display()

class product{
    constructor(name,price){
        this.name = name,
        this.price = price
    }
        console.log( display(){
        console.log(this.name);
        console.log(this.price);
    }
    calculateTAx(tax){
        return this.price + (this.price * tax);
    }
}
const product1 = new product("Posho", 100)
product1.display()
const tax = 20;
const total = product1.calculateTAx(tax);
console.log(`total is $${total}, with tax inclusive)  `)

class product{
    constructor(name,price){
        this.name = name,
        this.price = price
    }
    display(){
        console.log(`Product: ${this.name}`)
        console.log(`I sell my ${this.name} at $${this.price} without tax`)
    }
    calculate(tax){
        return this.price + (this.price*tax)
    }

}
const tax = 20;
const product1 = new product("Posho", 100);
product1.display();
const total = product1.calculate(tax);
console.log(`I sell my posho at ${total.toFixed(2)} with tax`)

class product{
    constructor(name, price){
        this.name = name,
        this.price = price)
   
    }
    display(){
        console.log(`The only available product is ${this.name} and i only sale it at $${this.price} if i dont include the tax incured.`)
    }
    calculateTax(tax){
        return `${this.price}+(${this.price}*tax)`
    }
}
const tax = 20;
const product1 = new product("Posho",100);
product1.display();
const total=product1.calculateTax(tax);
console.log(`i sell my Posh ${total)}`)

const name = "my name is mabonga ivan"
*/
//console.log("hello")
//window.alert("HELLO JONATHAN")
//My name is mabonga 
/*what mmmmmmmm
gggggjhfgfryufgyubvgyrf
byfrhbyurfyurfbrygy

//const Food =


//const fd =document.getElementById("myH1").textContent="All Food Types"
//console.log(fd)

//console.log(document.getElementById("myH1").textContent = "England foods")
//onst fd = document.getElementById("myH1").textContent = "FOODS"
//console.log(fd)
const j = document.getElementsByClassName("fg").textContent = "Drinks"
console.log(j)

function display(){
    console.log("I have made it")
}const age = 25;
console.log( age,typeof age)
Let age = 20;
age = age +20;
Console.log (age) // 21             

let age = 20;
age = age *= 20;
console.log(age)

const details = window.prompt("What is your Name");
console.log(details)
let details;
document.getElementById("myButton").onclick = function(){
 details= document.getElementById("myInput").value;
 console.log(details)

}
// a variable is container that stores data values;

let name = "Ivan";
console.log(name);
var 
let
const

const age = 20;
age = 30;
console.log(age)

DATA TYPES
Number
String
Boleans
oblects
null
undefined
objects
array


let age = 2;
 age = age ++ 
console.log(age)

let names = ["Jona", "ivan","dan"];
console.log(names)


let person = 222222

let person2={
    name: "ivan",
    sex: "male"

}
console.log(person)

let person =[]
//typeof
let age = "24";
console.log(age)

let person={
    name:"josh",
    age:20,
    sex:"male"
}
console.log(person)
 let heading = document.getElementById("myH1").textContent ="WELCOME TO THE FOLK FOODS";
 let my1Paragraph = document.getElementById("myP1").textContent = "Beans";
 let my2Paragraph = document.getElementById("myP2").textContent = "Soya";
 let my3Paragraph = document.getElementById("myP3").textContent = "Cawo Peas";*/

//  let numbers = 5;
//  let count= numbers + numbers;
//  console.log(count);

let myAge = 1;
let humanDogRatio =