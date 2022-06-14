<?php

$data = file_get_contents('coba.json');
$mahasiswa = json_decode($data, true); // jika tidak menggunakan true, maja json akan menjadi objek. jika menggunakan, maka akan menjadi array.

var_dump($mahasiswa);
echo $mahasiswa[0]["pembimbing"]["pembimbing1"];

?>