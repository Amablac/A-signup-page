// Get the form and input elements by their IDs and classes
const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

// Log the first name input element to the console
console.log(firstName);

// Add an event listener for the form's submit event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Get the values from the input fields
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal); // Log the input values to the console

  // Function to set an error message for an input element
  const setError = (element, message) => {
    const inputBox = element.parentElement;
    const displayError = inputBox.querySelector('.err');
    displayError.innerHTML = message;
    inputBox.className = 'input-box wrong';
  }

  // Function to remove an error message for an input element
  const setSuccess = (element) => {
    const inputBox = element.parentElement;
    const displayError = inputBox.querySelector('.err');
    displayError.innerHTML = '';
    inputBox.className = '';
  }

  // Function to replace the placeholder text and apply error styles
  function replacePlaceholder(element) {
    element.placeholder = 'email@example.com';
    element.classList.add('red-placeholder');
    element.parentElement.classList.add('wrong');
  }

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    setError(firstName, 'First Name cannot be empty');
  } else {
    firstName.classList.remove('error');
    setSuccess(firstName);
  }

  // Check last name
  if (lName === '') {
    lastName.classList.add('error');
    setError(lastName, 'Last Name cannot be empty');
  } else {
    lastName.classList.remove('error');
    setSuccess(lastName);
  }

  // Check email
  if (emailVal === '') {
    replacePlaceholder(email);
    email.classList.add('error');
  } else if (!validateEmail(emailVal)) {
    email.classList.add('error');
    setError(email, 'Looks like this is not an email');
  } else {
    email.classList.remove('error');
    setSuccess(email);
  }

  // Check password
  if (passwordVal === '') {
    password.classList.add('error');
    setError(password, 'Password cannot be empty');
  } else {
    password.classList.remove('error');
    setSuccess(password);
  }
});

// Function to validate email format
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
