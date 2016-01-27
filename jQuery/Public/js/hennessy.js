addLoadEvent(changepoet());
addLoadEvent(good());
addLoadEvent(saymessage());

function moveElement(elementID,final_x,final_y,interval)
{
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem=document.getElementById(elementID);
	elem.style.display="block";
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if (elementID=="tp1") 
	{
		if (xpos==final_x&&ypos==final_y) 
		{
			moveElement('tp2',250,25,20);
			return true;
		}
	}
	else
	{
		if (xpos==final_x&&ypos==final_y) 
		{
			return true;
		}
	}
	
	if (xpos<final_x) 
	{
		xpos++;
	}
	if (xpos>final_x) 
	{
		xpos--;
	}
	if (ypos<final_y) 
	{
		ypos++;
	}
	if (ypos>final_y) 
	{
		ypos--;
	}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	movement=setTimeout(repeat,interval);
}


function changepoet()
{
	if (!document.getElementById) return false;
	if (!document.getElementById("tp1")||!document.getElementById("tp2")) return false;
	p1=document.getElementById("tp1");
	p2=document.getElementById("tp2");
	p1.style.display="none";
	p2.style.display="none";
	p1.style.position="absolute";
	p2.style.position="absolute";
	p1.style.left="0px";
	p1.style.top="0px";
	p2.style.left="0px";
	p2.style.top="25px";
	moveElement("tp1",200,0,20);
}



function good()
{
	if (!document.getElementById) return false;
	if (!document.getElementById("ga1")) return false;
	ga1=document.getElementById("ga1");
	ga1.onclick=function()
	{
		alert("感谢您的喜欢~~");
		return false;
	}
	ga1.onmouseover=function()
	{
		ga1.style.fontSize="60px";
	}
	ga1.onmouseout=function()
	{
		ga1.style.fontSize="50px";
	}
}




function saymessage()
{

	if (!document.getElementById) return false;
	if (!document.getElementById("textarea1")) return false;
	if (!document.getElementById("sayhidden")) return false;
	textarea=document.getElementById("textarea1");
	sayhidden=document.getElementById("sayhidden");
	textarea.onclick=function()
	{
		sayhidden.style.display="block";
	}
	


}

