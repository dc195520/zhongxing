
// 检验手机号
$("#phoneId").blur(function(){
    let  regObj = /^1[345789]\d{9}$/;
    if(regObj.test(this.value)){
        $("#phone_sign").css({"display":"none"});
    }else{
        $("#phone_sign").css({"display":"block"});
    } 
})

//判断密码强度  
/*
$("#psd").blur(function(){
    let regObj = /^[a-zA-Z0-9]\w{5-15}$/;
    let $str = $("#psd").val();
    if(regObj.test(this.value)==false){
        $(".psd_qd").show();

    }else if($str.length<=8){

        $("#psd_img_1").show();

    }else if($str.length<=12){

        $("#psd_img_1").hide();
        $("#psd_img_2").show();

    }else if($str.length<16){

        $("#psd_img_2").hide();
        $("#psd_img_3").show();
    }
})
*/

$("#psd").blur(function(){
    var str=$("#psd")[0].value;
    $(".psd_qd").hide();
	var reg=/^[A-Za-z0-9]\w{5,15}$/;
	if(reg.test(this.value)==false){
        $(".psd_qd").show();
        $("#psd_img_1").hide();
        $("#psd_img_2").hide();
        $("#psd_img_3").hide();
	}else{
		if(str.length<=8 ){
            $("#psd_img_1").show();
            $("#psd_img_2").hide();
            $("#psd_img_3").hide();
		}else if(str.length<=12 && str.length>8){
            $("#psd_img_1").hide();
           $("#psd_img_2").hide();
			$("#psd_img_2").show();
		}else if(str.length<=16 &&str.length>12){
			$("#psd_img_2").hide();
            $("#psd_img_3").show();
            
		}
	}
})






//检验密码输入是否一致
$("#again_psd").blur(function(){
    if($("#psd").val()!=$("#again_psd").val()){
        $(".check_psd").show();
    }else{
        $(".check_psd").hide();
    }
})

// 产生随机的验证码
function showMa(n){   
	var arr=["0","1","2","3","4","5","6","7","8","9","a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"];
	var str="";
	for(var i=0;i<n;i++){
		index=parseInt(Math.random()*arr.length);
		str+=arr[index];
	}
	return str; 
}

//验证码与输入的是否一致
// 获取文本框中的值 在jQuery中用val()
    $(".checkMa").blur(function(){
        // let regObj = /^[a-zA-Z0-9]{4}$/i;
        // if(regObj.test(this.value)!=$("#showMa").html()){
        //用正则只是只是验证了输入的和正则匹配，没法用正则验证过的和span的内容相比较
        if( $(".checkMa").val()!=$("#showMa").html()){
            $(".check_word").show();
        }else{
            $(".check_word").hide();
        }
    })
 




$(function(){
    $("#showMa").html(showMa(4)) ;  //页面一打开显示验证码

    $("#check_Ma").click(function(){   //点击换码调验证码
        $("#showMa").html(showMa(4)) ;
    });
 })














