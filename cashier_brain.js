//Cashier Reciept Calculator JS
var shopping_list = []; //creates a new shopping_list array

function add_item(item){
	shopping_list.push(item); //pushes shopping_list into array
	alert(item.name + 'added!'); //alert item added

}

function new_item(){
	var item = {}; //create item
	item.name = prompt("Name Of Item",""); //enter name of item
	item.price = prompt("Price of item (in pounds)",""); //enter price of item
	add_item(item); //add new item to shopping list
}
