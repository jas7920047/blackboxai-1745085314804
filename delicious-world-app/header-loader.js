document.addEventListener("DOMContentLoaded", function() {
  fetch('_header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });
});
