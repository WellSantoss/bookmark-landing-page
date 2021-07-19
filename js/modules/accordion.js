export default function accordion() {
  const questions = document.querySelectorAll("#faq dt");

  questions.forEach((question) => {
    question.addEventListener("click", (e) => {
      e.preventDefault();
      question.classList.toggle("active");
      question.nextElementSibling.classList.toggle("active");
    });
  });
}
