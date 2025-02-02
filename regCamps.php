<?php


$campName=$_POST["campName"];
$campDate=$_POST["campDate"];
$campLoc=$_POST["campLoc"];

$con=mysqli_connect("localhost:5000","root","root","bloodbank");
$query="insert into camps(campName,campDate,location) values('".$campName."','".$campDate."','".$campLoc."')";
if(mysqli_query($con,$query)){
	echo "added !!";
}
else{
	echo "error";
}

?>
