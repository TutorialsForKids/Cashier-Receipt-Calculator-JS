//Cashier Reciept Calculator JS
window.cashier = {}
	
var shopping_list = []; //creates a new shopping_list array

cashier.add_item = function(item){
	shopping_list.push(item); //pushes shopping_list into array
	cashier.show_receipt(); //displays receipt
}

cashier.new_item = function(){
	var item = {}; //create new object called item
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

		receipt_text += item.name + " ";
		receipt_text += item.quantity + "@$" + item.price;
		receipt_text += " each. Total = $" + item.totalPrice + "<br/>";

		//add item total to running total
		total = total + totalPriceOfItem;
	}

	//add total price to display
	receipt_text += "<strong>Total Price of Items is $" + total + "</strong>";

	//adds to display
	$('#receipt_display').html(receipt_text);
}
