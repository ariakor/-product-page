$(document).ready(function(){
	    $(".menu_mob").click(function(){
	        $("#menu_mob").slideToggle("slow");
	        return false;
	    });
	     $("menu_close_mob").click(function(){
	        $("#menu_mob").slideToggle("slow");
	        return true;
	    });
	});