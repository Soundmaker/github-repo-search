import "./index.html";
import "./index.scss";
import { formController } from "./modules/formController";

const form = document.querySelector(".form");
const formSearch = document.querySelector(".form__search-list");

window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    formController(form, formSearch);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formController(form, formSearch);
});
