$(function(){
    var timeall = 0;    //错误次数
    var time = 0;

    //答对答错
    $('.clearfix>li').click(function(){
        if($(this).hasClass('right')==true){
            $('.yes').show();
        }else{
            $('.wrong').show();
            time++;
            timeall = time;
        }
    });

    //下一步
    $('.next').click(function(){
        $('.yes').hide();
        $('.wrong').hide();
        $(this).parent().parent().hide();
        $(this).parent().parent().next().show();
    });

    //游戏结束，重新载入
    $('.restar>p').click(function(){
        location.reload();
    });

    //统计得分
    $('.total').click(function () {
        if(timeall>5){
        	alert("您竟然只认出5个以下标志");
            $('.game-over').show();
        }else{
        	alert("您竟然认出5个以上标志");
            $('.mon-1').show();
        }
    });

//    红包步骤
    $('.m-next').click(function () {
        $(this).parent().hide();
        $(this).parent().next().show();
    });
    $('.money img.close').click(function(){
       $(this).parent().hide();
    });

//    验证电话号码和验证码
	
	$('.m-next').click(function(){
			var phone = $('.telephone').val();
			var regPhone = /^0?1[3|4|5|8][0-9]\d{8}$/;
			var myphone = regPhone.test(phone);
			console.log(myphone);
			if(!myphone){
				alert("电话号码有误，请重新输入");
				$(this).parent().show();
				$(this).parent().next().hide();
			}else{
				return ;
			}
	})

});