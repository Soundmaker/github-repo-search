import { getRepo } from "./getRepo";
import { renderResultList } from "./renderResultList";
import {validateForm} from "./validateForm";

export const formController = async (form, formSearch) => {
  const searchRequest = form.search;

  validateForm(searchRequest);

  if (searchRequest.value === '') {
    searchRequest.addEventListener('input', () => {
      validateForm(searchRequest);
    });
    return;
  };

  let arrResult = await getRepo(searchRequest.value);

  renderResultList(arrResult, formSearch);

  form.reset();
};