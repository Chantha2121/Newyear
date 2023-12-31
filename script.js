document.addEventListener("DOMContentLoaded", function() {
    const timer = document.getElementById('timer');
    const message = document.getElementById('message');
    const Img = document.getElementById('img');
  
    let count = 3;
  
    const countdown = setInterval(() => {
      if (count > 0) {
        timer.textContent = count;
        count--;
      } else {
        clearInterval(countdown);
        timer.style.display = 'none';
        message.style.display = 'block';
        message.textContent = 'Happy New Year!';
        Img.style = 'display: inline-block '
      }
    }, 1000);
  });
  