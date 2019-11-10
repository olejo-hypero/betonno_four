<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['name2'])) {$name = $_POST['name2'];}
    if (isset($_POST['name3'])) {$name = $_POST['name3'];}
    if (isset($_POST['number'])) {$phone = $_POST['number'];}
    if (isset($_POST['number2'])) {$phone = $_POST['number2'];}
    if (isset($_POST['number3'])) {$phone = $_POST['number3'];}
    if (isset($_POST['email'])) {$email = $_POST['email'];}
    if (isset($_POST['email2'])) {$email = $_POST['email2'];}
    if (isset($_POST['textarea'])) {$textarea = $_POST['textarea'];}
    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}
    $to = "info@site.ru"; /*Укажите ваш адрес электронной почты*/
    $headers = "Content-type: text/plain; charset = utf-8";
    $subject = "$formData";
    $message = "";
        if(isset($name)) { $message .= "Имя: \n\n" . $name;
        if(isset($name2)) { $message .= "Имя: \n\n" . $name2;
        if(isset($name3)) { $message .= "Имя: \n\n" . $name3;
        if(isset($number)) { $message .= "Номер: \n\n" . $number;
        if(isset($number2)) { $message .= "Номер: \n\n" . $number2;
        if(isset($number3)) { $message .= "Номер: \n\n" . $number3;
        if(isset($email)) { $message .= "Email: \n\n" . $email;
        if(isset($email2)) { $message .= "Email: \n\n" . $email2;
        if(isset($textarea)) { $message .= "Сообщение: \n\n" . $textarea;
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {
        echo "<center>Спасибо за отправку вашего сообщения!</center>";
    }
    else 
    {
        echo "<center><b>Ошибка. Сообщение не отправлено!</b></center>";
    }
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>