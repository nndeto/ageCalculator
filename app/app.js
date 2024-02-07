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
    console.log(dayInput.value)
    console.log(monthInput.value)
    console.log(yearInput.value)
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



// grand function to hold all logic
function onSubmission(e) {
    stopDefault(e)
    testMe()
    notBlank()
}

//functions for display

function blankTextError() {

}


// add event listener to button
// button.addEventListener('click', testMe)
button.addEventListener('click', notBlank)
