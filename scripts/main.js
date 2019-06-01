var myHeading = document.querySelector('h1')
var myButton = document.querySelector('button')

function setUserName() {
  var userName = prompt("Please enter your username: ");
  localStorage.setItem("name", userName);
  myHeading.textContent = "Mozilla is cute, " + userName;
}
