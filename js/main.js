$(document).ready(function () {
    recover();
});

function addDatos() {
    localStorage[$('#clave').val()] = $('#valor').val();

    $('#data').empty();

    recover();

    $("#clave").val('');
    $("#valor").val('');
};

function cleanDatos() {
    localStorage.clear();
    $('#data').empty();
    $("#clave").val('');
    $("#valor").val('');
}


function recover() {
    for (let clave in localStorage) {
        let dato_commit = localStorage.getItem(clave);
        $('#data').append("<div class ='form-group lista'><h3>" + clave + "</h3><p>" + dato_commit + "</p></div>");
    }
}
