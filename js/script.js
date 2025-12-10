document.addEventListener("DOMContentLoaded", function() {
  // Знаходимо всі форми на сторінці
  const forms = document.querySelectorAll("form[novalidate]");

  forms.forEach(form => {
    // Створюємо або знаходимо блок для повідомлення
    let msgDiv = form.nextElementSibling;
    if (!msgDiv || !msgDiv.id.endsWith("-message")) {
      msgDiv = document.createElement("div");
      msgDiv.style.marginTop = "1rem";
      msgDiv.style.fontWeight = "bold";
      form.insertAdjacentElement("afterend", msgDiv);
    }

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // блокуємо стандартну відправку

      // Очищаємо попередні повідомлення
      form.querySelectorAll(".error-message").forEach(msg => msg.remove());
      msgDiv.textContent = "";
      msgDiv.className = "";

      let valid = true;

      // Перевірка всіх полів форми
      form.querySelectorAll("input, select, textarea").forEach(field => {
        field.style.borderColor = "#ccc"; // стандартна рамка

        if (!field.checkValidity()) {
          valid = false;

          // Створюємо повідомлення про помилку
          const errorMsg = document.createElement("div");
          errorMsg.className = "error-message";

          if (field.validity.valueMissing) {
            errorMsg.textContent = "Це поле обов'язкове";
          } else if (field.validity.typeMismatch) {
            errorMsg.textContent = "Некоректний формат";
          } else if (field.validity.patternMismatch) {
            errorMsg.textContent = "Введіть правильні дані";
          }

          field.insertAdjacentElement("afterend", errorMsg);
          field.style.borderColor = "red";
        }
      });

      // Якщо форма валідна
      if (valid) {
        msgDiv.textContent = "Форма успішно відправлена!";
        msgDiv.className = "success";
        form.reset();
      } else {
        msgDiv.textContent = "Будь ласка, виправте помилки у формі.";
        msgDiv.className = "error";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  // Щоб меню автоматично ховалося при зміні розміру екрану
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navList.classList.remove("active");
      navList.style.display = "flex";
    }
  });
});




