document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let valid = true;

        // Очистка попередніх помилок
        form.querySelectorAll(".error-message").forEach(span => span.textContent = "");
        form.querySelectorAll("input, textarea").forEach(field => field.style.borderColor = "");

        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email-contact").value.trim();
        const subject = form.querySelector("#subject").value.trim();
        const message = form.querySelector("#message").value.trim();

        // --- Валідація ---
        if (name.length < 3) {
            showError("name", "Ім'я має містити мінімум 3 символи");
            valid = false;
        }
        if (!email.includes("@") || !email.includes(".")) {
            showError("email-contact", "Введіть коректний Email");
            valid = false;
        }
        if (subject.length < 3) {
            showError("subject", "Тема має містити мінімум 3 символи");
            valid = false;
        }
        if (message.length < 10) {
            showError("message", "Повідомлення має містити мінімум 10 символів");
            valid = false;
        }

        // --- Результат ---
        if (valid) {
            console.log({ name, email, subject, message });
            form.reset();
            formMessage.textContent = "Форма успішно надіслана!";
            formMessage.style.color = "green";
        } else {
            formMessage.textContent = "Будь ласка, виправте помилки у формі.";
            formMessage.style.color = "red";
        }

        function showError(fieldId, msg) {
            const field = document.getElementById(fieldId);
            field.style.borderColor = "red";

            // знаходимо наступний span для помилки
            let errorSpan = field.nextElementSibling;
            if (errorSpan && errorSpan.classList.contains("error-message")) {
                errorSpan.textContent = msg;
            } else {
                // якщо span немає, створюємо
                errorSpan = document.createElement("span");
                errorSpan.className = "error-message";
                errorSpan.style.color = "red";
                errorSpan.style.display = "block";
                errorSpan.style.fontSize = "0.9em";
                errorSpan.style.marginTop = "0.2rem";
                errorSpan.textContent = msg;
                field.insertAdjacentElement("afterend", errorSpan);
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    navList.classList.toggle("active"); // відкриває/закриває меню
  });

  // Опціонально: якщо змінюється розмір вікна, меню автоматично показується на десктопі
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navList.classList.remove("active");
      navList.style.display = "flex";
    } else {
      navList.style.display = "";
    }
  });
});

