$(".x").click(function(){
	$(".top_ad").css("display","none");
})
//倒计时
var   aaa = document.getElementById("time");
function gettime(){
	var endtime = new Date("2017/4/24 19:39:00");
	var nowtime = new Date()
	var t = endtime - nowtime;
	var hour = Math.floor(t/(1000*60*60)%24);
	var fen = Math.floor(t/(1000*60)%60);
	var miao = Math.floor((t/1000)%60);
	document.getElementById("hour").innerText = hour;
	document.getElementById("minute").innerText = fen;
	document.getElementById("second").innerText = miao;
	if(t < 1000 ){
		aaa.innerHTML  ="<a href ='http://www.baidu.com'>前往秒杀</a>"
	}
	if(miao<10){
		document.getElementById("second").innerText = "0"+miao;
	}
	if(hour<10){
		document.getElementById("hour").innerText = "0"+hour;
	}
}
setInterval(gettime,1000)
