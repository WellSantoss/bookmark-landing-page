export default function scrollAnim() {
  const elements = document.querySelectorAll("[data-anime='scroll']");

  if (elements.length) {
    const window75 = window.innerHeight * 0.75;

    function scrollAnim() {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const isVisible = elementTop - window75;

        if (isVisible < 0) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    }
    scrollAnim();
    window.addEventListener("scroll", scrollAnim);
  }
}
