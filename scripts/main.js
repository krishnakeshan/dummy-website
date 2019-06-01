var myHeading = document.querySelector('h1')
var myButton = document.querySelector('button')

//function to store the user's name
function setUserName() {
  var userName = prompt("Please enter your username: ");
  localStorage.setItem('name', userName);
  myHeading.textContent = "Mozilla is cool, " + userName;
}

//check if name is already stored
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  myHeading.textContent = "Welcome back, " + localStorage.getItem('name'))
}

myButton.onclick = function() {
  setUserName()
}
