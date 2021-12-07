// import a CSS module
import classes from "./main.css";

export default () => {
  const item = document.querySelectorAll(".js-item");
  const questions = document.querySelectorAll(".question");
  const login = document.querySelector("#js-login");
  const register = document.querySelector("#js-register");

  item.forEach((i) => {
    const myInput = i.children[1];

    i.addEventListener("click", () => {
      myInput.focus();
      i.classList.add("focus");
    });

    i.addEventListener("focusout", () => {
      if (myInput.value.length == 0) {
        i.classList.remove("focus");
      }
    });
  });

  questions.forEach((i) => {
    i.addEventListener("click", () => {
      if (i.dataset.sign === "register") {
        login.classList.remove("form-box");
        login.classList.add("invis");
        register.classList.add("form-box");
        register.classList.add("no-invis");
        return;
      }

      register.classList.remove("no-invis");
      register.classList.remove("form-box");
      login.classList.remove("invis");
      login.classList.add("form-box");
    });
  });
};
