<?php include("header.html");?>



<?php include ("menuAccueil.html");?>



<?php include("footer.html");?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js" type="text/javascript"></script>      
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script> 
<script type="text/javascript" src="menu/fancydropdown.js"></script>
<script type="text/javascript">

function chargementPages(page)
{
	
}

$('.SousMenu').hover(function () {
		$(this).stop(true).animate({paddingLeft: '5px'}, {speed: 150, easing: 'easeInOutQuart'});
	}, function () {
		$(this).stop(true).animate({paddingLeft: '0'}, {speed:90, easing: 'easeInOutExpo'});
});
$('.titre').hover(function () {
		$(this).stop(true).animate({paddingLeft: '10px'}, {speed: 100, easing: 'easeOutBack'});
	}, function () {
		$(this).stop(true).animate({paddingLeft: '0'}, {speed: 100, easing: 'easeOutBounce'});
});
</script>