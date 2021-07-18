jQuery('document').ready(function($){
	var menuBtn = $('.menuicon'),
		menu = $('#menu ul');

	menuBtn.click(function(){

		if (menu.hasClass('show')) {
			menu.removeClass('show');
		} else	{
			menu.addClass('show');
		}
	});
});