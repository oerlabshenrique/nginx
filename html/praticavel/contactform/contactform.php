<?php
               $atendimento = "orassociados@gmail.com";
               $data = "";
               $nome = $_REQUEST['name'];
               $email = $_REQUEST['email'];
               $assunto = $_REQUEST['subject'];
               $msg = $_REQUEST['message'];

               $data .= 'Nome: '.$nome.' '; 
               $data .= 'Assunto: '.$assunto.' '; 
               $data .= 'Email: '.$email.' '; 
               $data .= 'Mensagem: '.$msg.' '; 

               $cabecalho = "From: Contato do site \r\n";

               if( (!empty($nome)) && (!empty($email)) && (!empty($assunto)) && (!empty($msg)) ){
                   if(mail($atendimento,"Contato do site",$data,$cabecalho)==true){
                           echo 'OK';
                       }else{
                           echo 'Desculpe, não foi possivel enviar a mensagem nesse momento.';
                       }										   
               }else{
                      echo 'Desculpe, não identificamos os dados.';
               }
?>   