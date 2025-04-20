function sendEmail(event) {
    event.preventDefault();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const email = "ayatali1661@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }