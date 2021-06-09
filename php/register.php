<?php
include "./datas.php";$n=$_GET['username'];$p=$_GET['password'];$sql="insert into user(name,pass)values('$n','$p')";$result=mysqli_query($link,$sql);if($result){echo "1";}else{echo "0";}mysqli_close($link);
?>