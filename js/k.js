
function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btn = document.getElementById("readMoreBtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.innerText = "Read more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.innerText = "Read less";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("dots").style.display = "inline";
  document.getElementById("more").style.display = "none";
});
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.onclick = function() {
  navLinks.classList.toggle("open");
};

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.classList.remove("open");
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
function goToContact() {
  document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
}