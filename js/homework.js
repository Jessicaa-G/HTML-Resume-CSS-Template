let list=document.getElementsByClassName("like");
							for(let i in list)
							{
								list[i].onclick=function(){
									list[i].style.backgroundImage="url(img/heart.png)";
								};
							}

let year=document.getElementById("year");
let content=document.getElementById("content");
let education=document.getElementById("education");
let workexperience=document.getElementById("workexperience");
workexperience.onclick=function(){
	year.innerHTML="2014-2017<br/>2017-2019<br/>2019-2020";
	content.innerHTML="Powergirl Company<br/>Bubble Company<br/>Powerpuff Company";
	education.style.borderBottom="1px solid black";
	workexperience.style.borderBottom="none";
}

education.onclick=function(){
	year.innerHTML="1998-2004<br/>2004-2007<br/>2007-2010<br/>2010-2014";
	content.innerHTML="Powerpuff Primary School<br/>Powerpuff Middle School<br/>Powerpuff High School<br/>Powerpuff University";
	workexperience.style.borderBottom="1px solid black";
	education.style.borderBottom="none";
}