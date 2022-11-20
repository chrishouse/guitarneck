$(document).ready(function(){
	$('.fret, .label').click(function(){
		$(this).find('p').toggle();
	});
	$('.show-btn').click(function(){		
		$('.fret p, .label p').show();
	});
	$('.hide-btn').click(function(){		
		$('.fret p, .label p').hide();
	});
	$('.fret p:contains("E")').css({
		'background-color' : "#e8a55f"
	});
	$('.fret p:contains("F")').css({
		'background-color' : "#e0ee49"
	});
	$('.fret p:contains("G")').css({
		'background-color' : "#65e85f"
	});
	$('.fret p:contains("A")').css({
		'background-color' : "#5f78e8"
	});
	$('.fret p:contains("B")').css({
		'background-color' : "#cd5fe8"
	});
	$('.fret p:contains("C")').css({
		'background-color' : "#e85f6f"
	});
	$('.fret p:contains("D")').css({
		'background-color' : "#5fc9e8"
	});
	$('.fret p:contains("#")').css({
		'background-color' : "#dcdcdc"
	});
});