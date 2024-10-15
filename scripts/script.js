"use strict";

const navbarChange = document.getElementById("navbarChange");

const principle = document.getElementById("payRateInput");
const monthlyInterestRate = document.getElementById("interestRateInput");
const numberOFMonth = document.getElementById("monthInput");
const calculation = document.getElementById("calculate");
const mortgageDiv = document.getElementById("mortgageAmount");
const numberAndSigns = document.getElementById("numberAndSigns");

const listButton = document.getElementById("listButton");

const desktopNav = document.getElementById("desktopNav");

const closed = document.querySelector(".close");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    navbarChange.classList.add("changeOpacity");
  } else {
    navbarChange.classList.remove("changeOpacity");
  }
});

function mortgage() {
  let payFieldValue = parseFloat(principle.value);
  let interestFieldValue = parseFloat(monthlyInterestRate.value);
  let monthFieldValue = parseInt(numberOFMonth.value);
  mortgageDiv.innerText = "Please enter your savings, loan and durations";

  if (isNaN(payFieldValue) || isNaN(interestFieldValue) || isNaN(monthFieldValue)) {
    mortgageDiv.innerText = "Please input a valid number";
  } else {
    let monthsRate = interestFieldValue / 100 / 12;
    let mortgageRating = (payFieldValue * monthsRate) / (1 - Math.pow(1 + monthsRate, -monthFieldValue));

    let total = 0.0;
    for (let i = 0; i < monthFieldValue; i++) {
      let sum = payFieldValue * monthsRate;
      total += sum;
      let paymentPrincipal = mortgageRating - sum;
      payFieldValue - paymentPrincipal;
    }

    //    let ratings = payFieldValue + interestFieldValue + monthFieldValue

    mortgageDiv.innerText =
      "Your monthly payment will be: $ " + mortgageRating.toFixed(2) + "Total interest paid $ " + total.toFixed(2);
  }
}

function mortgageYearly() {
  let payFieldValue = parseFloat(principle.value);
  let interestFieldValue = parseFloat(monthlyInterestRate.value);
  let monthFieldValue = parseInt(numberOFMonth.value);
  mortgageDiv.innerText = "Please enter your savings, loan and durations";

  if (isNaN(payFieldValue) || isNaN(interestFieldValue) || isNaN(monthFieldValue)) {
    mortgageDiv.innerText = "Please input a valid number";
  } else {
    let monthsRate = interestFieldValue / 100 / 1;
    let mortgageRating = (payFieldValue * monthsRate) / (1 - Math.pow(1 + monthsRate, -monthFieldValue));

    let total = 0.0;
    for (let i = 0; i < monthFieldValue; i++) {
      let sum = payFieldValue * monthsRate;
      total += sum;
      let paymentPrincipal = mortgageRating - sum;
      payFieldValue - paymentPrincipal;
    }

    //    let ratings = payFieldValue + interestFieldValue + monthFieldValue

    mortgageDiv.innerText =
      "Your yearly payment will be: $ " + mortgageRating.toFixed(2) + "Total interest paid $ " + total.toFixed(2);
  }
}

function mortgageDaily() {
  let payFieldValue = parseFloat(principle.value);
  let interestFieldValue = parseFloat(monthlyInterestRate.value);
  let monthFieldValue = parseInt(numberOFMonth.value);
  mortgageDiv.innerText = "Please enter your savings, loan and durations";

  if (isNaN(payFieldValue) || isNaN(interestFieldValue) || isNaN(monthFieldValue)) {
    mortgageDiv.innerText = "Please input a valid number";
  } else {
    let monthsRate = interestFieldValue / 100 / 365;
    let mortgageRating = (payFieldValue * monthsRate) / (1 - Math.pow(1 + monthsRate, -monthFieldValue));

    let total = 0.0;
    for (let i = 0; i < monthFieldValue; i++) {
      let sum = payFieldValue * monthsRate;
      total += sum;
      let paymentPrincipal = mortgageRating - sum;
      payFieldValue - paymentPrincipal;
    }

    //    let ratings = payFieldValue + interestFieldValue + monthFieldValue

    mortgageDiv.innerText =
      "Your daily payment will be: $ " + mortgageRating.toFixed(2) + "Total interest paid $ " + total.toFixed(2);
  }
}

