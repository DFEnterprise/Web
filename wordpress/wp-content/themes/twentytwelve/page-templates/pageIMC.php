<?php
/**
 * Template Name: IMC Page
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

<div id="main-content" class="main-content" >
	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">
			<form action="calculIMC.js" name="formIMC" onsubmit="return calculIMC();">
<label>taille :</label><br />
<input type="text" name="taille" /><br />

<label>poids :</label><br />
<input type="text" name="poids" />
<label>&nbsp;</label><br />
<input type="submit" value="afficher" onclick="calculIMC();" />
</form>
 <div id="resultIMC"></div>
 
<div id="testbandeauanimer">
<img src="<?php echo get_bloginfo('template_url') ?>/images/bandeau.jpg" />
<img  id="fleche" src="<?php echo get_bloginfo('template_url') ?>/images/fleche.png" height="50" width="50" align="bottom"/>
</div>
 
 
 
 <!-- <div id="menutest"> 
 <h2>Menu</h2> 
 <div id="centretest">
  Centre   
 </div>
 <ul>
  <li id="itemtest1" >Menu 1</li>
  <li id="itemtest2" >Menu 2</li>
  <li id="itemtest3" >Menu 3</li>
  <li id="itemtest4" >Menu 4</li>
  <li id="itemtest5" >Menu 5</li> 
 </ul>
</div>-->
 
 
		</div><!-- #content -->
	</div><!-- #primary -->
</div><!-- #main-content -->

<?php
get_sidebar();
get_footer();
