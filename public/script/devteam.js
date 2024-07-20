let dev = document.getElementById('devteam');
if (dev) {
  dev.addEventListener('click', function () {
    window.location.href = 'devteam'; // Replace with your actual developer page URL
  });
} else {
  document.getElementById('back-btn').addEventListener('click', function () {
   window.location.href = '/back-btn';
});
}
