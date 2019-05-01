var indSend = false;
var content = '';
$(function () {
    var btn = $('#submit');
    var name = $('#name');
    var mail = $('#email');
    var mensaje = $('#msg');

    btn.click(function (e) {
        e.preventDefault();
        var send = true;
        var msj = '';
        if (!soloLetras(name.val())) {
            msj = '<div class="alert alert-danger"><strong>Atención!</strong> Por favor introduce un nombre válido.</div>';
            send = false;
        } else {
            if (!valCorreo(mail.val())) {
                msj = '<div class="alert alert-danger"><strong>Atención!</strong> Por favor introduce un correo electrónico válido.</div>';
                send = false;
            } else {
                if (!soloLetras(mensaje.val())) {
                    msj = '<div class="alert alert-danger"><strong>Atención!</strong> Por favor introduce un mensaje válido.</div>';
                    send = false;
                }
            }
        }
        if (send) {
            if (indSend) {
                showFormLoader();
                $.post('mailer/', {
                    name:  $.trim(name.val()),
                    mail:  $.trim(mail.val()),
                    mensaje:  $.trim(mensaje.val()),
                    reponse: content
                }).done(function (r) {
                    hideFormLoader();
                    showFormMessage('<div class="alert alert-success"><strong>Éxito!</strong> El correo eléctronico se ha enviado exitosamente.</div>');
                    resetFormValues();
                }).fail(function (e) {
                    hideFormLoader();
                    showFormMessage('<div class="alert alert-danger"><strong>Error!</strong> No fue posible enviar el correo eléctronico.</div>');
                })
            } else {
                showFormMessage('<div class="alert alert-danger"><strong>Atención!</strong> Por favor marca la casilla "No soy un robot".</div>');
            }
        } else {
            showFormMessage(msj);
        }
    });
});

function setIndSend(response) {
    indSend = true;
    content = response;
}

function soloLetras(str) {
    //Lista de caracteres permitidos
    var permitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 .,?¿¡!@_-+*/%=:;()" +
        String.fromCharCode(225) +
        String.fromCharCode(233) +
        String.fromCharCode(237) +
        String.fromCharCode(243) +
        String.fromCharCode(250) +
        String.fromCharCode(193) +
        String.fromCharCode(201) +
        String.fromCharCode(205) +
        String.fromCharCode(211) +
        String.fromCharCode(218) +
        String.fromCharCode(241) +
        String.fromCharCode(209);
    var caract;
    var valor = 1;
    for (i = 0; i < str.length; i++) {
        caract = str.charAt(i);
        if (permitidos.indexOf(caract) == -1) {
            valor = 0;
            break;
        }
    }
    if (valor < 1 || str.length < 1) {
        return false;
    }
    return true;
}

function valCorreo(str) {
    if (str.length > 0) {
        var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (!filtro.test(str)) {
            return false;
        }
    } else {
        return false;
    }
    return true;
}

function showFormMessage(message) {
    $('.cf-msg').fadeIn().html(message);
    setTimeout(function () {
        $('.cf-msg').fadeOut('slow');
    }, 4000);
}

function resetFormValues() {
    grecaptcha.reset();
    $('#name').val('');
    $('#email').val('');
    $('#msg').val('');
}

function showFormLoader() {
    $("#waitloader").delay(5).fadeIn().css("display", "inherit");
}

function hideFormLoader() {
    $("#waitloader").delay(200).fadeOut("slow").css("display", "none");
}