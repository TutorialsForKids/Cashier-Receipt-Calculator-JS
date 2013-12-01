//Cashier Reciept Calculator JS
window.cashier = {}

var shopping_list = []; //creates a new shopping_list array

cashier.add_item = function(item){
	shopping_list.push(item); //pushes shopping_list into array
	cashier.show_receipt(); //displays receipt
}

cashier.delete_item = function(id){
	for (i in shopping_list){
		if (shopping_list[i].id == id){
			shopping_list.splice(i, 1);
			break;
		}
	}
	cashier.show_receipt();
}

cashier.new_item = function(){
	var item = {}; //create new object called item
	item.id = guid();
	item.name = prompt("Name of item",""); //enter name of item
	item.price = prompt("Price of item (in pounds)",""); //enter price of item
	item.quantity = prompt("Quantity of item", ""); //enter the number of quantity for this item
	item.totalPrice = item.price * item.quantity; //gives total price of item
	cashier.add_item(item); //add new item to shopping list
}

cashier.show_receipt = function(){

	var receipt_text = ""; //creates receipt_text string
	var total = 0; 

	//loops the shopping_list array and adds to display
	for (i = 0; i < shopping_list.length; i++){ 

		var item = shopping_list[i];
		var totalPriceOfItem = item.totalPrice;

		receipt_text += "<tr>";
		receipt_text += "<td>" + item.name + "</td>";
		receipt_text += "<td>&pound;" + parseFloat(item.price).toFixed(2) + "</td>";
		receipt_text += "<td>" + item.quantity + "</td>";
		receipt_text += "<td>&pound;" + parseFloat(item.totalPrice).toFixed(2) + "</td>";
		receipt_text += "<td><a class='delete_item' data-id="+item.id+"><span class='glyphicon glyphicon-remove'></span></a></td>";
		receipt_text += "</tr>";

		//add item total to running total
		total = total + totalPriceOfItem;
	}

	if (!shopping_list.length) receipt_text = '<tr><td colspan="5">No items added to list.</td></tr>';

	var vat = total * 0.25;
	var gross_total = total - vat;
	var net_total = total;

	//adds to display
	$('.item_displays').html(receipt_text);
	$('.gross-total').text(gross_total.toFixed(2));
	$('.vat-total').text(vat.toFixed(2));
	$('.net-total').text(net_total.toFixed(2));

	//cache list
	cashier.cacheList();
}

cashier.cacheList = function(){
	var json = JSON.stringify(shopping_list);
	window.sessionStorage.setItem("basket", json);
}

cashier.getCacheList = function(){
	return window.sessionStorage.getItem('basket');
}
