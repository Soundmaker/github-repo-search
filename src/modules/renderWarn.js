import { createElement } from "./createElement";

export const renderWarn = (text, parent) => {
  let warn = createElement(
    "span",
    {
      className: "form__warning",
      textContent: `${text}`,
    },
    {
      parent: parent,
    }
  );

  return warn;
};
