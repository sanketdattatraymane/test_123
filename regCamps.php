<?php

/*
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
*/



// Retrieve values from POST request
$campName = $_POST["campName"];
$campDate = $_POST["campDate"];
$campLoc = $_POST["campLoc"];

// Generate a random dummy campId (between 1000 and 9999)
$campId = rand(1000, 9999);

// Establish a connection to the MySQL database
$con = mysqli_connect("localhost:5000", "root", "root", "bloodbank");

// SQL query to insert values, including the dummy campId
$query = "INSERT INTO camps(campId, campName, campDate, location) 
          VALUES('$campId', '$campName', '$campDate', '$campLoc')";

if (mysqli_query($con, $query)) {
    echo "Added with Dummy ID: " . $campId;
} else {
    echo "Error: " . mysqli_error($con);
}

// Close the database connection
mysqli_close($con);



?>
