// JavaScript Document
$(document).ready(function () {
	$('.menu li').click(function(){
		if($(this).children('ul.sub-menu').length!=0 && $(this).children('ul.sub-menu').is(':visible')==false){
			$(this).parent('ul').children('li').children('ul.sub-menu').slideUp('fast');
			$(this).children('ul.sub-menu').slideDown('slow');
			$('#sidebar .current-menu-ancestor').removeClass('current-menu-ancestor');
			$('#sidebar .current-page-ancestor').removeClass('current-page-ancestor');
			$('#sidebar .current-menu-item').removeClass('current-menu-item');

			$(this).addClass('current-menu-ancestor');
			return false;
		}
	}); 
});
            $(function() {
                $('#accordion > li').hover(
                    function () {
                        var $this = $(this);
                        $this.stop().animate({'width':'400px'},1000);
                        $('.heading',$this).stop(true,true).fadeOut();
                        $('.bgDescription',$this).stop(true,true).slideDown(1000);
                        $('.description',$this).stop(true,true).fadeIn();
                    },
                    function () {
                        var $this = $(this);
                        $this.stop().animate({'width':'50px'},1000);
                        $('.heading',$this).stop(true,true).fadeIn();
                        $('.description',$this).stop(true,true).fadeOut(500);
                        $('.bgDescription',$this).stop(true,true).slideUp(700);
                    }
                );
            });
