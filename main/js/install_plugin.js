var hidecortona = false;
var cortonaversion = "";
var cortonabuild = 0;

bd=false;
ver=Math.round(parseFloat(navigator.appVersion)*100);
ie=navigator.appName.toLowerCase().indexOf('microsoft') != -1;
opera=navigator.userAgent.toLowerCase().indexOf('opera') != -1;
chrome=navigator.userAgent.toLowerCase().indexOf('chrome') != -1;
safari=(navigator.userAgent.toLowerCase().indexOf('safari') != -1 && !chrome);
win = navigator.userAgent.toLowerCase().indexOf('win') != -1;
mac = navigator.userAgent.toLowerCase().indexOf('mac') != -1;
goodie = !opera && ie && ver >= 400 && win;
goodns = !opera && !ie && !safari && !chrome && ver >= 450 && ver < 500 && win;
goodns67 = !opera && !ie && !safari && !chrome && ver >= 500 & win;

cortbuild = 179;
c = self.location.host;

path = c + '/bin';

function installAndShow(emb) // this func is called from scenes which are opened in a new window (Volvo, Koenigsegg, etc.)
{
	installed();
	if (goodns67 || chrome || safari || opera)
	{ 
		if (cortonabuild == 0 && win)
		{
			document.write("<table cellpadding=40 cellspacing=2 bgcolor=#CCCCCC><tr><td align=center bgcolor=#FFFFFF>The 3D scene requires Cortona3D Viewer.<br><a href='" + c + "/products/cortona3d/download/'><img src='/l2/images/cortona/install-cortona.gif' border=0 vspace=10 hspace=20></a></td></tr></table><p>");
		}
		else if (cortonabuild < 179 && win)
		{
			document.write("<table cellpadding=40 cellspacing=2 bgcolor=#CCCCCC><tr><td align=center bgcolor=#FFFFFF>Your version of Cortona3D Viewer is out of date.<br><a href='" + c + "/products/cortona3d/download/'><img src='/l2/images/cortona/install-cortona.gif' border=0 vspace=10 hspace=20></a></td></tr></table><p>");		
		}
		else 
		{
			document.write(emb); 
		}	
	}
}

function installAndShow2(emb) // this func is called from scenes which are opened in a new window (Volvo, Koenigsegg, etc.)
{
	installed();

	if (goodns67 && (cortonabuild == 0))
		{ downloadNow(); }
		
	else if (!goodie) 
	{ 
		if ((cortonabuild == 0) && win)
		{
			document.write("<table cellpadding=40 cellspacing=2 bgcolor=#CCCCCC><tr><td align=center bgcolor=#FFFFFF>This 3D scene requires Cortona<sup>&reg;</sup> VRML Client.<br><a href='"+c+"/products/cortona/download/'><img src='/l2/images/cortona/install-cortona.gif' border=0 vspace=10 hspace=20></a></td></tr></table>");
		}
		else 
		{
			document.write(emb); 
		}	
	}
}



var flag = 0;

function installed()
{
   f = false;
   for (i = 0; i < navigator.plugins.length; i++)
   {
    	pl = navigator.plugins[i];
		for (j = 0; j < pl.length; j++)
		{
    		mime = pl[j];
    		if (!opera){
		 		if (mime.type.indexOf('vrml') != -1 && 
			        mime.suffixes.toLowerCase().indexOf('wrl') != -1 &&
		   		    mime.enabledPlugin.name == pl.name &&
			   	    pl.name.toLowerCase().indexOf('cortona') != -1)
				    {
						cortonaversion = pl.description.substring(pl.description.indexOf("(") + 1, pl.description.indexOf(")"));
						if (!cortonaversion.length) {
							cortonaversion = "2.2 or lower";
							cortonabuild = 40;
						} else {
							cortonabuild = cortonaversion.substring(cortonaversion.lastIndexOf(" "), cortonaversion.length);
						}
						f = true; break;
					}
				}
			else {
		 		if (mime.enabledPlugin.name == pl.name &&  pl.name.toLowerCase().indexOf('cortona') != -1)
				    {
						cortonaversion = pl.description.substring(pl.description.indexOf("(") + 1, pl.description.indexOf(")"));
						if (!cortonaversion.length) {
							cortonaversion = "2.2 or lower";
							cortonabuild = 40;
						} else {
							cortonabuild = cortonaversion.substring(cortonaversion.lastIndexOf(" "), cortonaversion.length);
						}
						f = true; break;
					}				
				}
		}
		if (f) break; 
	}
	return f;
}




