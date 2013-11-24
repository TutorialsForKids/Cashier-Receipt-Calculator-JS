//Cashier Reciept Calculator JS

var shopping_list = []; //creates a new shopping_list array

function add_item(item){
	shopping_list.push(item); //pushes shopping_list into array
	alert(item.name + ' added!'); //alert item added
}

function new_item(){
	var item = {}; //create new object called item
	item.name = prompt("Name of item",""); //enter name of item
	item.price = prompt("Price of item (in pounds)",""); //enter price of item
	item.quantity = prompt("Quantity of item", ""); //enter the number of quantity for this item
	add_item(item); //add new item to shopping list
}
