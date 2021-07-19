export default function smoothScroll() {
  const internalLinks = document.querySelectorAll("a[href^='#'");

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollTo);
  });

  function scrollTo(e) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
