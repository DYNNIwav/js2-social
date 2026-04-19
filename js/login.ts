import { login } from "./auth.ts";

const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    if (email && password && errorMessage && successMessage) {
      errorMessage.textContent = "";
      successMessage.textContent = "";
      try {
        await login(email, password);
        successMessage.textContent = "Login successful!";
        window.location.href = "/";
      } catch (error) {
        errorMessage.textContent = "Login failed: " + error;
      }
    }
  });
}
