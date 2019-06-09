/***
 * Validacion de campos de insercion y actualizacion de productos
 * @author FUSM
 * 
 */
$(function () {
    class Formulario {
        constructor( ) {
        }

        iniciar() {
            /** Validar que el campo costo permita formatear valores***/
            $("#costo").on({
                "focus": function (event) {
                    $(event.target).select();
                },
                "keyup": function (event) {
                    $(event.target).val(function (index, value) {
                        return value.replace(/\D/g, "")
                                .replace(/([0-9])$/, '$1')
                                .replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",");
                    });
                }
            });

            var esValido = $("#formulario").validate({

                debug: true,

                rules: /* Accedemos a los campos a través de su nombre */
                        {
                            clave_producto: {
                                required: true,
                                minlength: 5,
                                maxlength: 80,
                                digits: false
                            },
                            descripcion: {
                                required: true,
                                minlength: 2,
                                maxlength: 50
                            },
                            costo: {
                                required: true,
                                minlength: 3,
                                maxlength: 50,
                            },
                        },
                messages: /* Accedemos a los campos a través de su nombre */
                        {
                            clave_producto: {
                                required: 'El campo Clave Producto es requerido',
                                minlength: 'El mínimo permitido son 5 caracteres',
                                maxlength: 'El máximo permitido son 80 caracteres'
                            },
                            descripcion: {
                                required: 'El campo Descripción es requerido',
                                minlength: 'El mínimo permitido son 2 caracteres',
                                maxlength: 'El máximo permitido son 50 caracteres'
                            },
                            costo: {
                                required: 'El campo costo es requerido',
                                minlength: 'El mínimo permitido son 3 caracteres',
                                maxlength: 'El máximo permitido son 50 caracteres'
                            }
                        },
                submitHandler: function (form) {
                    form.submit();
                }
            });

            return esValido;

        }
    }

    let formulario = new Formulario();
    formulario.iniciar();
});