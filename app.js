const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (...nums) {
  if (nums.length > 2) {
    return nums.reduce((total, num) => {
      return total * num;
    }, 1);
  } else {
    return nums[0] * nums[1];
  }
};

const divide = function (a, b) {
  return a / b;
};

let num1, num2, op;

let buttonArr = [];
let container = document.querySelector("#buttons");
for (let i = 0; i < 3; i++) {
  let horizontal = document.createElement("div");
  horizontal.classList.add("horizontal");
  for (let j = 0; j < 4; j++) {
    if (j < 3) {
      let button = document.createElement("button");
      //button.style.width = button.style.height = "44px";
      button.textContent = i * 3 + j + 1;
      horizontal.appendChild(button);
      buttonArr.push(button);
    } else {
      let button = document.createElement("button");
      let op;
      switch (i) {
        case 0:
          op = "+";
          break;
        case 1:
          op = "-";
          break;
        case 2:
          op = "/";
          break;
      }

      button.textContent = op;
      //button.style.width = button.style.height = "44px";
      buttonArr.push(button);
      horizontal.appendChild(button);
    }
  }

  container.appendChild(horizontal);
}
let lastCont = document.createElement("div");
let equals = document.createElement("button");
let clear = document.createElement("button");
let multiple = document.createElement("button");
let zero = document.createElement("button");
// equals.style.width =
//   equals.style.height =
//   clear.style.width =
//   clear.style.height =
//   multiple.style.width =
//   multiple.style.height =
//   zero.style.height =
//   zero.style.width =
//     "44px";
equals.textContent = "=";
equals.addEventListener("click", operate);
clear.textContent = "C";
clear.addEventListener("click", () => {
  display.value = "";
});
multiple.textContent = "*";
zero.textContent = "0";
buttonArr.push(multiple);
buttonArr.push(zero);
lastCont.appendChild(equals);
lastCont.appendChild(zero);
lastCont.appendChild(clear);
lastCont.appendChild(multiple);
container.appendChild(lastCont);

for (let i = 0; i < buttonArr.length; i++) {
  buttonArr[i].addEventListener("click", () => {
    enterNum(buttonArr[i].textContent);
  });
}

const display = document.querySelector("#display");

function enterNum(num) {
  display.value = display.value + num.toString();
}

function operate() {
  let expArr = Array.from(display.value);
  let num1 = "",
    num2 = "",
    op,
    num = 1;
  for (let i = 0; i < expArr.length; i++) {
    if (isNaN(expArr[i])) {
      op = expArr[i];
    } else {
      if (num == 1) {
        num1 += expArr[i].toString();
        if (isNaN(expArr[i + 1])) {
          num++;
        }
      } else {
        num2 += expArr[i].toString();
      }
    }
  }

  num1 = parseInt(num1);
  num2 = parseInt(num2);
  console.log(num1 + op + num2);

  switch (op) {
    case "+":
      display.value = add(num1, num2);
      break;
    case "-":
      display.value = subtract(num1, num2);
      break;
    case "/":
      display.value = divide(num1, num2);
      break;
    case "*":
      display.value = multiply(num1, num2);
      break;
  }
}
