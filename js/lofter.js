function bg_change{
	document.getElementById("btn_denglu").style.background="url(../images/btn.png) -1px 522px";
}
function toVaild(){
	var val = document.getElementById("text_usermail").value;
	alert(val);
	if(val == "email@qq.com"){
 		 alert("校验成功，之后进行提交");
		 return true;
 	}else{
		alert("校验失败，不进行提交");
		return false;
	}
 }