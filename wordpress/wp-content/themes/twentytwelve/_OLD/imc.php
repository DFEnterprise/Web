 
   <?php
   
   if (isset($_POST['valider'])) {
   $name=$_POST['nom'];
   $taille=$_POST['taille'];
   $poids=$_POST['poids'];
   $IMC=$poids/($taille*$taille);
   
   
	   if($poids != NULL && $taille!= NULL)
	   {
		   echo'Bonjour '.$name.' <br/>
   			votre IMC (indice de masse corporelle) est exactement de '.$IMC.' <br/>
  			vous';
		   if ($IMC<16.5) {
		   echo'êtes en dénutrition';
		   }
		   elseif ($IMC<18.5) {
		   echo'êtes en état de maigreur';
		   }
		   elseif ($IMC<25) {
		   echo'avez une corpulence normale';
		   }
		   elseif ($IMC<30) {
		   echo'êtes en surpoids';
		   }
		   elseif ($IMC<35) {
		   echo'êtes en état d\'obèsité modérée';
		   }
		   elseif ($IMC<40) {
		   echo'êtes en état d\'obèsité sévère';
		   }
		   else {
		   echo'êtes en état d\'obèsité morbide, consultez un médecin';
		   }
	   }
	   else
	   {
			echo'merde';   
	   }
   }
   
   ?>