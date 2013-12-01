$(document).ready(function(){
	cashier.initListeners();
});

cashier.initListeners = function(){
	$('body').on('click', 'a.add_new_item', function(){
		cashier.new_item();
	});
}
