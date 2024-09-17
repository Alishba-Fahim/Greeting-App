function GETGREETING() {
  var name_1 = prompt("Enter your name");
  var age = prompt("Enter your age?");

  if (age >= 18) {
    document.getElementById('displayGreeding').innerHTML = ` "Welcome" ${name_1}! You are eligible to participate `;
  }

  else {
    document.getElementById('displayGreeding').innerHTML = `"Sorry" ${name_1}! you are too young to join`;
  }
}

