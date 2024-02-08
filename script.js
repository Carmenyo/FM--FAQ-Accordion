document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll('.faq__heading');
  
    headings.forEach(heading => {
      heading.addEventListener('click', function () {
        const item = heading.closest('.faq__item');
        const answer = item.querySelector('.faq__answer');
  
        answer.classList.toggle('faq__answer--visible');
  
        const plusIcon = heading.querySelector('.icon-plus');
        const minusIcon = heading.querySelector('.icon-minus');
  
        // Muestra el ícono "plus" si la respuesta está oculta, y "minus" si la respuesta está visible
        plusIcon.classList.toggle('icon--hidden', answer.classList.contains('faq__answer--visible'));
        minusIcon.classList.toggle('icon--hidden', !answer.classList.contains('faq__answer--visible'));
      });
  
      // Oculta inicialmente el ícono "minus" en cada pregunta
      const minusIcon = heading.querySelector('.icon-minus');
      minusIcon.classList.add('icon--hidden');
    });
  });
  