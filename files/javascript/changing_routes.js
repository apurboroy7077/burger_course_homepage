import data from "./database.js";
let router = () => {
  let page = document.location.hash;
  let main = document.getElementsByTagName("main")[0];
  if (page == "#/privacy_policy") {
    main.innerHTML = data.privacy_policy_page;
  }
  console.log("Hello");
};
window.addEventListener("hashchange", router);
window.addEventListener("load", router);
