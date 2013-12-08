//Cashier Reciept Calculator JS
var shopping_list = []; //creates a new shopping_list array

function add_item(item){
	shopping_list.push(item); //pushes shopping_list into array
	alert(item.name + 'added!'); //alert item added
	show_receipt();

}

function new_item(){
	var item = {}; //create item
	item.name = prompt("Name Of Item",""); //enter name of item
	item.price = prompt("Price of item (in pounds)",""); //enter price of item
	item.quantity = prompt("quantity of Item","") //quantity of item
	item.totalPrice = item.price * item.quantity; //gives total price of items
	add_item(item); //add new item to shopping list

}

 function show_receipt(){

 	var receipt_text = "";
 	var total = 0;

 	for (i = 0; i < shopping_list.length; i++){

 		var item = shopping_list[i];
 		var totalPrice = item.totalPrice;

 		receipt_text = receipt_text + item.name +" "
 		+ item.quantity + "@&#163;" + item.price
 		+ " each. Total = &#163;" + item.totalPrice + "<br/>";

 		alert(total);
 		total = total + item.totalPrice;  
 	}
 		receipt_text = receipt_text + "Final Price " + total;

 	document.getElementById('receipt_display').innerHTML = receipt_text;
 }