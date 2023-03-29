<meta charset='UTF-8'>
<?php
$host = "localhost";
$user = "calcifer36"; 
$pwd = "sat0829##";
$dbname = "calcifer36";

$connect = mysqli_connect($host,$user,$pwd) or die("데이터베이스 접속오류!!");
mysqli_select_db($connect,$dbname);
?>