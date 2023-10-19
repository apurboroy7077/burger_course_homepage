let function_of_join_button = () => {
  let button = document.getElementsByClassName("join_now_button")[0];
  button.addEventListener("click", () => {
    let container = document.getElementsByClassName("container")[0];
    container.classList.toggle("inactive");
    let pop_up_box = document.getElementsByClassName("popup_join_box")[0];
    pop_up_box.classList.toggle("active");
  });
};
function_of_join_button();