function fvc() {
  const amountInput = document.getElementById("amountInput");
  const rateInput = document.getElementById("rateInput");
  const periodInput = document.getElementById("periodInput");
  const futureValueDisplay = document.getElementById("futureValueDisplay");

  let presentValueInputField = Number(amountInput.value);
  let rateInputField = Number(rateInput.value);
  let yearlyPeriodInputField = Number(periodInput.value);

  //                           yearly/annual
  let convert = rateInputField / 100 / 1;

  if (isNaN(presentValueInputField) || isNaN(rateInputField) || isNaN(yearlyPeriodInputField)) {
    futureValueDisplay.innerText = "Please input your numbers in all three inputs!";
  } else {
    //   let futureTotalValue =  presentValueInputField * Math.pow((1 +  convert), yearlyPeriodInputField);
    //      FV:Future Value  =      PV               times
    let futureTotalValue = presentValueInputField * (1 + convert) ** yearlyPeriodInputField;

    let totalInterest = 0.0;
    for (let i = 0; i < yearlyPeriodInputField; i++) {
      let sum = presentValueInputField * periodInput;
      totalInterest = totalInterest += sum;
      let paymentPrincipal = futureTotalValue + sum;
      presentValueInputField + paymentPrincipal;
    }

    futureValueDisplay.innerText = futureTotalValue.toFixed(2) + totalInterest.toFixed(2);
  }
}

function fvMonthly() {
  const amountInput = document.getElementById("amountInput");
  const rateInput = document.getElementById("rateInput");
  const periodInput = document.getElementById("periodInput");
  const futureValueDisplay = document.getElementById("futureValueDisplay");

  let presentValueInputField = Number(amountInput.value);
  let rateInputField = Number(rateInput.value);
  let yearlyPeriodInputField = Number(periodInput.value);

  //                           yearly/annual
  let convert = rateInputField / 100 / 12;

  if (isNaN(presentValueInputField) || isNaN(rateInputField) || isNaN(yearlyPeriodInputField)) {
    futureValueDisplay.innerText = "Please input your numbers in all three inputs!";
  } else {
    //   let futureTotalValue =  presentValueInputField * Math.pow((1 +  convert), yearlyPeriodInputField);
    //      FV:Future Value  =      PV               times
    let futureTotalValue = presentValueInputField * (1 + convert) ** yearlyPeriodInputField;

    let totalInterest = 0.0;
    for (let i = 0; i < yearlyPeriodInputField; i++) {
      let sum = presentValueInputField * periodInput;
      totalInterest = totalInterest += sum;
      let paymentPrincipal = futureTotalValue + sum;
      presentValueInputField + paymentPrincipal;
    }

    futureValueDisplay.innerText = futureTotalValue.toFixed(2) + totalInterest.toFixed(2);
  }
}

function fvDaily() {
  const amountInput = document.getElementById("amountInput");
  const rateInput = document.getElementById("rateInput");
  const periodInput = document.getElementById("periodInput");
  const futureValueDisplay = document.getElementById("futureValueDisplay");

  let presentValueInputField = Number(amountInput.value);
  let rateInputField = Number(rateInput.value);
  let yearlyPeriodInputField = Number(periodInput.value);

  //                           yearly/annual
  let convert = rateInputField / 100 / 365;

  if (isNaN(presentValueInputField) || isNaN(rateInputField) || isNaN(yearlyPeriodInputField)) {
    futureValueDisplay.innerText = "Please input your numbers in all three inputs!";
  } else {
    //   let futureTotalValue =  presentValueInputField * Math.pow((1 +  convert), yearlyPeriodInputField); 1st way of doing it
    //                                 or
    //      FV:Future Value  =      PV               times        line 194 is the second way of doing this
    let futureTotalValue = presentValueInputField * (1 + convert) ** yearlyPeriodInputField;

    let totalInterest = 0.0;
    for (let i = 0; i < yearlyPeriodInputField; i++) {
      let sum = presentValueInputField * periodInput;
      totalInterest = totalInterest += sum;
      let paymentPrincipal = futureTotalValue + sum;
      presentValueInputField + paymentPrincipal;
    }

    futureValueDisplay.innerText = futureTotalValue.toFixed(2) + totalInterest.toFixed(2);
  }
}

listButton.addEventListener("click", function () {
  desktopNav.classList.add("mobileView");
});

closed.addEventListener("click", function () {
  desktopNav.classList.remove("mobileView");
});
