var backup;

// Función que muestra un mensaje flotante en la pantalla
function showPopup() {
  // Creación del elemento "div"
  var popup = document.createElement("div");
  popup.innerHTML = "Información copiada al portapapeles";
  popup.style.backgroundColor = "lightgreen";
  popup.style.padding = "20px";
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.right = "20px";
  popup.style.zIndex = "999";
  document.body.appendChild(popup);

  // Desvanecimiento del mensaje después de 3 segundos
  setTimeout(function() {
    popup.style.opacity = "0";
    setTimeout(function() {
      document.body.removeChild(popup);
    }, 1000);
  }, 3000);
}

// Evento para activar el botón al presionar la tecla "Enter"
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnCargar").click();
  }
});

// Función para enfocar el primer campo faltante
function focusOnMissingField() {
  var missingFields = [];

  // Verificación de cada uno de los campos requeridos
  if (!document.getElementById('txtRazonS').value) {
    missingFields.push(document.getElementById('txtRazonS'));
  }
  if (!document.getElementById('txtRut').value) {
    missingFields.push(document.getElementById('txtRut'));
  }
  if (!document.getElementById('txtTelefono').value) {
    missingFields.push(document.getElementById('txtTelefono'));
  }
  if (!document.getElementById('txtContacto').value) {
    missingFields.push(document.getElementById('txtContacto'));
  }
  if (!document.getElementById('txtProblema').value) {
    missingFields.push(document.getElementById('txtProblema'));
  }
  if (!document.getElementById('txtTransferidoA').value) {
    missingFields.push(document.getElementById('txtTransferidoA'));
  }

  // Enfocando el primer campo faltante
  if (missingFields.length > 0) {
    missingFields[0].focus();
    window.scrollTo(0, missingFields[0].offsetTop);
    return false;
  }

  return true;
}

// Función para cargar la información en el campo de salida
function Cargar() {
// Verifica si el campo de salida no está vacío
if (document.getElementById("txtOutput").value !== "") {
// Realiza un backup de los datos en el campo de salida
backup = document.getElementById("txtOutput").value;
}
// Verifica que cada uno de los siguientes campos tenga un valor
if (!document.getElementById('txtRazonS').value) {
// Muestra un mensaje de error y llama a la función focusOnMissingField
document.getElementById('errorRazonS').style.display = "block";
focusOnMissingField();
} else if (!document.getElementById('txtRut').value) {
// Muestra un mensaje de error y llama a la función focusOnMissingField
document.getElementById('errorRut').style.display = "block";
focusOnMissingField();
} else if (!document.getElementById('txtTelefono').value) {
// Muestra un mensaje de error y llama a la función focusOnMissingField
document.getElementById('errorTelefono').style.display = "block";
focusOnMissingField();
} else if (!document.getElementById('txtContacto').value) {
// Muestra un mensaje de error y llama a la función focusOnMissingField
document.getElementById('errorContacto').style.display = "block";
focusOnMissingField();
} else if (!document.getElementById('txtProblema').value) {
// Muestra un mensaje de error y llama a la función focusOnMissingField
document.getElementById('errorProblema').style.display = "block";
focusOnMissingField();
} else if (!document.getElementById('txtTransferidoA').value) {
// Muestra un mensaje de error y llama a la función focusOnMissingField
document.getElementById('errorTransferidoA').style.display = "block";
focusOnMissingField();
} else {
// Si todos los campos tienen valor, oculta todos los mensajes de error
document.getElementById('errorRazonS').style.display = "none";
document.getElementById('errorRut').style.display = "none";
document.getElementById('errorTelefono').style.display = "none";
document.getElementById('errorContacto').style.display = "none";
document.getElementById('errorProblema').style.display = "none";
document.getElementById('errorTransferidoA').style.display = "none";
// Carga la información en el campo de salida
    document.getElementById('txtOutput').value = "-                  Empresa: " + document.getElementById('txtRazonS').value + "\n-                  Rut: " + document.getElementById('txtRut').value + "\n-                  Teléfono: " + document.getElementById('txtTelefono').value + "\n-                  Contacto: " + document.getElementById('txtContacto').value + "\n-                  Problema: " + document.getElementById('txtProblema').value + "\n-             Transferido A: " + document.getElementById('txtTransferidoA').value;
    document.getElementById('txtRazonS').value = "";
    document.getElementById('txtRut').value = "";
    document.getElementById('txtTelefono').value = "";
    document.getElementById('txtContacto').value = "";
    document.getElementById('txtProblema').value = "";
    document.getElementById('txtTransferidoA').value = "";
    // Crea una variable para copiarla al portapapeles e invoca el showPopup
    var txtOutput = document.getElementById("txtOutput");
    txtOutput.select();
    document.execCommand("copy");
    showPopup();
    // Scrollea hasta abajo
    document.getElementById("txtOutput").scrollIntoView({behavior: "smooth", block: "end"});
    
    }

  }
