$(document).ready(function() {
  // Smooth scrolling animation for the CTA button
  $('.cta-button').on('click', function(event) {
    event.preventDefault();
    const targetId = $(this).attr('href');
    const targetOffset = $(targetId).offset().top;

    $('html, body').animate({
      scrollTop: targetOffset
    }, 800); // Change the duration (in milliseconds) as desired for the smooth scroll
  });

  // Initialize ScrollReveal
  const sr = ScrollReveal();

  // Common animations for elements with classes .js--fadeInLeft and .js--fadeInRight
  sr.reveal('.js--fadeInLeft', {
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });

  sr.reveal('.js--fadeInRight', {
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    duration: 800,
  });
});
