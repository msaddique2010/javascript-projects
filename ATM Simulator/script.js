let input = document.querySelector(".input")


let btn1 = document.getElementsByClassName("atm-btn")[0]
let btn2 = document.getElementsByClassName("atm-btn")[1]
let btn3 = document.getElementsByClassName("atm-btn")[2]
let btn4 = document.getElementsByClassName("atm-btn")[3]
let btn5 = document.getElementsByClassName("atm-btn")[4]
let btn6 = document.getElementsByClassName("atm-btn")[5]
let btn7 = document.getElementsByClassName("atm-btn")[6]
let btn8 = document.getElementsByClassName("atm-btn")[7]
let btn9 = document.getElementsByClassName("atm-btn")[8]
let backSpace = document.getElementsByClassName("atm-btn")[9]
let btn0 = document.getElementsByClassName("atm-btn")[10]
let done = document.getElementsByClassName("atm-btn")[11]

btn1.addEventListener("click", function () {
    input.value += 1;
});

btn2.addEventListener("click", function () {
    input.value += 2;
});

btn3.addEventListener("click", function () {
    input.value += 3;
});

btn4.addEventListener("click", function () {
    input.value += 4;
});

btn5.addEventListener("click", function () {
    input.value += 5;
});

btn6.addEventListener("click", function () {
    input.value += 6;
});

btn7.addEventListener("click", function () {
    input.value += 7;
});

btn8.addEventListener("click", function () {
    input.value += 8;
});

btn9.addEventListener("click", function () {
    input.value += 9;
});

btn0.addEventListener("click", function () {
    input.value += 0;
});

backSpace.addEventListener("click", function () {
    input.value = input.value.slice(0, -1);
})

// -------------------------- Add Accounts --------------------------
done.addEventListener("click", function () {
    
    // -- 1st Account --
    if (Number(input.value) === 123456789) {
        let pin = prompt("Enter 4 digit PIN: ")
        if (pin == 1234) {
            window.location.href = "1st_main.html"
        }
        else {
            alert("Pin is wrong, Try Again")
        }
    }

    // -- 2st Account --
    else if(Number(input.value) === 987654321) {
        let pin = prompt("Enter 4 digit PIN: ")
        if (pin == 4321) {
            window.location.href = "2nd_main.html"
        }
        else {
            alert("Pin is wrong, Try Again")
        }
    }
    
    else {
        alert("Wrong ATM Number")
    }
})