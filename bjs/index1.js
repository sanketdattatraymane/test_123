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

///////////////////////////////////////////////////////////////////////////////////////////////////


function loadCamp() {
    $("#drtable").remove(); // Remove existing table if any

    var table = `
        <table border='1' id='drtable'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Blood Camp</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Camp Alpha</td>
                    <td>2025-02-10</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Camp Beta</td>
                    <td>2025-02-15</td>
                </tr>
            </tbody>
        </table>
    `;

    $("#dright").prepend(table); // Add the table to the page
}




/////////////////////////////////////////////////////////////////////////////////////////////////////////





































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

