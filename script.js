function toggleMenu() {
  var menu = document.getElementById("nav-menu");
  menu.classList.toggle("hidden");
}

function jumpToCity() {
  var select = document.getElementById("city-select");
  var city = select.value;
  if (city) {
    document.getElementById(city).scrollIntoView({ behavior: "smooth" });
  }
}

function loadContent() {
  fetch("entries.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("kirkland-content").innerHTML = data.match(
        /<tbody id="kirkland-entries">([\s\S]*?)<\/tbody>/
      )[1];
      document.getElementById("redmond-content").innerHTML = data.match(
        /<tbody id="redmond-entries">([\s\S]*?)<\/tbody>/
      )[1];
    })
    .catch((error) => console.error("Error loading content:", error));
}

document.addEventListener("DOMContentLoaded", loadContent);
