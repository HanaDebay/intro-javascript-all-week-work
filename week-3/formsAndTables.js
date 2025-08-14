const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const tableBody = document.querySelector("#userTable tbody");
const emailError = document.getElementById("emailError")

function submitForm(event) {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const age = ageInput.value;
  console.log(name)
  //create new row 
  const newRow = document.createElement("tr");
  newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`;
  //attach to table
  tableBody.appendChild(newRow);
  form.reset();
}
form.addEventListener("submit", submitForm);

//preventDefault used to stop the default action associated with and event from occuring.
