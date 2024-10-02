//////////////////////////////////////////////////
//   Copyright Optidev3455 All Rights Reserved  //
//////////////////////////////////////////////////


window.onload = function() {
  document.body.classList.add('fade-in');
};

document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'fadeOutLink') {
      event.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(function() {
        window.location = event.target.getAttribute('href');
      }, 500);
    }
  });
});