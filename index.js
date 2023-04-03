
  (function() {
    const heart1 = document.getElementById('heart1');
    const heart2 = document.getElementById('heart2');
    const heart3 = document.getElementById('heart3');
    const heart4 = document.getElementById('heart4');
    heart1.addEventListener('click', function() {
      heart1.classList.toggle('red');
    });
    heart2.addEventListener('click', function() {
      heart2.classList.toggle('red');
    });
    heart3.addEventListener('click', function() {
      heart3.classList.toggle('red');
    });
    heart4.addEventListener('click', function() {
      heart4.classList.toggle('red');
    });
  })();
