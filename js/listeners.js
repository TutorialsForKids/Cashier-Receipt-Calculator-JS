$(document).ready(function(){
	cashier.initListeners();
	shopping_list = ((cashier.getCacheList() != null) ? JSON.parse(cashier.getCacheList()) : []);
	cashier.show_receipt();
});

cashier.initListeners = function(){
	$('body').on('click', 'a.add_new_item', function(){
		cashier.new_item();
	});

	$('body').on('click', 'a.delete_item', function(){
		var id = $(this).data('id');
		cashier.delete_item(id);
	});

	$('body').on('click', 'button.print_receipt', function(){
		window.print();
	});
}
