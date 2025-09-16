document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalUsuario");
  const btnUsuario = document.getElementById("btnUsuario");
  const cerrar = document.querySelector(".cerrar");

  const formLogin = document.getElementById("form-login");
  const formRegister = document.getElementById("form-register");
  const linkCrear = document.getElementById("linkCrearCuenta");
  const linkLogin = document.getElementById("linkLogin");

  // Inputs de login
  const loginUsuario = document.getElementById("usuario");
  const loginPassword = document.getElementById("password");

  // Inputs de registro
  const nuevoUsuario = document.getElementById("nuevoUsuario");
  const nuevoCorreo = document.getElementById("nuevoCorreo");
  const nuevaPassword = document.getElementById("nuevaPassword");

  // 🔹 Guardar datos en memoria (simulación)
  let userData = {};

  // Inicialmente ocultar el modal
  modal.style.display = "none";

  // Abrir modal
  btnUsuario?.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  // Cerrar modal con la X
  cerrar?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal clic fuera
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Mostrar registro
  linkCrear?.addEventListener("click", (e) => {
    e.preventDefault();
    formLogin.style.display = "none";
    formRegister.style.display = "block";
  });

  // Mostrar login
  linkLogin?.addEventListener("click", (e) => {
    e.preventDefault();
    formRegister.style.display = "none";
    formLogin.style.display = "block";
  });

  // -------------------------------
  // VALIDACIONES
  // -------------------------------

  // Función para marcar error
  function marcarError(input) {
    input.classList.add("error");
  }

  // Función para limpiar error
  function limpiarError(input) {
    input.classList.remove("error");
  }

  // Escuchar en todos los inputs required
  document.querySelectorAll("input[required]").forEach(input => {
    input.addEventListener("blur", () => {
      if (!input.value.trim()) {
        marcarError(input);
      } else {
        limpiarError(input);
      }
    });

    input.addEventListener("input", () => {
      if (input.value.trim()) {
        limpiarError(input);
      }
    });
  });

  // Registro
  formRegister.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nuevoUsuario.value || !nuevoCorreo.value || !nuevaPassword.value) {
      customAlert("⚠️ Por favor, completa todos los campos.");
      [nuevoUsuario, nuevoCorreo, nuevaPassword].forEach(i => {
        if (!i.value) marcarError(i);
      });
      return;
    }

    if (nuevaPassword.value.length < 6) {
      customAlert("🔒 La contraseña debe tener al menos 6 caracteres.");
      marcarError(nuevaPassword);
      return;
    }

    userData = {
      usuario: nuevoUsuario.value,
      correo: nuevoCorreo.value,
      password: nuevaPassword.value,
    };

    customAlert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
    formRegister.style.display = "none";
    formLogin.style.display = "block";
  });

  // Login
  formLogin.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    if (!loginUsuario.value || !loginPassword.value) {
      customAlert("⚠️ Por favor, completa todos los campos.");
      [loginUsuario, loginPassword].forEach(i => {
        if (!i.value) marcarError(i);
      });
      return;
    }

    if (
      (loginUsuario.value === userData.usuario ||
        loginUsuario.value === userData.correo) &&
      loginPassword.value === userData.password
    ) {
      customAlert("🎂 ¡Bienvenido de nuevo a BOM BOCADO!");
      modal.style.display = "none";
    } else {
      customAlert("❌ Usuario o contraseña incorrectos.");
      marcarError(loginUsuario);
      marcarError(loginPassword);
    }
  });
});

// -------------------------------
// ALERTA PERSONALIZADA ROSADA
// -------------------------------
function customAlert(mensaje) {
  const alertBox = document.getElementById("customAlert");
  const alertMsg = document.getElementById("customAlertMsg");
  const alertBtn = document.getElementById("customAlertBtn");

  alertMsg.textContent = mensaje;
  alertBox.style.display = "flex";

  alertBtn.onclick = () => {
    alertBox.style.display = "none";
  };
}
