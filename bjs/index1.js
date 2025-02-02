var display=0;
$("#menu").click(function(){
		if(display==0){
			$("#menu-card").show();
			display=1;
		}
		else{
			$("#menu-card").hide();
			display=0;			
		}
});

// function loadCamp(){
// 	$.ajax({
// 		url:"addCamp.php",
// 		type:"GET",
// 		success:function(data){
// 			$("#drtable").remove();
// 			$("#dright").prepend(data);
// 		}
// 	});
// }

$("#m-close").click(function(){
	$("#load-map").hide();
});

$("#add-map").on("click",function(){
	alert("please, search as 'camp{CampID}' for eg. camp5");
	$("#load-map").show();
});

$("#map-id").change(function(){
	var id=$("#map-id").val();
	alert("#"+id);
	$("#view-map").empty();
	$("#view-map").append($("#"+id).attr('location'));
	$("#load-map").show();
});

loadCamp();

