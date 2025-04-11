//console.log('Hello');

//window.alert('This is an alert');

//this is a comment
/* this
is 
a 
comment */
// document.getElementById('myH1').textContent='Hello';
// document.getElementById('myP').textContent = 'lljrekngisunguinuisn';


//VARIABLES
/* let age = 25;
let price = 10.99;
let gpa = 2.1;
let students = 30;
let extraStudents=students ** 2;

console.log(`You are ${age} years old`);
console.log(`The bag costs ${price} ksh`);
console.log(`He scored ${gpa} GPA`);
console.log(extraStudents); */




 let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
} 



    //type conversion = change the datatype of a value to another (SVGStringList,SVGAnimatedNumberList,boolean)

   /*  let age =window.prompt("How old are you?");
    age = Number(age);
    age+=1;

    console.log(age); */

    const PI =3.14159;
    let radius;
    let circumference;

    document.getElementById("mySubmit1").onclick = function(){
        radius = document.getElementById("myText").value;
        radius=Number(radius);
        circumference = 2 * PI * radius;
        document.getElementById("myH3").textContent = `Hello ${username} Your circumference is ${circumference}cm`;
    }

    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const countLabel = document.getElementById("countLabel");
    let count = 0;

    increaseBtn.onclick = function (){
        count++;
        countLabel.textContent = count;
    }

    decreaseBtn.onclick = function (){
        count--;
        countLabel.textContent = count;
    }

    resetBtn.onclick = function (){
        count = 0;
        countLabel.textContent = count;
    }



   /*  //math = built in object that provides a collection of properties and methods.

    let x = 3.21;
    let y= 2;
    let z;

    z = Math.round(x);     //removes decimal
    z = Math.floor(x);   //round down
    z = Math.ceil(x);     //round up to nearest int
    z = Math.trunc(x);      // round  decimal portion
    z = Math.pow(y,x);      // raise base to the power number
    z = Math.sqrt(x);       //square root
    z = Math.log(x);        //natural logarithm of a number
    z = Math.sin(x);
    z = Math.cos(x);
    z = Math.tan(x);   ///trigonometry
    z = Math.abs(x);     // absolute value == always positive
    z = Math.sign(x);     // checks whether the number is positive or negative.
    let max = Math.max(x,y,z);
    let min = Math.min(x,y,z);

 */



    ////Random Number 
    // let randNum=Math.Floor(Math.random() * 6) + 1;
    // console.log(randNum);

    // const min = 50;
    // const max =100;

    // let randNum=Math.Floor(Math.random() * (max - min) );
    // console.log(randNum);

    const randBtn = document.getElementById("randBtn");
    const randLabel1 = document.getElementById("randLabel1");
    const randLabel2 = document.getElementById("randLabel2");
    const randLabel3 = document.getElementById("randLabel3");

    const min = 1;
    const max = 6;
    let randomNum1;
    let randomNum2;
    let randomNum3;

    randBtn.onclick = function(){
        randomNum1 = Math.floor(Math.random() * max) + min;
        randomNum2 = Math.floor(Math.random() * max) + min;
        randomNum3 = Math.floor(Math.random() * max) + min;
        randLabel1.textContent = randomNum1;
        randLabel2.textContent = randomNum2;
        randLabel3.textContent = randomNum3;
    }

    const ageText = document.getElementById("ageText");
    const myAgeSubmit= document.getElementById("myAgeSubmit");
    const resultElement = document.getElementById("resultElement");

    let age;
    myAgeSubmit.onclick=function(){

        age=ageText.value;
        age=Number(age);

    if(age >=100){
       // console.log("You are TOO OLD to enter this site.");
        resultElement.textContent = `You are TOO OLD to enter this site.`;
    }else if(age ==0){
        //console.log("You can't enter. Zero is not an AGE.");
        resultElement.textContent =`You can't enter. Zero is not an AGE.`;
    }else if(age >= 18){
       // console.log("You are old ENOUGH to ENTER THIS SITE.");
        resultElement.textContent =`You are old ENOUGH to ENTER THIS SITE.`;
    }else if(age < 0){
         //console.log("You CAN'T be BELOW ZERO");
         resultElement.textContent =`You CAN'T be BELOW ZERO`;
    }else{
        //console.log("You must be 18+ to enter this Site");
        resultElement.textContent =`You must be 18+ to enter this Site`;
    }
    }

    /* checked= property that determines the checked state of an HTML checkbox or a radio button Element. */

    const myCheckBox=document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const payPalBtn = document.getElementById("payPalBtn");
    const mySubmitBtn = document.getElementById("mySubmitBtn");
    const subResult = document.getElementById("subResult");
    const payMentResult = document.getElementById("payMentResult");

   //document.getElementById("mySubmitBtn").onClick = function(){
   mySubmitBtn.onclick = function(){

        if(myCheckBox.checked){
            //console.log("You are subscribed!!");
            subResult.textContent = "You are subscribed";
        }else{
             //console.log("You are NOT subscribed!!");
            subResult.textContent = "You are NOT subscribed";
        } if(visaBtn.checked){
            payMentResult.textContent = "You are paying with Visa";
        } else if (masterCardBtn.checked){
             payMentResult.textContent = "You are paying with MasterCard";

        }else if (payPalBtn.checked){
             payMentResult.textContent = "You are paying with Paypal";
        }else{
             payMentResult.textContent = "You Must select a payment type";
        }
    }


    //TERNARY OPERATOR = a shortcut to if{} and else{} statements, helps to assign a variable based on a condition.
    //condition ? codeIfTrue ? codeIfFalse 
    
   /*  let bottles = 21;
    bottles >= 18 ? "You are an adult" : "You are an minor";
    console.log (message); */

   /*  let time = 16;
    let greeting = time < 12 ? "Good Morning" : "Good afternoon!";
    console.log(greeting);

    let isStudent = false;
    let message = isStudent ? "You are a student" : "You are NOt a Student";
    console.log(message);

    let purchaseAmount = 125;
    let discount =  purchaseAmount >= 100 ? 10 : 0;
    console.log(`Your total equals`); */

    //SWITCH = can be an efficient replacement for many else if statements.

    /* let day = 1;

    switch(day){
        case 1:
            console.log("It is Monday");
            break;
        case 2:
            console.log("It is Tuesday");
            break;
        case 3:
            console.log("It is Wednesday");
            break;
        case 4:
            console.log("It is Thursday");
            break;
        case 5:
            console.log("It is Friday");
            break;
        case 6:
            console.log("It is Saturday");
            break;
        case 7:
            console.log("It is Sunday");
            break;
        default:
            console.log("It is a day ");
        
    }

    let testScore = 92;
    let letterGrade;

    switch(true){
        case testScore >= 90:
             letterGrade = "A";
             break;
        case testScore >= 80:
             letterGrade = "c";
            break;
        case testScore >= 70:
             letterGrade = "D";
             break;
        case testScore >= 60:
              letterGrade = "E";
              break;
        default:
            letterGrade ="F"; 
                    
    }
    console.log(letterGrade); */

    //STRING methods = allows manipulation and work with text (strings)
   
    //let useName = "Paul";

   /*  useName.charAt(0);
    console.log(useName); */

   /*  useName.indexOf("u");
    console.log(useName); */

   /*  useName.lastIndexOf("u");
    console.log(useName); */

    /* console.log(useName.length);

    useName = useName.trim();
    console.log(useName);

    useName = useName.toUpperCase();
    console.log(useName);

    useName = useName.toLowerCase();
    console.log(useName);

    useName = useName.startsWith(" ");
    if (result){
        console.log("Your username can't end with ' '");
    }else{
    console.log(useName);
    }

    let phoneNumber = "123-456-7890";
     phoneNumber = phoneNumber.replaceAll("-","/");
     console.log(phoneNumber);

     phoneNumber = phoneNumber.padStart(15,0);
     console.log(phoneNumber);
    
     */

     /* //string slicing = creating a substring from a portion of another string.
                        // String.slice(start,end)
     const fullName ="Paul Oluoch";
     //let fistName = fullName.slice(0,3);
       let firstName = fullName.slice(0,fullName.indexOf(" "));
       let lastName = fullName.slice(0,fullName.indexOf(" ")+ 1);
     console.log(firstName);
     console.log(lastName); */

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

     function convert(){
        if(toFahrenheit.checked){
            temp=Number(textBox.value);
            temp=temp * 9 / 5 + 32;
            result.textContent = temp.toFixed(1) + "°F";

        }else if(toCelsius.checked){
            temp=Number(textBox.value);
            temp=(temp -32)* (5/9);
            result.textContent = temp.toFixed(1) + "°C";


        }else{
            result.textContent = "Select a unit";
        }

     }


