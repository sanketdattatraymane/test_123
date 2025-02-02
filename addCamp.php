<?php

$con=mysqli_connect("localhost:5000","root","root","bloodbank");
$query="select * from camps";
$r=mysqli_query($con,$query);

if(mysqli_num_rows($r)>0){
	$table="";
	$table="<table border='1'  id='drtable'>";
	$table=$table."<thead><tr><th>ID</th><th style='text-align: center;' class='ff0'> Blood Camp</th><th>Date</th></tr></thead><tbody>";

	while($res=mysqli_fetch_assoc($r)){
		$table=$table."<tr>";
		$table=$table."<th>".$res['campId']."</th>";
		$table=$table."<th>".$res['campName']."</th>";
		$table=$table."<th id='camp".$res['campId']."' location='".$res['location']."'>".$res['campDate']."</th>";
		$table=$table."</tr>";
	}

	$table=$table."</tbody></table>";
	echo $table;
}

?>