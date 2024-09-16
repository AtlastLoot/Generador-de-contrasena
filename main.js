const caracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

let opcionUsuario = document.querySelector(".container__input");
let salidaContrasena = document.querySelector(".container__contrasena");
let fuerzaContrasena = document.querySelector(".alert_contrasena");

function GenerarContrasena(opcionUsuario) {
  let contrasenaGenerada = [];
  for (i = 0; i < opcionUsuario; i++) {
    const randomNum = Math.floor(Math.random() * (caracteres.length - 1)) + 1;
    contrasenaGenerada += caracteres[randomNum];
  }

  return contrasenaGenerada;
}

function btnGenerar() {
  if (opcionUsuario.value > 15) {
    alert("Sobrepasaste el maximo de caracteres. Max: 15");
  } else {
    const textoSalida = GenerarContrasena(opcionUsuario.value);
    salidaContrasena.value = textoSalida;
    const fuerzaSalida = verificarContrasena(textoSalida);
    fuerzaContrasena.innerHTML = fuerzaSalida;
  }
}

function verificarContrasena(contrasena) {
  let fuerza = 0;

  // Verificar longitud
  if (contrasena.length >= 8) fuerza++;
  if (contrasena.length >= 12) fuerza++;

  // Verificar si contiene letras mayúsculas
  if (/[A-Z]/.test(contrasena)) fuerza++;

  // Verificar si contiene letras minúsculas
  if (/[a-z]/.test(contrasena)) fuerza++;

  // Verificar si contiene números
  if (/\d/.test(contrasena)) fuerza++;

  // Verificar si contiene caracteres especiales
  if (/[\W_]/.test(contrasena)) fuerza++;

  // Determinar la fortaleza de la contraseña
  if (fuerza <= 2) {
    fuerzaContrasena.style.color = "red";
    return "Contraseña Débil";
  } else if (fuerza <= 4) {
    fuerzaContrasena.style.color = "yellow";
    return "Contraseña Media";
  } else {
    fuerzaContrasena.style.color = "green";
    return "Contraseña Fuerte";
  }
}

function limpiar() {
  salidaContrasena.value = "";
  fuerzaContrasena.innerHTML = "";
  opcionUsuario.value = "";
}

function btnCopiar() {
  //salidaContrasena.select();
  salidaContrasena.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(salidaContrasena.value);
}
