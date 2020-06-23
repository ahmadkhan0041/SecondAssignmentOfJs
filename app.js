// =========== AHMAD KHAN ============ //

// =============CHAPTER 21 TO 25=================//

//=====TASK ONE=====//

// var first = prompt(" Enter Your First Name?");
// var second = prompt("Enter Your Last Name?");
// var fullName = first + " " + second;
// document.write(fullName);

// ======TASK TWO====== //


// var value = prompt("Please Enter Your Favorite Mobile Model?");
// var totalLength = value.length;
// document.write("Total Length of String is :" + totalLength);


// ========TASK THREE======== //



// var value = "Pakistani";
// var rzlt = value.indexOf("n");
// document.write(value + "<br>");
// document.write("Index of 'n' : " + rzlt);

// =======TASK FOUR======= //


// var firstValue = "Hello World";
// var lastValue = firstValue.lastIndexOf("l");
// document.write("String" +firstValue + "<br>");
// document.write("Last index of 'l' :" + lastValue);

// =======TASK FIVE======== //



// var valueOne = "Pakistani";
// var valueTwo = valueOne.charAt(3);
// document.write("String :" + valueOne + "<br>");
// document.write("Character at index 3: " + valueTwo);


// ======== TASK SIX ========= //


// var str1 = "Ahmad";
// var str2 = "Khan";
// str2 = str1.concat(str2);
// document.write(str2);


// ======= TASK SEVEN ======== //



// var city = "Hyderabad";
// var aftercity = city.replace("Hyder", "Islam");
// document.write(city + "<br>")
// document.write(" After Replacement :" + aftercity);


// ======= TASK EIGHT ======== //


// var strAll = "Ali and Sami are best friends. They play cricket and football together";
// var rzlt = strAll.replace(/and/gi, "&");
// document.write(rzlt);

// ======= TASK NINE ======== //


// var x = "123";
// var y = +x;
// document.write("Value :" + x + "<br>" + "Type :" + typeof x + "<br>");
// document.write("Value :" + x + "<br>" + "Type :" + typeof y);


// ========== TASK TEN ========== //


// var uInput = prompt("Please Enter Your Value Here?");
// uInput = uInput.toUpperCase();
// document.write(uInput);


// =========== TASK ELEVEN =========== //



// var title = prompt("Hey Please Enter YOur Value Here?");
// var newSave = title;
// document.write("User Input :   " + title + "<br>");
// title = title.charAt(0).toUpperCase() + title.slice(1);
// document.write(" Title Case : " + title);

// ============ TASK TWALE =========== //


// var num = 35.36;
// var newString;
// document.write("Number: " + num + "<br>");
// document.write("Result: " + (num + '').replace('.', ''));


// ========== TASK THIRTEEN =========== //


// var value = prompt("Enter Your Username ?");

// if (value.indexOf('!') !== -1 || value.indexOf('@') !== -1 || value.indexOf(",") !== -1 || value.indexOf(".") !== -1) {
//     alert("Please enter a valid username");
// } else {
//     alert("thanks for correct input")
// }


// ========== TASK FOURTEEN ========== //



// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Hey buddy! What do you want to order?");

// var rzlt = userInput.toLowerCase();
// for (var i = 0; i < userInput.length; i++) {
//     if (arr[i] === rzlt) {
//         document.write(arr + "it's avalible to Index of");
//     } else {
//         document.write("We are Sorry it's not avalible in our bakery");
//     }
//     break;
// }


// ============== NOT RESOLVED TASK NO FOURTEEN ================ //


// ============== TASK FIFTEEN ============== //



// var inputvalue = prompt("Enter  password");
// var pass = checkpass(inputvalue);
// if (pass) {
//     alert("password is oky");
// } else {
//     alert("please enter a valid password");
// }

// function checkpass(inputvalue) {
//     var result = /^[0-9A-Za-z]+$/;
//     if (inputvalue.match(result)) {
//         if (inputvalue.charAt(0) != 'c' && inputvalue.length > 6) {
//             return true;
//         }
//     }
//     return false;
// }


// ================== TASK SIXTEEN ================= //

// var university = "University of Karachi";
// for (var i = 0; i < university.length; i++) {
//     var result = university.charAt(i) + "<br>";
//     document.write(result);
// }

// ================== TASK SEVENTEEN ================= //


// var pak = prompt('');
// var res = pak.charAt(pak.length - 1);
// document.write(res);

// ================== TASK EIGHTEEN ================= //



// var text = "The quick brown for jups over the lazy dog";
// var count;
// for (var i = 0; i < text.length; i++) {

//     if (text.charAt(i) === "The") {
//         count++;
//     }

// }

// document.write(text + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the' ");

// ======== NOT COMPLETE ========== //






// ================== Chapter 26 to 30 ====================== //



// ================== TASK ONE ================= //

// number = 3.45214; 
// document.write("number :" + number + "<br>"); 
// ====== ROUND MATHED ====== //
// document.write("Round of Value :" + Math.round(number) + "<br>"); 
// var number = 3.45214;
// ====== FLOOR MATHED ====== //
// document.write("floor value :" + Math.floor(number) + "<br>"); 
// var number = 3.45214;
// ====== CEIL MATHED ====== //
// document.write("Ceil :" + Math.ceil(number) + "<br>"); 


