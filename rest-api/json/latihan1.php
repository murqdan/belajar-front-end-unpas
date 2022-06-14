<?php

$mahasiswa = [
    [
    "nama" => "Muhammad Rafiqul",
    "nim" => "19111234",
    "email" =>  "wasd@wasd.wasd"
    ],
    [
    "nama" => "Muhammad Rafiqul",
    "nim" => "19111234",
    "email" => "wasd@wasd.wasd"
    ]
];

$data = json_encode($mahasiswa);
echo $data;

?>