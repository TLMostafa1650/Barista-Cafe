const contactForm = document.querySelector("#contactform");

  contactForm?.addEventListener("submit", function(event) {
    event.preventDefault();
    if (contactForm.checkValidity()) {
      window.location.href = "./message.html";
    } else {
      contactForm.reportValidity();
    }
  });
  