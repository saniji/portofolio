<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "saniji499@gmail.com"; // Ganti dengan email Anda
    $subject = "Pesan dari Formulir Kontak";
    $headers = "From: $name <$email>";

    // Kirim email
    if (mail($to, $subject, $message, $headers)) {
        echo "Pesan terkirim. Terima kasih!";
    } else {
        echo "Maaf, pesan gagal terkirim.";
    }
}
?>
