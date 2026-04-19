import { register } from "./auth.ts";

const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const registerForm = document.getElementById("register-form");

if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if (errorMessage && successMessage) {
      successMessage.textContent = "";
      errorMessage.textContent = "";
      try {
        await register(username, email, password);
        successMessage.textContent = "Registration successful";
        window.location.href = "/account/login.html";
      } catch (error: any) {
        errorMessage.textContent = error.message;
      }
    }
  });
}
