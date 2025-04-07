let nameError = document.getElementById("nameError");
let phoneError = document.getElementById("phoneError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");
let submitError = document.getElementById("submitError");

function validateName() {
  let name = document.getElementById("userName").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Write full name (first and last)";
    return false;
  }

  nameError.innerHTML = `<i class="fa-solid fa-circle-check fa-2x" style="color: #2f8b57;"></i>`;
  return true;
}

function validateNumber() {
  let number = document.getElementById("userNumber").value;

  if (number.length === 0) {
    phoneError.innerHTML = "Phone no is required";
    return false;
  }

  if (number.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }

  if (!number.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits please.";
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check fa-2x" style="color: #2f8b57;"></i>`;
  return true;
}

function validateEmail() {
  let email = document.getElementById("userEmail").value;

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
    emailError.innerHTML = "Enter a valid email";
    return false;
  }

  emailError.innerHTML = `<i class="fa-solid fa-circle-check fa-2x" style="color: #2f8b57;"></i>`;
  return true;
}

function validateMessage() {
  let message = document.getElementById("userMessage").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " more characters required.";
    return false;
  }

  messageError.innerHTML = `<i class="fa-solid fa-circle-check fa-2x" style="color: #2f8b57;"></i>`;
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validateNumber() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.style.color = "red"
    submitError.style.margin = "0px auto";
    submitError.innerHTML = "Please fix errors to submit.";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  submitError.style.display = "block";
  submitError.style.color = "green";
  submitError.innerHTML = "Form submitted successfully!";
  return false;
}
