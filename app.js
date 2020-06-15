// ==============chapter: 1

//===========Task:1
// alert("Error!Please enter a password");

//===========Task:2
// alert("Welcome to JS land..\n Happy coding");

//===========Task:3
// alert("Welcome to JS land");

//===========Task:4
// alert("Happy coding");

//===========Task:5
// alert("Hello.... I can run JS through my web browser's console");




// ==============Chapter: 2

//===========Task:1
// var username = "Zain";
// alert(username);

//===========Task:2
// var myName = "Zain Zeeshan";
// alert(myName);


//===========Task:3
// var message = "Hello World!!";
// alert(message);


//===========Task:4
// var name = "Zain Zeeshan";
// var age = "25 years old";
// var course = "Certified Mobile App Development";
// alert(name);
// alert(age);
// alert(course);



//===========Task:5
// var one = "PIZZA\n PIZZ\n PIZ\n PI\n P\n";
// alert(one);


//===========Task:6
// var email = "My email address is zainkhan8048@gmail.com";
// alert(email);


//===========Task:7
// var book = "A smarter way to learn JavaScript";
// alert(book);



//===========Task:8
// var show = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
// alert(show);



// =================Chapter: 3


//===========Task:1
// var age = "I am 25yrs old";
// alert(age);


//===========Task:2
// var age = "I am 25yrs old";
// alert(age);



// =================Chapter: 4

//===========Task:1

// document.write("A heading stating Rules for naming JS variables" + "<br>" + "Variable names can only contain letters, numbers, dollar sign and underscores");


//===========Task:2
// var [a, b, c, d] = [0, 1, 2, 3]
// alert([a, b, c, d]);


// =================Chapter: 5

//===========Task:1

// var y = 3 + 5;
// alert(y);
// document.write("Sum of 3 and 5 is 8");


//===========Task:2
// var y = 5 - 2;
// alert(y);


//===========Task:3
// var y = 5 * 2;
// alert(y);


//===========Task:4
// var y = 10 % 2;
// alert(y);

// =================Chapter: 6-9


//===========Task:1=============
// var a = 10;
// var b = a++;
// alert(a);

// var a = 11;
// var b = ++a;
// alert(a);


// var a = 11;
// var b = a--;
// alert(b);

// var a = 11;
// var b = --a;
// alert(b);

//===========Task:2=============

// var a = 2;
// var b = 1
// var result = --a - --b + ++b + b--;
// alert(result);


//===========Task:3=============

// var a = prompt("Write your greeting message")
// alert(a);

// var age = +prompt("Enter your age");
// if (age == 14) {
//     prompt("Your age is equal")
// } else if (age < 14) {
//     alert("Your age is less")
// } else {
//     alert("Your age is more")
// }



//===========Task:5=============
// var num1 = +prompt("Enter a number");


// for (var i = 1; i <= 10; i++) {
//     document.write(num1 + "x" + i + "=" + num1 * i + "<br/>")
// }





//===========Task:6=============

// var subject1 = +prompt("Enter subject 1");
// var subject2 = +prompt("Enter subject 2");
// var subject3 = +prompt("Enter subject 3");

// var total = 100;

// var sub1obtained = +prompt("Enter" + subject1 + "Marks")
// var sub2obtained = +prompt("Enter" + subject2 + "Marks")
// var sub3obtained = +prompt("Enter" + subject3 + "Marks")
// var totalmarksobtained = (sub1obtained + sub2obtained + sub3obtained);
// var percen = (totalmarksobtained / 300) * total;

// document.write("Your total marks is" + totalmarksobtained + "<br/>")
// document.write("Your total percentage is" + percen)




// =================Chapter: 9-11

//===========Task:1=============

// var x = prompt("Enter your city");
// if (x === "karachi") {
//     alert("Welcome to city of lights")
// }

//===========Task:2============= 


// var x = prompt("Enter your gender");
// if (x === "male") {
//     alert("Good morning Sir!")
// } else if (x === "female") {
//     alert("Good morning ma'am")
// } else {
//     alert("Not found")
// }


//===========Task:3============= 

// var x = prompt("Signal colour");
// if (x === "red") {
//     alert("Must Stop!")
// } else if (x === "green") {
//     alert("Ready to move!")
// } else if (x === "yellow") {
//     alert("Move now!")
// } else {
//     alert("not found")
// }



//===========Task:4============= 

// var x = prompt("Enter remaining fuel");
// if (x < "0.25") {
//     alert("Please refill the fuel in your car")
// } else {
//     alert("No need")
// }


//===========Task:6=============

// var subject1 = prompt("Enter subject 1");
// var subject2 = prompt("Enter subject 2");
// var subject3 = prompt("Enter subject 3");



// var sub1obtained = +prompt("Enter" + " " + subject1 + "Marks")
// var sub2obtained = +prompt("Enter" + " " + subject2 + "Marks")
// var sub3obtained = +prompt("Enter" + " " + subject3 + "Marks")
// var total = 300;
// var totalmarksobtained = (sub1obtained + sub2obtained + sub3obtained);
// var percent = (totalmarksobtained / total) * 100;

// var percent = +prompt("Enter your percent")
// if (percent >= 80 && percent <= 100) {
//     alert("A+")
// } else if (percent >= 70 && percent <= 80) {
//     alert("A")
// } else if (percent >= 60 && percent <= 70) {
//     alert("B")
// } else if (percent >= 50 && percent <= 60) {
//     alert("C")
// } else if (percent >= 40 && percent <= 50) {
//     alert("D")
// } else if (percent >= 33 && percent <= 40) {
//     alert("E")
// } else if (percent >= 0 && percent <= 33) {
//     alert("F")
// } else {
//     alert("You didnot write correct percentage")
// }

// document.write("<h1>MARK SHEET</h1>")
// document.write("Total marks is 300" + "<br/>")
// document.write("Your obtained marks is" + " " + totalmarksobtained + "<br/>")
// document.write("Your percentage is" + " " + percent + "<br/>")



//===========Task:11=============

// var val1 = prompt("Enter first value");
// var sign = prompt("Enter operator");
// var val2 = prompt("Enter second value");

// console.log(val1 + sign + val2)
// if (sign === '+') {
//     alert((+val1) + (+val2));
// } else if (sign === '-') {
//     alert(val1 - val2)
// } else if (sign === '*') {
//     alert(val1 * val2)
// } else if (sign === '/') {
//     alert(val1 / val2)
// }


// ==============Chapter: 12-13===============

//===========Task:1=============

// var s = 'Hello World';
// document.write(s.charCodeAt(2));