//$('button').click(function(){
//	var data = {"name":"zhangwuji","pwd":"123"};
//	$.ajax({
//		type: "POST",
//		url: "js/index.php",
//		data: data,
//		success: function(data){
//			console.log(data);
//		}
//	})
//})


var num = 0;
$('.img1').click(function(){
	num++;
	if(num>5){
		alert("恭喜您认出了5个标志，并且获得了一个红包");
	}
})

