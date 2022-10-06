const emailInput = document.getElementById("email");
const submit = document.getElementById("submit");
const errorMessage = document.getElementById("error-message");

console.log("got it", emailInput.value);

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(emailInput.value.trim())) {
    errorMessage.classList.remove("show");
  } else {
    errorMessage.classList.add("show");
  }
}

submit.addEventListener("click", checkEmail);
