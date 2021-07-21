import outsideClick from "./outsideClick.js";

export default function menuMobile() {
  const btn = document.querySelector("#header a.menu");
  const menu = document.querySelector("#header nav ul");
  const events = ["click", "touchstart"];

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    btn.classList.toggle("active");

    const iconBtn = btn.querySelector("img");
    if (menu.classList.contains("active")) {
      iconBtn.setAttribute("src", "./images/icon-close.svg");
    } else {
      iconBtn.setAttribute("src", "./images/icon-hamburger.svg");
    }
    outsideClick(menu, events, () => {
      menu.classList.remove("active");
      btn.classList.remove("active");
      if (menu.classList.contains("active")) {
        iconBtn.setAttribute("src", "./images/icon-close.svg");
      } else {
        iconBtn.setAttribute("src", "./images/icon-hamburger.svg");
      }
    });
  });
}
