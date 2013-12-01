//Cashier Reciept Calculator JS

var shopping_list = []; //creates a new shopping_list array

function add_item(item){
	shopping_list.push(item); //pushes shopping_list into array
	//alert(item.name + ' added!'); //alert item added
	show_receipt(); //displays receipt
}

function new_item(){
	var item = {}; //create new object called item
	item.name = prompt("Name of item",""); //enter name of item
	item.price = prompt("Price of item (in pounds)",""); //enter price of item
	item.quantity = prompt("Quantity of item", ""); //enter the number of quantity for this item
	item.totalPrice = item.price * item.quantity; //gives total price of item
	add_item(item); //add new item to shopping list
}

function show_receipt(){

	var receipt_text = ""; //creates receipt_text string
	var total = 0; 

	//loops the shopping_list array and adds to display
	for (i = 0; i < shopping_list.length; i++){ 

		var item = shopping_list[i];
		var totalPriceOfItem = item.totalPrice;

		receipt_text = receipt_text + item.name + " "
		+ item.quantity + "@$" + item.price 
		+ " each. Total = $" + item.totalPrice + "<br/>";

		//add item total to running total
		total = total + totalPriceOfItem;
	}

	//add total price to display
	receipt_text = receipt_text + "Total Price of Items is $" + total;

	//adds to display
	document.getElementById('receipt_display').innerHTML = receipt_text;
}
