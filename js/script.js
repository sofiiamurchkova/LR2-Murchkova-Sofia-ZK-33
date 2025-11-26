document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if(!name || !email || !message){
        alert('Будь ласка, заповніть усі поля форми.');
        return;
      }
      alert('Дякуємо! Повідомлення надіслано (демо).');
      contactForm.reset();
    });
  }
});
