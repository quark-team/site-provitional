<?php
 class Service {


    public function sendMail($data){
        
        $data_user = json_encode(array (
            'Messages' => 
            array (
              0 => 
              array (
                'From' => 
                array (
                  'Email' => 'contacto@quark-solutions.cl',
                  'Name' => 'Contacto QuarkSolutions',
                ),
                'To' => 
                array (
                  0 => 
                  array (
                    "Email" => $data["email"],
                    "Name" => $data["name"]
                  ),
                ),
                'TemplateID' => 781782,
                'TemplateLanguage' => true,
                'Subject' =>  $data["subject"],
                'Variables' => 
                array (
                  'user_name' => $data["name"],
                ),
              ),
            ),
          )
        );

        $data_web = json_encode(array (
            'Messages' => array (
              0 => 
              array (
                'From' => array (
                  'Email' => 'contacto@quark-solutions.cl',
                  'Name' => 'Contacto WEB',
                ),
                'To' => array (
                  0 => array (
                    "Email" => 'quarksolutionschile@gmail.com',
                    "Name" => 'QuarkSolutions'
                  ),
                ),
                'TemplateID' => 782306,
                'TemplateLanguage' => true,
                'Subject' =>  'Contacto WEB',
                'Variables' => array (
                  'message_text' => $data["message"],
                  'response_email' => $data["email"]
                ),
              ),
            ),
            'Headers' => array(
                "Reply-To" => $data["email"]
            )
          )
        );

        $mailWeb = json_decode($this->sendCurlMail($data_web),1);

        if($mailWeb["Messages"][0]["Status"] == 'success') {
            return $this->sendCurlMail($data_user);
        }
        else{
            return false;
        }



    }

    private function sendCurlMail($data_string){
        $ch = curl_init('https://api.mailjet.com/v3.1/send');                                                                      
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch,CURLOPT_USERPWD,"561e0bd60c10b9c92ca3a815eaed77e8:b00deafb3a3ad6a5eb93740b46a05d20");
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
            'Content-Type: application/json',                                                                                
            'Content-Length: ' . strlen($data_string))                                                                       
        );                                                                                                                   
        return curl_exec($ch);           
    }

     
 }

/*

# This call sends a message to the given recipient with vars and custom vars.
curl -s \
  -X POST \
  --user "$MJ_APIKEY_PUBLIC:$MJ_APIKEY_PRIVATE" https://api.mailjet.com/v3.1/send \
  -H 'Content-Type: application/json' 
  -d '{
    "Messages":[
      {
        "From": {
          "Email": "contacto@quark-solutions.cl",
          "Name": "QuarkSolutions"
        },
        "To": [
          {
            "Email": "passenger1@example.com",
            "Name": "passenger 1"
          }
        ],
        "TemplateID": 781782,
        "TemplateLanguage": true,
        "Subject": "Saludos",
        "Variables": {
    "user_name": ""
    }
      }
    ]
  }'

*/