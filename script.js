

// Write a program that prints "Hello World" after 3 seconds.
setTimeout(()=>{
    console.log("Hello World");
},3000)


// Create a digital clock using setInterval().
const clock = document.getElementById("clock");

  function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const amPm = now.getHours() >= 12 ? "PM" : "AM";

     clock.textContent =`${hours}:${minutes}:${seconds} ${amPm}`;
}
updateClock();
setInterval(updateClock, 1000);

// Create a function that receives another function as a parameter and executes it.

function greet(user) {
  console.log(`Hello ${user}`);
}

function fareWell(user) {
  console.log(`Goodbye ${user}`);
}

function userName(fn,name) {
  return fn(name);
}

userName(greet,"bayzid");
userName(fareWell,"polok")

// Create a Promise that resolves after 2 seconds.
const getResult = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("it will resolve after 2 sec")
  },2000)
})

getResult.then(value =>console.log(value));

// Handle both success and error using .then() and .catch().

const ageValid = new Promise((res,rej)=>{
  let age = 22;
  // let age = 12;
  setTimeout(()=>{
    if (age > 18) {
    res("It's Valid")
  }else{
    rej("It's not Valid")
  }
  },3000)
})

// ageValid.then(value => console.log(value))
// .catch(value => console.log(value));

// Convert a Promise-based example into async/await.
async function checkingAge() {
  try{
    const age =   await ageValid;
      console.log(age);
  }
      catch(e){
        console.log(e);
      }
}

checkingAge();


// PART B: DOM MANIPULATION PRACTICE
// getElementById()
const firstId = document.getElementById("firstId");
console.log(firstId.textContent);

// querySelector()
const secondClass = document.querySelector(".secondClass")
console.log(secondClass.innerText);

// querySelectorAll()
const box = document.querySelectorAll(".box");
console.log(box);

// 2. Change:
// Text Content
const thirdId = document.getElementById("thirdId")
thirdId.textContent = "It has changed";
console.log(thirdId.textContent);

// HTML Content
const fourthClass = document.querySelector(".fourthClass");
fourthClass.innerHTML = '<p><u>New content added.</u></p>';

// CSS Style
thirdId.style.backgroundColor = "blue";
thirdId.style.color = "#fff";
fourthClass.style.paddingLeft = "120px";

// 3. Create and append new elements dynamically.
function createEle() {
  const p = document.createElement("p");
  p.textContent = "new Element";
  console.log(p);
  document.body.append(p);
}

createEle();

// 4. Remove an element from the DOM.
const parent = document.getElementById('parentElement');
const child = document.getElementById('childElement');

// parent.removeChild(child);

// 5. Add event listeners:
const clickMe = document.getElementById("clickMe");
clickMe.addEventListener("click",()=>{
  const para = document.createDocumentFragment("p");
  para.textContent = "new p added by click";
  document.body.append(para)
});

// input
const inputElement = document.querySelector('input');

inputElement.addEventListener('input', (event) => {
  console.log('New value:', event.target.value);
});   

// submit
    const form = document.getElementById('myForm');
    const outputSpan = document.getElementById('output');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const inputValue = document.getElementById('userInput').value;
      outputSpan.textContent = inputValue;
      event.target.reset();
    });