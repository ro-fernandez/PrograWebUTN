$(document).ready(function () {
    // Mostrar datos de la sesion para añadir reservacion
    $('#btnAdd').click (function () {
        let email = $(this).data('email');
        let dni = $(this).data('dni');
        let apynom = $(this).data('apynom');
        $('#AddModal').modal('show');
        $('.email').val(email);
        $('.dni').val(dni);
        $('.apynom').val(apynom);
    })

    // Mostrar datos al modal para editar reservacion
    $('#solicitudes').on('click', '.edit', function () {
        let id_solicitud = $(this).data('id_solicitud');
        let email = $(this).data('email');
        let dni = $(this).data('dni');
        let apynom = $(this).data('apynom');
        let promo = $(this).data('promo');
        let mes = $(this).data('mes');
        let quincena = $(this).data('quincena');
        let dia = $(this).data('dia');
        let horario = $(this).data('horario');
        let locacion = $(this).data('locacion');
        $('#EditModal').modal('show');
        $('.id_solicitud').val(id_solicitud);
        $('.email').val(email);
        $('.dni').val(dni);
        $('.apynom').val(apynom);
        $('.promo').val(promo);
        $('.mes').val(mes);
        $('.quincena').val(quincena);
        $('.dia').val(dia);
        $('.horario').val(horario);
        $('.locacion').val(locacion);
    })

    // Obtener datos para el modal para eliminar reservacion
    $('#solicitudes').on('click', '.delete', function () {
        let id_solicitud = $(this).data('id_solicitud');
        $('#DeleteModal').modal('show');
        $('.id_solicitud').val(id_solicitud);
    })
})