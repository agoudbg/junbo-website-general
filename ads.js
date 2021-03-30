// 先加载js
document.write("<script async src=\'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\'></script>");
ad_types=[/* 正方形 */"7888411968", /* 横向 */"8287867219", /* 资料站信息流 */"2505400067"];
function showad(type, width, height, others){
	
	if (getCookie("noad")==""){
		
		document.write("<ins class=\'adsbygoogle\'style=\'display:block;width:"+width+";height:"+height+";"+others+"\'data-ad-client=\'ca-pub-5639925822995109\'data-ad-slot=\'"+ad_types[type]+"\'data-full-width-responsive=\'false\' s></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script><div class='noblock button' style='display: none; width: 100%; margin: 10px auto;'><p style=' line-height: 2.0;padding: 20px;'>看起来你使用了广告拦截器。</p></div>");		
		
		return 0;
		
	}
	else{
		
		console.log("无广告");
		
	}
	
	
}

function closead(){
		
	document.cookie="noad=open; max-age=2626560;path=/;domain="+window.location.host;

	
}

function openad(){
		
	document.cookie="noad=; max-age=0;path=/;domain="+window.location.host;

	
}

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}

function adsblocked(){
	
	// alert("test");
	a=document.getElementsByClassName("noblock");
	
	for(i=0;i<document.getElementsByClassName("noblock").length; i++){
		
		a[i].style.display="block";
	}
	
}

window.onload = function () {
	
	if ( typeof(window.google_jobrunner) != 'object' ){
	// AdSense js not loaded
	// AdBlock detected
	adsblocked();
	}
			
	// window.setTimeout(function(){

	// adsblocked();
	// } }, 2000);

}

function showiframead(style,divid){
	if (getCookie("noad")=="")
		document.getElementById(divid).innerHTML="<iframe src='//cdn.junbo.wang/ad.html'  frameboader='no' style='"+style+";border-width:0;'></iframe>";
	
	
}
