document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const passwordMismatch = document.getElementById('passwordMismatch');

    form.addEventListener('submit', function (event) {
      if (password1.value !== password2.value) {
        event.preventDefault(); // Evita que el formulario se envíe
        passwordMismatch.style.display = 'block';
      } else {
        passwordMismatch.style.display = 'none';
        // Aquí puedes enviar el formulario si las contraseñas coinciden
        // form.submit();
      }
    });

    const registrarseBtn = document.getElementById('registrarseBtn');
    registrarseBtn.addEventListener('click', function () {
      // Aquí puedes realizar alguna acción antes de enviar el formulario
      form.submit(); // Esto enviará el formulario si todo está validado
    });
  });