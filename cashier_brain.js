//cashier reciept calculator js

var shopping_list = []; //creates a new shopping_list array

function add_item(item){ 
     shopping_list.push(item); //pushes shopping_list into array 
     alert(item.name + ' added '); //alert item added
}

function new_item(){
     var item = {}; //create item
     item.name = prompt("name of item",""); //enter name of item
     item.price = prompt("price of Item(in pounds)",""); //enter price of item
     item.quantity = prompt("quantity",""); // enter the quantity

     item.totalprice = item.price * item.quantity; //gives the total price

     add_item(item); //add new item to shopping list

}

function show_receipt(){
     var receipt_text = "";
     var runningtotal= 0;
     for (i = 0; i < shopping_list.length; i++){

     	var item = shopping_list[i];

     	receipt_text = receipt_text + item.name + " "
     	+ item.quantity + "@&#163;"+ item.price;
     	+ " each. Total = @&#163;" + item.totalprice + "<br/>";
          runningtotal= runningtotal + item.totalprice;
          

     }

     console.log(receipt_text);

     receipt_text =receipt_text + "Total price is @&#163;" + runningtotal;
     

     document.getElementById('receipt_display').innerHTML = receipt_text;
}
 