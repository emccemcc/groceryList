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
//stored value of array in object rather than array itself
/* method 1
var groceryArray = [groceryApple.name,
                    groceryApple.price,
                    groceryBananna.name,
                    groceryBananna.price,
                    groceryKiwi.name,
                    groceryKiwi.price];
*/
//trying to push instead




//method 1
/*
var sum = 0;
groceryArray.forEach(function (groceryList){
  console.log(groceryList);
  if (groceryList < 5){
    sum +=groceryList;
  }

});
console.log("The total amount for all these items is $" + sum);
*/
//method 2

var sum = 0;
var groceryArray = [];
groceryArray[0] = groceryApple;
groceryArray[1] = groceryBananna;
groceryArray[2] = groceryKiwi;

//Adding on changes for lab 8 on text changes and total adding
//var firstItem = document.getElementById('test');
//firstItem.innerHTML = "Name: " + groceryArray[0].name+ " Price: $"+groceryArray[0].price+".00";

//why wouldn't tag work when I used it for h1?
//console.log(groceryArray);
//Calling it outsdie to make sure that sum can also use it
var itemClass = document.getElementsByClassName("col-lg-6");

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


//hmmm adding that removed my sum, might need to do another funciton to call the sum?
//for (var i; i < groceryArrayCalled().length; i++){
//  sum += groceryFunction.price;
//}

//sum not workings
var totalPrice =  function () {totalPrice = document.createElement("h4");
totalPrice.textContent = "Total Price: $"+sum+".00";
itemClass[0].appendChild(totalPrice)};

// Add in from Adam's example
var addItem = function addItem (){
var newItem = document.getElementById('newItem').value;
var newPrice = document.getElementById('newPrice').value;

var addedItems = {
  name: newItem,
  price: newPrice
};
//New array for addign at end

var itemNameAdd = document.createElement("h4");
itemNameAdd.textContent = "The grocery item " + addedItems.name + " has a price of $"+addedItems.price+".00";
itemClass[0].appendChild(itemNameAdd);
groceryArray.push(addedItems);
sum+=addedItems.price;
//new function
var reAddSum = function (){
  for(var i = 0; i < groceryArray.length;i++)
  sum+=groceryArray.price;
  return sum;
}
totalPrice();
//adding to new array too


//creating new appendChild for array


//it is an array and a square bracket needs to be called

};
totalPrice();
//new item with text content plus names and append child and then add the appending bracket
//total.textcontent =total variable
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
