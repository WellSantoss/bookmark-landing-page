export default function tabNav() {
  const links = document.querySelectorAll("#features ul li");
  const contents = document.querySelectorAll("#features .card");

  links.forEach((link, i) => {
    const a = link.querySelector("a");
    a.addEventListener("click", (e) => {
      e.preventDefault();
      removeClass(links);
      removeClass(contents);
      link.classList.add("active");
      contents[i].classList.add("active");
    });
  });

  function removeClass(elements) {
    elements.forEach((element) => {
      element.classList.remove("active");
    });
  }
}
