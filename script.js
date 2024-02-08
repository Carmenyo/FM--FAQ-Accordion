document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".faq__heading");

  headings.forEach((heading, index) => {
    const item = heading.closest(".faq__item");
    const answer = item.querySelector(".faq__answer");
    const plusIcon = heading.querySelector(".icon-plus");
    const minusIcon = heading.querySelector(".icon-minus");

    // Muestra la primera pregunta desplegada con el icono "menos"
    if (index === 0) {
      answer.classList.add("faq__answer--visible");
      minusIcon.classList.remove("icon--hidden");
      plusIcon.classList.add("icon--hidden");
    }

    heading.addEventListener("click", function () {
      answer.classList.toggle("faq__answer--visible");
      plusIcon.classList.toggle(
        "icon--hidden",
        answer.classList.contains("faq__answer--visible")
      );
      minusIcon.classList.toggle(
        "icon--hidden",
        !answer.classList.contains("faq__answer--visible")
      );
    });

    // Oculta inicialmente el ícono "minus" en cada pregunta excepto la primera
    if (index !== 0) {
      minusIcon.classList.add("icon--hidden");
    }
  });
});