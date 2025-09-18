document.addEventListener('DOMContentLoaded', function() {

      // Hide 'Read More' text at start
      document.getElementById("dots").style.display = "inline";
      document.getElementById("more").style.display = "none";

      // Menu icon for mobile
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

      // "Hire Me" Button
      window.goToContact = function() {
        document.querySelector('#contact').scrollIntoView({behavior:'smooth'});
      };

      // "Read More" Function
      window.readMore = function() {
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
      };

      // EMAILJS INTEGRATION
      document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm('service_dszgkmq', 'template_2l70b3e', this)
        .then(function() {
          document.getElementById('form-status').textContent = "Your message was sent successfully!";
          document.getElementById('contactForm').reset();
        }, function(error) {
          document.getElementById('form-status').textContent = "Message failed to send. Please try again!";
        });
      });
    });

