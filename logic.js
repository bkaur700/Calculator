let buttons = document.getElementsByTagName("button");
let input1 = document.getElementById("display");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function (e) {
    if (e.target.innerText == "=") {
      input1.value = eval(input1.value);

    } else {
      if (e.target.innerText == "C") {
        input1.value = input1.value.slice(0, input1.value.length - 1);
      } else {
        if (e.target.innerText == "AC") {
          input1.value = "";
        } else {

          let arith = ["+", "-", "*", "/"];
          let endvalue = input1.value.slice(-1);
          let display_value = input1.value;
          let newvalue = e.target.innerText;

          let includde = arith.includes(newvalue)

          if (includde) {
            if (arith.includes(endvalue)) {
              input1.value = display_value.slice(0, -1) + newvalue;
            } else {

              input1.value = display_value + newvalue;
            }

          } else {
            input1.value = display_value + newvalue;

          }

        }
      }
    }
  }
}

