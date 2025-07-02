let totalAmount = document.querySelector("#balance");
let amount = document.querySelector("#amount");
let deposit = document.querySelector("#deposit");
let withdraw = document.querySelector("#withdraw");
let history = document.querySelector("#history");

// 1️⃣ Load balance and history from localStorage
totalAmount.innerText = localStorage.getItem("balance") || 0;
history.value = localStorage.getItem("history") || "";

// 2️⃣ Deposit Button
deposit.addEventListener("click", function () {
  let amt = Number(amount.value);

  if (amt > 0) {
    // Update balance
    totalAmount.innerText = Number(totalAmount.innerText) + amt;

    // Update transaction history
    history.value += `Deposited Rs. ${amt}\n`;

    // Save to localStorage
    localStorage.setItem("balance", totalAmount.innerText);
    localStorage.setItem("history", history.value);
  } else if (amt < 0) {
    alert("Negative value is not allowed.");
  }
});  

// 3️⃣ Withdraw Button
withdraw.addEventListener("click", function () {
  let amt = Number(amount.value);

  if (amt > 0) {
    let currentBalance = Number(totalAmount.innerText);
    let newBalance = currentBalance - amt;

    if (newBalance >= 0) {
      // Full withdrawal possible
      totalAmount.innerText = newBalance;
      history.value += `Withdrew Rs. ${amt}\n`;
    } else {
      // Partial withdrawal, set balance to zero
      totalAmount.innerText = 0;
      alert("Balance is insufficient. Therefore, rest amount is withdrawn.");
      history.value += `Withdrew Rs. ${currentBalance}\n`;
    }

    // Save to localStorage
    localStorage.setItem("balance", totalAmount.innerText);
    localStorage.setItem("history", history.value);
  } else if (amt < 0) {
    alert("Negative value is not allowed.");
  }
});
