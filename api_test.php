<?php 
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept');
sleep(2);
header('Content-Type: application/json; charset=utf-8');
print_r(json_encode(array('ip'=>'123456778')));