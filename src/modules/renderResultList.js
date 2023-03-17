import { createRepo } from "./createRepo";
import { createElement } from "./createElement";

export const renderResultList = (arr, parent) => {
  parent.innerHTML = "";

  if (arr === null || arr === undefined) {
    createElement(
      "p",
      {
        className: "search__empty-title",
        textContent: "Ошибка загрузки",
      },
      {
        parent: parent,
      }
    );
  } else if (arr.length === 0) {
    createElement(
      "p",
      {
        className: "search__empty-title",
        textContent: "Ничего не найдено",
      },
      {
        parent: parent,
      }
    );
  } else {
    let ul = createElement(
      "ul",
      {
        className: "search__list",
      },
      {
        parent: parent,
      }
    );
    arr.map((item) => {
      ul.append(createRepo(item));
    });
  }
};
