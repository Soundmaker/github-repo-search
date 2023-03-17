import { renderWarn } from "./renderWarn";

export const validateForm = (input) => {
  let parent = input.parentElement;
  let warn = parent.querySelector(".form__warning");
  let text = "";

  if (input.value.length > 100) {
    text = "Значение не должно превышать 100 символов";
    renderWarn(text, parent);
  }

  if (input.value === "") {
    if (warn !== null) return;

    text = "Поле не заполнено";

    renderWarn(text, parent);
  } else {
    if (warn === null) return;

    warn.remove();
  }
};
