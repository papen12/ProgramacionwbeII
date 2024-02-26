var estudiantes = [];

function llenarEstudiante() {
    var estudiante = {
        nombre: document.querySelector('#nombre').value,
        apellido1: document.querySelector('#app1').value,
        apellido2: document.querySelector('#app2').value,
        curso: document.querySelector('#curso').value
    };
    return estudiante
}

function Guardar() {
    var estuguard = llenarEstudiante();

    if (estuguard.nombre.trim() !== "" && estuguard.apellido1.trim() !== "" && estuguard.apellido2.trim() !== "" && estuguard.curso.trim() !== "") {
        estudiantes.push(estuguard)
        mostrarEstudiantes()
        limpiarFormulario()
    } else if(estuguard.nombre.trim() !== "" && estuguard.apellido1.trim() !== "" && estuguard.apellido2.trim() === "" && estuguard.curso.trim() !== ""){
        estuguard.apellido2="No tiene"
        estudiantes.push(estuguard)
        mostrarEstudiantes()
        limpiarFormulario()
    }else {
        alert('Por favor, complete todos los campos.')
    }
    
}

function mostrarEstudiantes() {
    var tablabody = document.querySelector('#tablabody')
    tablabody.innerHTML = '';

    for (var i = 0; i < estudiantes.length; i++) {
        var fila = tablabody.insertRow()

        var celdaNombre = fila.insertCell(0)
        celdaNombre.innerHTML = estudiantes[i].nombre

        var celdaApellido1 = fila.insertCell(1)
        celdaApellido1.innerHTML = estudiantes[i].apellido1

        var celdaApellido2 = fila.insertCell(2)
        celdaApellido2.innerHTML = estudiantes[i].apellido2

        var celdaCurso = fila.insertCell(3)
        celdaCurso.innerHTML = estudiantes[i].curso
    }
}

function limpiarFormulario() {
    document.querySelector('#nombre').value = '';
    document.querySelector('#apellido1').value = '';
    document.querySelector('#apellido2').value = '';
    document.querySelector('#curso').value = '';
}