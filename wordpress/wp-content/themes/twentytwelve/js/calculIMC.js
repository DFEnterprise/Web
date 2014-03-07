var ttt; 
var iii=0; 
var booll=true; 

function incrementee(id,indice){ 

        if(booll==true){ 
            iii=iii+1;
            document.getElementById(id).style.left=iii+'%'; 
            if(iii<indice){ 
                setTimeout("incrementee('fleche',"+indice+")",15); 
            }else{ 
                booll=false; 
            } 
        } 
    } 
	

function calculIMC(){
	iii = 0;
	booll=true; 
	//document.getElementById("fleche").style.left='0%'; 
	var aaaa = document.getElementById("fleche");
    taille=document.formIMC.taille.value;//recup valeur champ taille
    //gestion du format de la taille (avec un ou sans point ou avec une virgule)
    if(taille.indexOf(".")==-1 && taille.indexOf(",")==-1){//si taille n'a pas pas point et pas de virgule (taille est en centimètre)
    taille=taille/100;
    }else if(taille.indexOf(",")>=0){//sinon si taille a une virgule (formt chiffre français)
    taille=taille.replace(",",".");//remplacement dans la chaine de la virgule par un point
    }
   
    poids=document.formIMC.poids.value;
    calcul=Math.round((poids/(taille*taille)*10))/10;
   
    if(calcul<=15){
	incrementee("fleche",90);
    txtIMC="famine";
    }else if(calcul<=18.5){
	incrementee("fleche",60);
    txtIMC="maigreur";
    }else if(calcul<=25){
	incrementee("fleche",20);
    txtIMC="corpulence normale";
	}else if(calcul<=30){
	incrementee("fleche",60);
    txtIMC="surpoids";
	
    }else if(calcul<=35){
	incrementee("fleche",70);
    txtIMC="obésité modéré";
    }else if(calcul<=40){
	incrementee("fleche",80);
    txtIMC="obésité sévère";
    }else if(calcul>40){
		incrementee("fleche",90);
	txtIMC="obésité massive ou morbide";
    }else{txtIMC="valeur incorrecte";}
    document.getElementById("resultIMC").innerHTML=calcul+" "+txtIMC;
    return false;
};//fin fonction calculIMC

