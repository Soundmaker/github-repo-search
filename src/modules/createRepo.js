import { createElement } from "./createElement";

export const createRepo = (item) => {
  let li = createElement("li", {
    className: "search__item",
  });

  createElement(
    "img",
    {
      className: "search__avatar",
      src: item.owner.avatar_url,
      alt: "Аватар",
    },
    {
      parent: li,
    }
  );

  createElement(
    "h2",
    {
      className: "search__title",
    },
    {
      parent: li,
      append: createElement("a", {
        className: "search__link",
        target: "_blank",
        href: item.clone_url,
        textContent: item.name,
      }),
    }
  );
  createElement(
    "div",
    {
      className: "search__sub-title",
    },
    {
      parent: li,
      append: createElement("a", {
        className: "search__sub-link",
        target: "_blank",
        href: item.owner.html_url,
        textContent: "Автор: " + item.owner.login,
      }),
    }
  );

  createElement(
    "div",
    {
      className: "search__text",
      textContent: item.description,
    },
    {
      parent: li,
    }
  );

  return li;
};
