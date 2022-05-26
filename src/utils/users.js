import http from "@/utils/http-common.js";

export const getUsers = () => http.get("rekrutacja-it-13218314324/data.json");
export const addUserClass = (element, className) =>
  document.querySelector(`#${element}`).classList.add(className);
export const removeUserClass = (element, className) =>
  document.querySelector(`#${element}`).classList.remove(className);
