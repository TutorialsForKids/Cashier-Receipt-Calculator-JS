$(document).ready(function(){
	cashier.initListeners();
});

cashier.initListeners = function(){
	$('body').on('click', 'a.add_new_item', function(){
		cashier.new_item();
	});

	$('body').on('click', 'a.delete_item', function(){
		var id = $(this).data('id');
		cashier.delete_item(id);
	});
}
