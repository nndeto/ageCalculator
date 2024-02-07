// get elements we want to manipulate
let button = document.getElementById("submit")
let dayInput = document.getElementById("day")
let dayError = document.getElementById("day-error")
let monthInput = document.getElementById("month")
let monthError = document.getElementById("month-error")
let yearInput = document.getElementById("year")
let yearError = document.getElementById("year-error")
let yearText = document.getElementsByClassName("year-text")
let monthText = document.getElementsByClassName("month-text")
let dayText = document.getElementsByClassName("day-text")

// generic test function
function testMe(e) {
    console.log("hello")
    // console.log(dayInput.value)
    // console.log(monthInput.value)
    // console.log(yearInput.value)
}

function stopDefault(e) {
    e.preventDefault() //prevent page reloading
    return
}

// functions for logic
let allInputs = [dayInput, monthInput, yearInput]
let allErrors = [dayError, monthError, yearError]

function notBlank(e) {
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == "") {
            console.log("blank")
            allErrors[i].innerText = `Please fill out this field.`
        }
    }
}

function setDate() {
    let dateInput = `${yearInput.value}/${monthInput.value}/${dayInput.value}`
    console.log(dateInput)
    let dateObj = new Date(dateInput)
    validateDate(dateObj)
}

function validateDate(dateObj) {
    let currentDate = new Date();
    let isValid = true; 
    if (dateObj instanceof Date && !isNaN(dateObj)) {
        if (dateObj > currentDate) {
            console.log("This date is in the future and therefore invalid")
        } else {
            // if the date object is valid and not in the future we'll go to display functions
            console.log("We reached the display message step")
        }
    } else {
        // if the date object is not valid we need to display appropriate error messages
        console.log("We have hit the invalid date create error messages step")
    }

    // let currentDate = new Date();
    // let isValid = true;

    // // Check if dateObj is a valid date object
    // if (!(dateObj instanceof Date) || isNaN(dateObj)) {
    //     console.log("Invalid date format");
    //     isValid = false;
    // } else {
    //     // Check if date is in the future
    //     if (dateObj > currentDate) {
    //         console.log("This date is in the future and therefore invalid");
    //         isValid = false;
    //     } else {
    //         // Extract day, month, and year components
    //         let year = dateObj.getFullYear();
    //         let month = dateObj.getMonth() + 1; // Month is zero-based
    //         let day = dateObj.getDate();

    //         // Check for invalid years
    //         if (year < 1000 || year > 9999) {
    //             console.log("Invalid year");
    //             isValid = false;
    //         }

    //         // Check for invalid months
    //         if (month < 1 || month > 12) {
    //             console.log("Invalid month");
    //             isValid = false;
    //         }

    //         // Check for invalid days based on the month
    //         if (day < 1 || day > daysInMonth(month, year)) {
    //             console.log("Invalid day for the given month");
    //             isValid = false;
    //         }
    //     }
    // }

    if (isValid) {
        console.log("This date is acceptable");
    }
}

// Function to calculate the number of days in a month
function daysInMonth(month, year) {
    if (month === 2) {
        // Check for leap year
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return 29; // February in a leap year
        } else {
            return 28; // February in a non-leap year
        }
    } else if ([4, 6, 9, 11].includes(month)) {
        return 30; // April, June, September, November
    } else {
        return 31; // All other months
    }
}


// grand function to hold all logic
function onSubmission(e) {
    stopDefault(e)
    testMe()
    notBlank()
    setDate()
}

//functions for display

// function blankTextError() {

// }


// add event listener to button
// button.addEventListener('click', testMe)
button.addEventListener('click', onSubmission)

// let date = new Date();
// console.log(date)



// const date = new Date("02/31/2023");
 
// Date.prototype.isValid = function () {
 
//     // If the date object is invalid it
//     // will return 'NaN' on getTime()
//     // and NaN is never equal to itself
//     return this.getTime() === this.getTime();
// };
 
// function isValidateDate() {
//     console.log(date.isValid());
// }
 
// isValidateDate();