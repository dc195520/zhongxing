
// 产生随机的验证码
function showMa(n){   //有参数
	var arr=["0","1","2","3","4","5","6","7","8","9","a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"];
	var str="";
	for(var i=0;i<n;i++){
		index=parseInt(Math.random()*arr.length);//随机下标
		str+=arr[index];
	}
	return str; 
}

//页面一打开显示验证码	
$("#showMa").html(showMa(4));
	
//点击换验证码
$("#check_Ma").click(function(){
	$("#showMa").html(showMa(4)) ;
})

//检验是否输入用户名
// 获取文本框中的值 在jQuery中用val()

	$("#username").blur(function(){
		if($("#username").val()==""){
			$(".sjzc").show();
		}else{
			$(".sjzc").hide();
		}
	})

//检验验证码输入是否一致
	$(".checkMa").blur(function(){
		if($(".checkMa").val()!=$("#showMa").html()){
			$(".check_word").show();
		}else{
			$(".check_word").hide();
		}
	})




//获取cookie
function addCookie(key,value,days){
	var d = new Date();
	d.setDate(d.getDate()+days);
	//保存cookie；
	document.cookie = key+"="+escape(value)+";expires="+d.toGMTString();	
}	

//用jquery请求ajax

// $(function(){
// 	$(".smt").click(function(){
// 		let 
// 	})
// })

window.onload = function(){
	$(".smt").onclick = function(){
		//1、创建请求对象
		let  xhr = new XMLHttpRequest();
		//2、设置请求参数(请求方式   请求地址    异步同步)
		xhr.open("post","login.php",true);
		//3、设置回掉函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				//交互完成 			服务器成功处理请求并返回请求的网页
				if(xhr.responseText==1){ //响应
					// 1、保存cookie
					addCookie("username",$("#username").value,7);
					//2、 跳转到首页
					location.href = "index.html";					
				}else{
					// $(".check_login").show();
					$(".check_login").innerHTML = "用户名或密码输入有误";
				}
			}
		}
		//设置请求头部
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let sendStr= "username="+$("#username").value+ "&userpassword="+$("#userpass").value;
		xhr.send(sendStr);
	}
}


    


