(function(){var a=a||{};a.b=a.b||{};a.b.m=function(b){for(var c=document.cookie.split(";"),e=0;e<c.length;e++){for(var d=c[e];d.charAt(0)==" ";)d=d.substring(1,d.length);if(d.indexOf(b+"=")==0)return d.substring((b+"=").length,d.length)}return null};a.b.n=function(b,c){document.cookie=b+"="+c+"; path=/; domain=.shareaholic.com; expires=Fri, 01-Jan-2038 00:00:01 GMT"};a.b.i=function(b){document.cookie=b+"=; path=/; domain=.shareaholic.com; expires=Thu, 01-Jan-1970 00:00:01 GMT"};a=a||{};a.a=a.a||{};a.a.p="d.shareaholic.com";
a.a.q="/dough";a.a.s="1.0";a.a.r=location.protocol+"//"+a.a.p+a.a.q+"/"+a.a.s+"/";a.a.o="mixer.gif";a.a.d="pss";a.a.c="lps";a.a.t=15;a.a.e=0;a.a.f=1;a.a.h=function(b,c){b.addEventListener?b.addEventListener("load",c,!1):b.attachEvent&&b.attachEvent("onload",c)};a.a.u=function(b){switch(b){case a.a.e:b="AN";break;case a.a.f:b="DX";break;default:b="none"}return b};a.a.l=function(){data=a.b.m(a.a.d);if(data==null){data="";for(var b=0;b<100;b++)data+="0"}return data};
a.a.z=function(b){return a.a.l()[b]=="1"};a.a.A=function(b){data=a.a.l();data[b]!="1"&&(new_data=data.substr(0,b)+"1"+data.substr(b+1),a.b.n(a.a.d,new_data));a.b.n(a.a.c,(new Date).getTime())};a.a.g=function(){a.b.i(a.a.d);a.b.i(a.a.c)};
a.a.B=function(){var b=a.b.m(a.a.c);if(b==null)a.a.g();else{var c=new Date;c.setTime(b);b=new Date;b.setDate((new Date).getDate()-a.a.t);b>c&&a.a.g()}a.a.j(a.a.e,"$UID","ib.adnxs.com/getuid?",!0);a.a.j(a.a.f,"_wfivefivec_","i.w55c.net/ping_match.gif?st=SAH&rurl=",!1)};a.a.j=function(b,c,e,d){a.a.z(b)||a.a.w(b,c,e,d)};
a.a.w=function(b,c,e,d){var g=a.a.u(b);id="shr_p_"+String(b);var f=document.createElement("img");f.setAttribute("id",id);f.setAttribute("src",a.a.k(g,c,e,"",d));f.style.display="none";a.a.h(f,function(){a.a.A(b)});document.body.appendChild(f)};a.a.v=function(b,c){return a.a.r+a.a.o+"?p_name="+b+"&p_id="+c};a.a.k=function(b,c,e,d,g){return g?location.protocol+"//"+e+encodeURIComponent(a.a.k(b,c,e,d,!1))+d:location.protocol+"//"+e+encodeURIComponent(a.a.v(b,c))+d};a.a.h(window,a.a.B);})();