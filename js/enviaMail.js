var indSend = false;
var content = '';
$(function () {

    var btn = $('#submit');
    var name = $('#name');
    var mail = $('#email');
    var mensaje = $('#msg');

    btn.click(function (e) {
        e.preventDefault()
        if (indSend) {
            var send = true;
            var msj = '';

            if (!soloLetras(name.val())) {
                msj += '<p>El campo Nombre presenta Errores</p>';
                send = false;
            }
            if (!valCorreo(mail.val())) {
                msj += '<p>El campo Correo presenta Errores</p>';
                send = false;
            }

            if (!soloLetras(mensaje.val())) {
                msj += '<p>El campo Mensaje presenta Errores</p>';
                send = false;
            }

            if (send) {
                $.post('mailer/', {
                    name: name.val(),
                    mail: mail.val(),
                    mensaje: mensaje.val(),
                    reponse: content
                }).done(function (r) {
                    
                    grecaptcha.reset()
                    name.val('')
                    mail.val('')
                    mensaje.val('')
                    console.log(r)

                });
            } else {
                console.log('Error de Validacion')

            }
        } else {
            console.log('Error de Captcha')
        }
    });

});

function setIndSend(response) {
    indSend = true;
    content = response;
}

function soloLetras(str) {
    var permitidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 .,?¿¡!@_-+*/%=:;()" + String.fromCharCode(225) + String.fromCharCode(233) + String.fromCharCode(237) + String.fromCharCode(243) + String.fromCharCode(250) + String.fromCharCode(193) + String.fromCharCode(201) + String.fromCharCode(205) + String.fromCharCode(211) + String.fromCharCode(218) + String.fromCharCode(241) + String.fromCharCode(209); //lista de caracteres permitidos
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