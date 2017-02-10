//commenting out itialized values
 var groceryApple = {
  name: "Apple",
  price: 3.00
}

var groceryBananna = {
  name: "Bananna",
  price: 2.00
}

var groceryKiwi = {
  name: "Kiwi",
  price: 1.00
}

var sum = 0;
var groceryArray = [];
//commenting out  initial array
 groceryArray[0] = groceryApple;
groceryArray[1] = groceryBananna;
groceryArray[2] = groceryKiwi;

var itemClass = document.getElementsByClassName("col-lg-6");
var footer = document.getElementsByClassName("footer");
var totalPrice1 = document.createElement("h4");
totalPrice1.className = "sum";
  totalPrice1.textContent = "Total Price: $"+sum+".00";
  footer[0].appendChild(totalPrice1);
//  totalPrice.textContent = "Total Price: $"+sum+".00";
  //footer[0].replaceChild(totalPrice,totalPrice);


var groceryArrayCalled = function () {groceryArray.forEach(function(groceryFunction){
  console.log("Name: " +groceryFunction.name + " Price: $"+groceryFunction.price+".00");
  sum += groceryFunction.price;
  //Item
  var itemName = document.createElement("h4");

  itemName.textContent = "The grocery item " + groceryFunction.name + " has a price of $"+groceryFunction.price+".00";

//it is an array and a square bracket needs to be called
  itemClass[0].appendChild(itemName);

  //Price
  //var itemPrice = document.createElement("p");
  //itemPrice.textContent = groceryFunction.price;
  //itemName.appendChild(itemPrice);

});};
groceryArrayCalled();




//sum not workings





// Add in from Adam's example
var addItem = function addItem (){
var newItem = document.getElementById('newItem').value;
var newPrice = parseInt(document.getElementById('newPrice').value);

var addedItems = {
  name: newItem,
  price: newPrice
};
//New array for addign at end

var itemNameAdd = document.createElement("h4");
itemNameAdd.textContent = "The grocery item " + addedItems.name + " has a price of $"+addedItems.price+".00";
itemClass[0].appendChild(itemNameAdd);
groceryArray.push(addedItems);

//remove from input
sum+=parseInt(addedItems.price);
totalPrice1.textContent = "Total Price: $"+sum+".00";







document.getElementById("newItem").value="";
document.getElementById("newPrice").value="";
//totalPrice.Value="";



};
//

  //replace




//new item with text content plus names and append child and then add the appending bracket

//create append, push, then refresh total
  //groceryArray.push(addItem); //maybe?
//replace child?

//

//var submission = document.getElementsByClassName("btn");
//submission.addEventListner('click', addItem);
//onclick onclick="addItem ()"



//console.log("Total Price: $"+sum+".00");
// x.className = "something";


  //more grandular for mine?
//we can't change but we can add?

//could do a for each to dispaly them