// ================== TASK TWO ================= //



// var userInput = prompt("Hey Please Enter The Number Here?")
// document.write("Number :" + userInput + Math.round(userInput) + "<br>");
// document.write("Round Of Value :" + userInput + Math.floor(userInput) + "<br>");
// document.write("Floor Value :" + userInput + Math.ceil(userInput) + "<br>");
// document.write("Ceil Value :" + userInput + Math.ceil(userInput) + "<br>");

// ================== TASK THREE ================= //


// var x = -4;
// var y;
// if (x < 0) {
//     y = x * -1;
// }
// document.write("Absolute value of " + x + " is " + y);


// ================== TASK FOUR ================= //



// var x = 4;
// var num = Math.floor(Math.random() * 6);
// document.write("Random Dice Number is :" + x + "<br>" + "random dice Value :" + num);

// ================== TASK FOUR =================


// var firstUser = "Heads";
// var secondUser = "Tails";

// var randomNumber = Math.floor(Math.random() * 2) + 1;
// if (randomNumber === 2) {
//     document.write("Random Coin Number: " + randomNumber)
// } else {
//     document.write("Random Coin Number: " + randomNumber);
// }


// ================== TASK FIVE ================= //


// var arr = [];
// while (arr.length < 8) {
//     var r = Math.floor(Math.random() * 100) + 1;
//     if (arr.indexOf(r) === -1) arr.push(r);
// }
// document.write("Random number 1 to 100 : "+arr);

// ================== TASK SIX ================= //

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
//  Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms

// var userInput = parseInt(prompt("Hey Please Enter Your Weight?"));


// ========= NOT RESOVLED ========== //































// ======================= CHAPTER 31 TO 34 ======================== //

//  ================= TASK ONE ================= //

// 1. Write a program that displays current date and time in your browser.

// var a = new Date();
// document.write(a);




// ================ TASK TWO ============== //


// 2. Write a program that alerts the current month in words.For example December.

// var monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// var d = new Date();
// document.write("The current month is : " + monthNames[d.getMonth()]);




// ================ TASK THREE ================ //


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun.

// var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// var d = new Date();
// var currentDay = weekDays[d.getDay()];
// alert("Today is " + currentDay);





// ================= TASK FOUR ================= //


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var userInput = prompt("Please Enter The Day Here?");
// var weekDays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// if (userInput === "sunday" || userInput === "saturday") {
//     document.write("Today's Fun Day");
// } else {
//     document.write("Today's Very Busy Day Waiting Till Saturday & Sunday");
// }




// ================= TASK FIVE ================== //


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var userInput = prompt("Hey Please Enter Your number Here!")
// var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// var now = new Date();
// var theDay = now.getDate();
// if (userInput <= 15) {
//     document.write("First Fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }


// =============== TASK SIX =============== //


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var midnight = 1970;
// var date = new Date();
// document.write(date + "<br>");
// var n = date.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + n + "<br>");
// var mins = date.getMinutes();
// document.write("Elapsed Minutes Since January 1, 1970" + mins);


// ============== TASK SEVEN ============= //

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.



// var hours = new Date().getHours();
// var hours = (hours + 24 - 2) % 24;
// var mid = " AM";
// if (hours == 0) {
//     hours = 12;
// } else if (hours > 12) {
//     hours = hours % 12;
//     mid = " PM";
// }
// document.write("It's: " + hours + mid   );





// ============= TASK EIGHT ============= //


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named laterDate.

// var date = new Date();
// var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
// document.write("Last Date of this month :" +
//     lastDay)







// ============= TASK NINE ============== //

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


// var ramadanDate = new Date(2015, 6, 18);
// var current = new Date();
// var daysPassed = Math.ceil((current - ramadanDate + 1) / 86400000);
// document.write(daysPassed + " Days Have Passed since 1st Ramdan 2015")




// =============== TASK TEN =============== //


//10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var refdate = new Date(2015, 01, 05);
// var endTime = new Date();
// var timeDiff = (endTime - refdate) / 1000;
// document.write("Our Referance Date " + refdate + "<br>");
// document.write(timeDiff + "Seconds had passed since beginning of 2015");



// ============= TASK ELEVEN ============= //


// 11. Create a Date object for the current date and time. Extract the hours,
//  reset the date object an hour ahead and finally display the date object in your browser.





// ============= TASK TWALE ============= //

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();



// =============== TASK THIRTEEN =============== //

// 13. Write a program to ask the user about his age.Calculate
// and show his birth year in your browser.

// var yourAge = prompt("Hey Buddy please Enter YOur Age?");
// var currentDate = new Date();
// var ref = currentDate.getFullYear() - yourAge;
// document.write("Your Age is :" + yourAge + "<br>" + "Your birth year is :" + ref);


