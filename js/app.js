const signupForm = document?.getElementById("signup-form");

/*
 * Validates an email address entered in a signup form.
 *
 * @param {string} emailFound - The email address to validate.
 * @returns {boolean} - True if the email address is valid, false otherwise.
 */
const validateEmail = (emailFound) => {
  const emailPattern =
    /^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9]+\.(com|org|net|edu|gov|mil|info|biz|co|io|me|tv|in)$/;

  return emailPattern.test(emailFound);
};

const submitForm = () => {
  if (!signupForm.classList.contains("warning")) {
    console.log("form is ready to get submitted");
  }
};

const handleInput = (event) => {
  const emailFound = event.target.value.trim();

  if (emailFound === "" || validateEmail(emailFound)) {
    signupForm.classList.remove("warning");
    event.target.setCustomValidity("");
  } else {
    signupForm.classList.add("warning");
    event.target.setCustomValidity("valid email required");
  }
};

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm();
});

signupForm.addEventListener("input", handleInput);
