<?php include("header.html");?>



<?php include ("Contenu.php");?>



<?php include("footer.html");?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js" type="text/javascript"></script>      
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script> 
<script type="text/javascript" src="menu/fancydropdown.js"></script>
<script type="text/javascript">
function affichageSousMenu(menu)
{
	
	
	switch (menu){
		
		case 'LaConsultation':
		$('.SousMenuLaConsultation').slideDown("slow");
		$('.SousMenuRecettes').slideUp("slow");
	
		break;
		case 'Recettes':
		$('.SousMenuRecettes').slideDown("slow");
		$('.SousMenuLaConsultation').slideUp("slow");
		
		break;
		
	}
	
}

</script>