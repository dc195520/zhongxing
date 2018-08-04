<?php

    //字符编码
    header("Content-type: text/html; charset=utf-8");

    //php语言中分号必须写
//  1、接受前端传来的数据
    $username = $_REQUEST["username"];  //[]中的为前端页面input框的name值
    $userpass = $_REQUEST["userpass"] 

//2
    //2.1连接数据库           mysql_connect
    $con = mysql_connect("localhost","root","root");
    //2.2判断数据库是否搭建成功
    if(!$con){
        die("数据库连接失败":.mysql_error());
    }else{
        //2.3选择数据库       mysql_select_db
        mysql_select_db("item01",$con);   //库名   连接的数据库

        //2.4执行语句  数据的传送
        $sqlstr = "insert into username(usernameid,userpassword) values('".$username."','".$userpass."')";
        // echo($sqlstr);
        mysql_query($sqlstr,$con);
    }

    //关闭数据库
    mysql_close($con);

    //响应
    echo "登陆成功";
    // echo "1";










?>