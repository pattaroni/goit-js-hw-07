const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", validation);
function validation(event) {
  event.preventDefault();
  const form = event.target;
  const elements = form.elements;
  const userInfo = {};
  for (const element of elements) {
    if (element.tagName === "INPUT" && element.type != "submit") {
      const value = element.value.trim();
      if (value === "") {
        return alert("All form fields must be filled in");
      }
      userInfo[element.name] = value;
    }
  }
  form.reset();
  return console.log(userInfo);
}
