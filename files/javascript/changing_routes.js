import data from "./database.js";
import function_of_join_button from "./join_button_function.js";
let other_functions = () => {
  function_of_join_button();
};
let router = () => {
  let page = document.location.hash;
  let main = document.getElementsByTagName("main")[0];
  if (page == "") {
    main.innerHTML = data.homepage;
  }
  if (page == "#/privacy_policy") {
    main.innerHTML = data.privacy_policy_page;
  }
  other_functions();
};
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