// ============= TASK FOURTEEN =============== //


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// var Customer_name ="Customer Name:";
// document.write(Customer_name + "  " +"Ahmad Khan" + "<br>")
// var month_name = "Month :";
// document.write( month_name + " " + "Feburuary" + "<br>" )
// var unit = "number of units :";
// document.write(unit + " " + "410" + "<br>")
// var charges_of_unit ="charges per unit :" ;
// document.write(charges_of_unit +" " + "16" + "<br>" )
// var net = "Net Amount Payable ( within Due Date )  : ";
// var num = 410 * 16 ;
// var mul = net + num;
// document.write(mul + "<br>" );
// var late_amount =  " Late Payment surcharge :"; 
// document.write (late_amount + " " + 350 +"<br>")
// var l = "Gross Amount Payable (After Due Date) : ";
// var num = 6560 + 350;
// var g = l + num ;
// document.write (g + "<br>");








// ================== CHAPTER 35 TO 38 ==================== //





// ================ TASK ONE ================ //

// 1. Write a function that displays current date & time in your browser

// function displayTime() {
//     var today = new Date();
//     var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     document.write(date);
//     document.write(time);
// }
// displayTime();

// ============== TASK TWO ============= //

/* 2. Write a function that takes first & last name and then it
greets the user using his full name.*/

// function userName() {
//     var firstName = prompt("Enter Your First Name?");
//     var secondName = prompt("Enter Your Last Name?")
//     var newVar = firstName + " " + secondName;
//     document.write(newVar);
// }
// userName();


// ============= TASK THREE ============ //
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function addNums(num1, num2, plusNm) {
//     if (plusNm == "+")
//         return Number(num1) + Number(num2);
// }

// var firstInput = prompt("First Number?");
// var secondInput = prompt("Second Number?");
// var sign = prompt("Operator Sign");
// addNums(firstInput, secondInput, sign);
// document.write("Your Answer is: " +
//     addNums(firstInput, secondInput, sign));



// ============ TASK FOUR ================ //

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function calculate(num1, num2, op) {
//     if (op == "+")
//         return Number(num1) + Number(num2);
//     else if (op == "-")
//         return num1 - num2;
//     else if (op == "*" || op == "x")
//         return num1 * num2;
//     else if (op == "/")
//         return num1 / num2;
// }
// var firstnum = prompt("First number");
// var secnum = prompt("Second number");
// var oper = prompt("Operator");

// calculate(firstnum, secnum, oper);
// document.write("Your answer is " + calculate(firstnum, secnum, oper));



// ============ TASK FIVE ============ //


// function square(number){
//     return number*number;
// }



// =========== TASK SIX ============== //

// 6. Write a function that computes factorial of a number.


// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// let n = 4;
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);




// ================= TASK SEVEN ==================//


// function factorial(n) {
//     var answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var n = +prompt("Enter the factotial number");
// answer = factorial(n)
// document.write("The factorial of " + n + " is " + answer);



// ========== TASK EIGHT =========== //

// function hypo(base, perpend) {
//     function square(v1, v2) {
//         document.write("First Value is: " + v1 + "<br>");
//         var v1Square = v1 * v1;
//         document.write("Square root of " + v1 + " is:" + v1Square + "<br><br>");
//         document.write("Second Value is: " + v2 + "<br>");
//         var v2Square = v2 * v2;
//         document.write("Square root of " + v2 + "is: " + v2Square + "<br><br>");
//         var sqrt = v1 * v1 + v2 * v2;
//         document.write("Sum of " + v1Square + " And " + v2Square + "is" + sqrt + "<br><br>");
//     }
//     square(base, perpend)
//     document.write("Hypotenuse: " + Math.hypot(base, perpend))
// }
// hypo(+prompt("Enter Base"), +prompt("Enter Perpendicular"));




// ========== TASK NINE ========== //


// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");

// function area(length, width) {
//     return length * width;
// }

// function perimeter(length, width) {
//     return 2 * (length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));
// document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));



// ========== TASK TEN ============ //

// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// var result= palindrome('madam');
// if(result){
//     alert("yes the given string is palindrom");
// } else {
//     alert("the given string is not a palindrom");
// }


// =========== TASK ELEVEN ============= //

// function uppercase(str)
//                 {
//      var array1 = str.split(' ');
//      var newarray1 = [];
//      for(var x = 0; x < array1.length; x++){
//     newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//    return newarray1.join(' ');
//       }
//     document.write(uppercase("the quick brown fox"));




// ============ TASK TWALE ============= //


// function find_longest_word(str) {
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];
//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// document.write("Example string : " + " " + "Web Development Tutorial" + "<br>")
// document.write("EXPECTED OUTPUT : " + " " + find_longest_word('Web Development Tutorial'));



// ========== TASK THIRTEEN ============//


// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// document.write(char_count('w3resource.com', 'e'));



// =============== TASK FOURTEEN =============


// function circum() {
//     var radius = +prompt("enter the radius")
//     var cirumf = 2*3.14*radius;
//     document.write("The circumference is "+" "+cirumf)
// }
// circum();
// function Area() {
//     var radius = +prompt("enter the radius")
//     var area = 3.14*radius*radius;
//     document.write("The circumference is "+" "+area)
// }
// Area();