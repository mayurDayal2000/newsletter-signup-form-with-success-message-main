const signupForm = document?.getElementById("signup-form");
const userEmailOutput = document?.getElementById("user-email");
const mainWrapper = document.querySelector("main.wrapper");
const dismissBtn = document.querySelector(".success-section button");
const emailPattern =
  /^[a-zA-Z0-9_.%+-]+@[a-zA-Z0-9]+\.(com|org|net|edu|gov|mil|info|biz|co|io|me|tv|in)$/;

const displayUserEmail = () => {
  if (!signupForm.classList.contains("warning")) {
    userEmailOutput.textContent = signupForm.email.value;
    mainWrapper.classList.remove("swipe-bwd");
    mainWrapper.classList.add("swipe-fwd");
  }
};

const handleEmailInput = (event) => {
  const enteredEmail = event.target.value.trim();
  const isValidEmail = enteredEmail === "" || emailPattern.test(enteredEmail);

  signupForm.classList.toggle("warning", !isValidEmail);
  event.target.setCustomValidity(isValidEmail ? "" : "valid email required");
};

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  displayUserEmail();
});

signupForm.addEventListener("input", handleEmailInput);

dismissBtn.addEventListener("click", () => {
  mainWrapper.classList.add("swipe-bwd");
  mainWrapper.classList.remove("swipe-fwd");
  signupForm.reset();
});
