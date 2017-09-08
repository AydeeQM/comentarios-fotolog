$(document).ready(function(){
    recover();
});

function addDatos() {
    localStorage.nombre = $('#clave').val();
    localStorage.valor = $('#valor').val();

    motrar_Data();

    $("#clave").val('');
    $("#valor").val('');
};

$(document).ready(function () {

    $('#clearmot').click(function () {
        $('#data').html("Limpiada vista. Los datos permanecen");
    });
});

function borrarTodo() {
    localStorage.clear();
    addDatos();
}

function motrar_Data() {
    let dato_nombre = localStorage.nombre
    let dato_commit = localStorage.valor
    $('#data').append("<div class ='form-group lista'><h3>" + dato_nombre + "</h3><p>" + dato_commit + "</p></div>");
}


function recover() {
    for (let i = 0; i < localStorage.length; i++) {
        let dato_nombre = localStorage.key(i);
        let dato_commit = localStorage.getItem(dato_nombre);
        $('#data').append("<div class ='form-group lista'><h3>" + dato_nombre + "</h3><p>" + dato_commit+ "</p></div>");
    }
}


