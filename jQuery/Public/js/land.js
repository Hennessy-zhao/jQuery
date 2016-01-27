addLoadEvent(land());

function land()
{
	if (!document.getElementById) return false;
	if (!document.getElementById("hennessy")||!document.getElementById("hiddenn")) return false;
	hennessy=document.getElementById("hennessy");
	hiddenn=document.getElementById("hiddenn");
	hennessy.onclick=function()
	{
		
		if (hiddenn.style.display=="") 
		{
			hiddenn.style.display="block";
		}
		else
		{
			hiddenn.style.display="";
		}
	}

	
}