function addDatos() {
    localStorage.nombre = $('#clave').val();
    localStorage.valor = $('#valor').val();

    if ((localStorage.nombre != undefined) && (localStorage.valor != undefined)) {
        $('#data').append("<div class ='form-group lista'><h3>" + localStorage.nombre + "</h3><p>" + localStorage.valor + "</p></div>")
    }
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

$(document).ready(function () {
    $("#contact-form").submit(function (e) {
        e.preventDefault();
        //Asignamos el valor al objeto SessionStorage
        localStorage.setItem('nombre', $('#clave').val());
        //Asignamos el valor al objeto localStorage
        localStorage.setItem('valor', $('#valor').val());
        window.location = 'index.html';
    });
});
