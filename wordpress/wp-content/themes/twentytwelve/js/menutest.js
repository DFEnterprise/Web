var decalage = 0;
var nbBout;   
var timer;
var imclinktest = 1;

function menutest(nb)
{
 var angle = 360 / nb;      
 nbBout = nb;
 var posX;
 var posY;
 var rayon = 60;
 var centreX = document.getElementById("centretest").offsetLeft;
 var centreY = document.getElementById("centretest").offsetTop;
 var lItemtest = 20;
 var i = 1;
 var itemtest;
 var b;
 
for(b = 0; b < 360; b += angle)
 {        
  posX = centreX + 25 + rayon * Math.cos(b * Math.PI / 180);
  posY = centreY + 25 + rayon * Math.sin(b * Math.PI / 180); 
  
  itemtest = document.getElementById("itemtest" + i);
  itemtest.className = "itemtest";  
  itemtest.style.top = (posY - lItemtest / 2) + "px"; 
  itemtest.style.left = (posX - lItemtest / 2) + "px";
  i++;
 }
}

function anim()
{		  
 decalage = decalage + imclinktest;
 var angle = 360 / nbBout;		
 var posX;
 var posY;
 var rayon = 70;
 var centreX = document.getElementById("centretest").offsetLeft;
 var centreY = document.getElementById("centretest").offsetTop;
 var lCentre = 50;
 var lItemtest = 20;
 var i = 1;
 var itemtest
 var b;

 for(b = 0; b < 360; b = b + angle)
 {		  
  posX = centreX + 25 + rayon * Math.cos((b + decalage) * Math.PI / 180);
  posY = centreY + 25 + rayon * Math.sin((b + decalage) * Math.PI / 180); 
  
  itemtest = document.getElementById("itemtest" + i);
  itemtest.style.top = (posY - lItemtest / 2) + "px"; 
  itemtest.style.left = (posX - lItemtest / 2) + "px";
  i++;
 }	
}

timer = setInterval("anim()",50);