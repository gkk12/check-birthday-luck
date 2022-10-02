const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
// checkNumberButton.addEventListener('click', function getValues() {
//   console.log(dateOfBirth.value);
//   console.log(luckyNumber.value);
//   console.log(typeof dateOfBirth.value);
// })

checkNumberButton.addEventListener('click', checkBirthdayIsLucky);

function checkBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const luckyNum = luckyNumber.value;
  if (dob && luckyNum) {
    if (luckyNum > 0) {
      const sum = calculateSum(dob);
      compareValues(sum, luckyNumber.value);
    }
    else {
      outputBox.innerText = "please fill positive values only";
    }
  }
  else {
    outputBox.innerText = "please fill in both the fields";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    // console.log("your birthday is lucky");
    outputBox.innerText = "your birthday is lucky 🚀 ";
  }
  else {
    outputBox.innerText = "your birthday is NOT lucky, so sad 😟";
    // console.log("your birthday is NOT lucky, so sad")
  }
}
