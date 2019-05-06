<?php
require('../vendor/autoload.php');
require_once 'recaptchalib.php';
require_once 'service.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();


// Get a key from https://www.google.com/recaptcha/admin/create
$privatekey = getenv('RECAPCHA_KEY'); //"6LfVsaAUAAAAAMmoXUVzKyXS5FYcyABysxVvMCL6";

# the response from reCAPTCHA
$resp = null;
# the error code from reCAPTCHA, if any
$reCaptcha = new ReCaptcha($privatekey);

# was there a reCAPTCHA response?
if ($_POST["reponse"]) {
        $resp = $reCaptcha->verifyResponse(
            $_SERVER["REMOTE_ADDR"],
            $_POST["reponse"]
        );

        if ($resp->success){

            //status
            $objServ = new Service();

            $send = true;

            if(!filter_var($_POST["mail"], FILTER_VALIDATE_EMAIL)){
              //$send = false;
            }

            if(!filter_var($_POST["mail"], FILTER_SANITIZE_EMAIL)){
              //$send = false;
            }
            
            $message = htmlentities(strip_tags($_POST["mensaje"]), ENT_QUOTES);

            $data = array(
              "email" => $_POST["mail"],
              "name" => $_POST["name"],
              "subject" => "Contacto desde Sitio WEB",
              "message" => $message
            );

            if($send){
                $response = json_decode($objServ->sendMail($data),1);
                echo json_encode(
                  array(
                      'success' => json_encode($response["Messages"][0]["Status"])
                  )
                );
            }else{
              echo json_encode(
                  array(
                      'success' => false,
                      'msj' => 'Datos Invalidos'
                  )
              );              
            }

            
                
        } else {
          echo json_encode(
                  array(
                      'success' => false,
                      'msj' => 'Código de Captcha No Valido - Vuelva a interntar'
                  )
              );
        }


}
else{
    echo json_encode(
            array(
                'success' => false,
                'msj' => 'Debe indicar el Código de Captha'
            )
        );    
}